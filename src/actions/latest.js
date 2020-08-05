import axios from 'axios';
import { FETCH_LATEST, SET_FROM, SET_TO, FETCH_LATEST_QUOTES, ERROR } from './types';



export const fetchLatest = (from, to) => async dispatch => {
  try {
    const url = `https://api.exchangeratesapi.io/latest?base=${from}&symbols=${to}`;

  const res = await axios.get(url);

  dispatch({
      type: FETCH_LATEST,
      payload: res.data
  })
  } catch (err) {
    dispatch({type: ERROR, payload: err})
  }
}

export const fetchLatestQuotes = (currency) => async dispatch => {
  try {
    const url = `https://api.exchangeratesapi.io/latest?base=${currency}`;

  const res = await axios.get(url);

  dispatch({
      type: FETCH_LATEST_QUOTES,
      payload: res.data
  })
  } catch (err) {
    dispatch({type: ERROR, payload: err})
  }
}

export const setFromCurrency = (payload) => ({type: SET_FROM, payload});
export const setToCurrency = (payload) => ({type: SET_TO, payload});