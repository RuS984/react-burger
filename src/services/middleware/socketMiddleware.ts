import type { Middleware, MiddlewareAPI } from 'redux'; 
import { TApplicationActions } from '../../utils/Types/reduxThunkTypes';
import { TOrdersFeedProps, TWSOrdersFeedRootActions } from '../../utils/Types/ordersFeedTypes';
import { apiUrl } from '../../utils/appApi';
import { TWSOrdersFeedRootActionsUser } from '../../utils/Types/ordersFeedTypesUser';


export const socketMiddleware = (WebSocketApi: string, WebSocketActions: TWSOrdersFeedRootActions | TWSOrdersFeedRootActionsUser ): Middleware => {
  return (store: MiddlewareAPI) => { 
    let socket: WebSocket | null = null;

    const { wsInit, onOpen, onMessage, onClose, onError } = WebSocketActions;

    return next => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === wsInit) {
        socket = new WebSocket(action.payload);


        console.log('WebSocket connection initiated:', socket);
      }

      if (socket) {
        socket.onopen = event => {
          dispatch({ type: onOpen, payload: event });
          console.log('WebSocket connection opened:', event);
        };

        socket.onmessage = async event => {
          const { data } = event;
          const parsedData: { orders: TOrdersFeedProps[], total: number, totalToday: number, success: boolean, message?: string } = JSON.parse(data);

          if (parsedData.message === "Invalid or missing token") {
            const tokenResponse = await updateTokenSocket();
            if (tokenResponse.success) {
              const newSocketUrl = `${WebSocketApi}`; 
              socket = new WebSocket(newSocketUrl);
              dispatch({ type: wsInit, payload: newSocketUrl });
            }
          } else if (parsedData.success) {
            dispatch({
              type: onMessage,
              orders: parsedData.orders,
              total: parsedData.total,
              totalToday: parsedData.totalToday,
            });
            console.log('Received WebSocket data:', parsedData);
          } else {
            dispatch({ type: onError, payload: event });
            console.error('WebSocket data error:', event);
          }

        };

        socket.onclose = event => {
          dispatch({ type: onClose, payload: event });
          console.log('WebSocket connection closed:', event);
        };

        if (type === onClose) {
          socket.close();
          console.log('WebSocket connection closed manually.');
        }
      }

      next(action);
    };
  };
};



const updateTokenSocket = async (): Promise<{ success: boolean, accessToken?: string }> => {
  const refreshToken = localStorage.getItem("refreshToken");

  if (!refreshToken) {
    return { success: false };
  }

  try {
    const response = await fetch(`${apiUrl}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token: refreshToken }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.accessToken) {
        const accessToken = data.accessToken.split("Bearer ")[1];
        if (accessToken) {
          localStorage.setItem("refreshToken", data.refreshToken);
          localStorage.setItem("accessToken", data.accessToken);
        }
      }

      return { success: true, accessToken: data.accessToken };
    } else {
      return { success: false };
    }
  } catch (error) {
    return { success: false };
  }
};


