import {createStore,combineReducers,applyMiddleware,compose} from "redux"
import ReduxThunk from 'redux-thunk';
import authReducer from "./reducers/auth"

const rootReducer = combineReducers({auth:authReducer})

const store = createStore(rootReducer,compose(applyMiddleware(ReduxThunk),window.devToolsExtension ? window.devToolsExtension() : f => f))

export default store