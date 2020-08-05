import {FETCH_LATEST, SET_FROM, SET_TO, FETCH_LATEST_QUOTES, ERROR} from '../actions/types';

const initialState = {isFetching: true, from: null, to: null, quote: null, latest: {}, error: null};

export const exchangeReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_FROM:
            return {...state, from: action.payload, isFetching: false};
        case SET_TO:
            return {...state, to: action.payload, isFetching: false}
        case FETCH_LATEST:
           return {...state, quote: action.payload, isFetching: false}
        case FETCH_LATEST_QUOTES:
            return {...state, latest: action.payload, isFetching: false};
        case ERROR:
            return {...state, error: action.payload, idFetching: false}
        default:
            return state;
    }
}