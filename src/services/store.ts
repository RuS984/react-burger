import { configureStore } from "@reduxjs/toolkit";


import { rootReducer } from "./reducers";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { API_WEB_SOCKET, API_ORDERS_USER } from "../utils/appWebSockets";
import { WSOrdersFeedRootActions } from "./actions/ordersFeed";
import { WSOrdersFeedRootActionsUser } from "./actions/ordersFeedUser";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
    .concat(socketMiddleware(API_WEB_SOCKET, WSOrdersFeedRootActions))
    .concat(socketMiddleware(API_ORDERS_USER, WSOrdersFeedRootActionsUser))
  }
})





















