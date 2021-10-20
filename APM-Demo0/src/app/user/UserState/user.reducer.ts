import { createAction, createReducer, on } from "@ngrx/store";
import { User } from "../user";

export interface UserState{
    maskUserName: boolean;
   
    user:User;
}

const initialState : UserState = {
    maskUserName: false,
    user: null
}

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