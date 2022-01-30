import { AUTH_HANDLER } from "../actions_type/AuthHandler";


export function authHandler ( data ) {
    return {
        type: AUTH_HANDLER,
        payload: data
    }
}