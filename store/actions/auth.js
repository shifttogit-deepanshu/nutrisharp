export const CHANGE_AUTH_STATE = "SIGN_IN"

export const changeAuthState = ({uid})=>{
    return {
        type:CHANGE_AUTH_STATE,
        uid
    }
}