import {store} from "../../index";
import {TUserActions} from "../actions/user";
import {TIngredientsActions} from "../actions/ingredients";
import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";

export type RootState = ReturnType<typeof store.getState>;

type TApplicationActions = TUserActions | TIngredientsActions;

export type AppThunk<TReturn = void> = ActionCreator<ThunkAction<TReturn, Action, RootState, TApplicationActions>>;

export type AppDispatch = typeof store.dispatch;