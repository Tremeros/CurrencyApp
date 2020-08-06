import React from 'react';
import {connect} from 'react-redux';
import {fetchLatest} from '../actions/exchange';
import {fetchLatestQuotes} from '../actions/latest';

const _Select = (props) => {
 


    const onHandleChange = async e => {
        
       await props.function(e.target.value);
       props.fetchLatestQuotes(props.from);
       props.fetchLatest(props.from, props.to);
        
    }

    return (
        <div>
            <select className='select' onChange={e => onHandleChange(e)}>
                    <option value=''>-</option>
                    <option value='AUD'>AUD</option>
                    <option value='BGN'>BGN</option>
                    <option value='BRL'>BRL</option>
                    <option value='CAD'>CAD</option>
                    <option value='CHF'>CHF</option>
                    <option value='CNY'>CNY</option>
                    <option value='CZK'>CZK</option>
                    <option value='DKK'>DKK</option>
                    <option value='EUR'>EUR</option>
                    <option value='GBP'>GBP</option>
                    <option value='HKD'>HKD</option>
                    <option value='HRK'>HRK</option>
                    <option value='HUF'>HUF</option>
                    <option value='IDR'>IDR</option>
                    <option value='ILS'>ILS</option>
                    <option value='INR'>INR</option>
                    <option value='ISK'>ISK</option>
                    <option value='JPY'>JPY</option>
                    <option value='KRW'>KRW</option>
                    <option value='MXN'>MXN</option>
                    <option value='MYR'>MYR</option>
                    <option value='NOK'>NOK</option>
                    <option value='NZD'>NZD</option>
                    <option value='PHP'>PHP</option>
                    <option value='PLN'>PLN</option>
                    <option value='RON'>RON</option>
                    <option value='RUB'>RUB</option>
                    <option value='SEK'>SEK</option>
                    <option value='SGD'>SGD</option>
                    <option value='THB'>THB</option>
                    <option value='TRY'>TRY</option>
                    <option value='USD'>USD</option>
                    <option value='ZAR'>ZAR</option>
            </select>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      from: state.exchange.from,
      to: state.exchange.to,
      quote: state.exchange.quote
    }
   }



export const Select = connect(mapStateToProps, {fetchLatest, fetchLatestQuotes})(_Select);
