import { createAction, createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState{
    maskUserName: boolean;
   
    user:User;
}

const initialState : UserState = {
    maskUserName: true,
    user: null
}

const getUserFeatureState = createFeatureSelector<UserState>('user');

export const getMaskUser = createSelector(
    getUserFeatureState,
    state => state.maskUserName);

export const userReducer = createReducer<UserState>(
    initialState,
    on(createAction('[Users] mask user'), (state):UserState=>{
        console.log("original sstate: "+JSON.stringify(state));
        return{
            ...state,
            maskUserName:!state.maskUserName
        }

    })
)