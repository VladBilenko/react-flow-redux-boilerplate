import {Reducer} from "redux";
import {LocationChangeAction, RouterState} from "connected-react-router";

export interface IStateModel {
    router: Reducer<RouterState, LocationChangeAction>
}