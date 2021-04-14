import {CHANGE_AUTH_STATE} from "../actions/auth"

const initialState = {uid:null}

const authReducer = (state=initialState,action)=>{
    switch(action.type){
        case CHANGE_AUTH_STATE:
            return {...state,uid:action.uid}
        default:
            return state
    }
}

export default authReducer