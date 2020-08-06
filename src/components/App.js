import React from 'react';
import {connect} from 'react-redux';
import {fetchLatest, setFromCurrency, setToCurrency} from '../actions/exchange';
import {fetchLatestQuotes} from '../actions/latest';
import {Select} from './select';
import {Exchange} from './Exchange';
import {Counter} from './Counter';
import {LatestQuotesList} from './LatestQuotesList';
import {Error} from './alerts/Error';


class _App extends React.Component {
  state = { quote: null}

    fetchData = async () => {
      if(this.props.from && this.props.to && this.props.from !== '' && this.props.to !== "") {
        await this.props.fetchLatest(this.props.from, this.props.to);
        const quote = parseFloat(Object.values(this.props.quote.rates)).toFixed(4);
        this.setState({quote: quote });
     
        await this.props.fetchLatestQuotes(this.props.from);
      }
    }

    componentDidMount() {
      this.props.fetchLatest('USD', 'EUR');
 
    }


    render() {
        
        return (
            <div>
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
                  <button className='btn' onClick={this.fetchData}>Check course</button>
                </div>
                <Exchange>{this.state.quote}</Exchange>
                <Counter/>
              </div>
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
   
 }
}

export const App = connect(mapStateToProps, {fetchLatest, setFromCurrency, setToCurrency, fetchLatestQuotes})(_App);