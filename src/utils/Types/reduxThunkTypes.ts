import {TypedUseSelectorHook, useDispatch as dispatchHook, useSelector as selectorHook} from 'react-redux';
import { store } from '../../services/store';
import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { TIngredientsAction } from './ingredientsTypes';
import { TBurgerConstructorActions } from './burgerConstructorTypes';
import { TSubmitOrderActions } from './orderTypes';
import { TUserActions } from './userTypes';

//add to fix https://github.com/reduxjs/redux-thunk/issues/333
import type {} from 'redux-thunk/extend-redux'

export type RootState = ReturnType<typeof store.getState>;
export type TApplicationActions = TBurgerConstructorActions | TSubmitOrderActions | TIngredientsAction | TUserActions
//| TWebSocketActions | TWebSocketActionsUser
;


export type AppThunkAction<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, TApplicationActions>;

//export type AppDispatch = ThunkDispatch<RootState, unknown, TApplicationActions>;
export type AppDispatch<TReturnType = void> = (action: TApplicationActions | AppThunkAction<TReturnType>) => TReturnType;

//export const useDispatch = () => dispatchHook<AppDispatch>();
export const useDispatch: () => AppDispatch = dispatchHook;
export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
