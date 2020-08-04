import React from 'react';
import {connect} from 'react-redux';
import {fetchLatest, setFromCurrency, setToCurrency} from '../actions/latest';
import {Select} from './select';

class _App extends React.Component {


    fetchData = () => {
      this.props.fetchLatest(this.props.from, this.props.to);
    }

    componentDidUpdate(prevProps) {
     if(prevProps.from !== this.props.from || prevProps.to !== this.props.to) {
      this.props.fetchLatest(this.props.from, this.props.to);
      console.log(this.props.quote);
     }
    }

    render() {
        
        return (
            <div>
              <h1>Currency app</h1>
              <Select function={this.props.setFromCurrency}/>
              <Select function={this.props.setToCurrency}/>
              <h2>{this.props.from}</h2>
              <h2>{this.props.to}</h2>
              <h2>{this.props.quote.rates && Object.values(this.props.quote.rates)}</h2>
              <button onClick={this.fetchData}>Fetch</button>
            </div>
        )
    }
}

const mapStateToProps = state => {
 return {
   from: state.exchange.from,
   to: state.exchange.to,
   quote: state.exchange.quote
 }
}

export const App = connect(mapStateToProps, {fetchLatest, setFromCurrency, setToCurrency})(_App);