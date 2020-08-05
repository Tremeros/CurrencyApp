import { combineReducers } from "redux";
import {exchangeReducer} from './exchange';


export const reducers = combineReducers({
    exchange: exchangeReducer,
   
});