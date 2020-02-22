import {applyMiddleware, createStore, Middleware} from 'redux';
import rootReducer from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";
import routerMiddleware from "react-router-redux/src/middleware";
import browserHistory from "./browser-history";
import type {IStateModel} from "../models";

const browserHistoryMiddleware = routerMiddleware(browserHistory);

const middlewareList: Middleware[] = [
    browserHistoryMiddleware
];

const appliedMiddleware = applyMiddleware(...middlewareList);

const store: IStateModel = createStore(rootReducer, composeWithDevTools(appliedMiddleware));

export default store;