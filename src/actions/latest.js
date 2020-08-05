import axios from 'axios';
import { SET_FROM, SET_TO, FETCH_LATEST_QUOTES, ERROR } from './types';





export const fetchLatestQuotes = (currency) => async dispatch => {
  try {
    const url = `https://api.exchangeratesapi.io/latest?base=${currency}`;

  const res = await axios.get(url);

  dispatch({
      type: FETCH_LATEST_QUOTES,
      payload: res.data
  })
  } catch (err) {
    dispatch({type: ERROR, payload: err.response.data.errors});
  }
}

export const setFromCurrency = (payload) => ({type: SET_FROM, payload});
export const setToCurrency = (payload) => ({type: SET_TO, payload});