import React from 'react';
import {connect} from 'react-redux';
import {fetchLatest, setFromCurrency, setToCurrency} from '../actions/exchange';
import {Select} from './select';
import {Exchange} from './Exchange';
import {Counter} from './Counter';
import {LatestQuotesList} from './LatestQuotesList';
import {Error} from './alerts/Error';
import {Spinner} from './spinner/Spinner';


class _App extends React.Component {
  state = { quote: null}

    

    componentDidMount() {
      this.props.fetchLatest('USD', 'EUR');
 
    }


    render() {
        
        return (
            <div>
              {this.props.fetching ? <Spinner/> : 
                <div className='main'>
                <h1>Currency app</h1>
                <div className='main__selectForm'>
                  <span>Choose pair</span>
                  <div className='main__selectForm__input'>
                    <label>From</label>
                    <Select function={this.props.setFromCurrency}/>
                  </div>
                  <div className='main__selectForm__input'>
                    <label>To</label>
                    <Select function={this.props.setToCurrency}/>
                  </div>
               
                </div>
                <Exchange>{this.props.to && parseFloat(Object.values(this.props.quote.rates))}</Exchange>
                <Counter/>
              </div>}
              <Error/>
              {this.props.from !== '' && <LatestQuotesList/>}
    
            </div>
        )
    }
}

const mapStateToProps = state => {
 return {
   from: state.exchange.from,
   to: state.exchange.to,
   quote: state.exchange.quote,
   latest: state.exchange.latest,
   fetching: state.exchange.isfetching
 }
}

export const App = connect(mapStateToProps, {fetchLatest, setFromCurrency, setToCurrency})(_App);