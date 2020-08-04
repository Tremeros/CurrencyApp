import {FETCH_LATEST, SET_FROM, SET_TO} from '../actions/types';

const initialState = {from: 'EUR', to: 'USD', quote: ''};

export const exchangeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FROM:
            return {...state, from: action.payload};
        case SET_TO:
            return {...state, to: action.payload}
        case FETCH_LATEST:
           return {...state, quote: action.payload}
        default:
            return state;
    }
}