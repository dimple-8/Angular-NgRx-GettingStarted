import { createAction, createReducer, on } from "@ngrx/store";

export const userReducer = createReducer(
    {
        hideUserName : true
    },
    on(createAction('[Users] mask user'), state=>{
        console.log("original sstate: "+JSON.stringify(state));
        return{
            ...state,
            hideUserName:!state.hideUserName
        }

    })
)