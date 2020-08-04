import { combineReducers } from "redux";
import {exchangeReducer} from './latest';

export const reducers = combineReducers({
    exchange: exchangeReducer,
});