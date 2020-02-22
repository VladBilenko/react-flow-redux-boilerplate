import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import browserHistory from "../browser-history";

const rootReducer = combineReducers({
    router: connectRouter(browserHistory)
});

export default rootReducer;