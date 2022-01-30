import { AUTH_HANDLER } from "../actions_type/AuthHandler";


const initialState = { user: {} };

function authReducer (state = initialState , { type, payload }) {
     switch(type) {
         case AUTH_HANDLER:
            return { ...state, 
                user: payload}
            default:
                return state 
     }
}

export default authReducer;