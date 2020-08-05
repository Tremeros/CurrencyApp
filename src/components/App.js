import React from 'react';
import {connect} from 'react-redux';
import {fetchLatest, setFromCurrency, setToCurrency} from '../actions/exchange';
import {fetchLatestQuotes} from '../actions/latest';
import {Select} from './select';
import {Exchange} from './Exchange';
import {Counter} from './Counter';
import {LatestQuotesList} from './LatestQuotesList';


class _App extends React.Component {
  state = { quote: null}

    fetchData = async () => {
      if(this.props.from && this.props.to && this.props.from !== '' && this.props.to !== "") {
        await this.props.fetchLatest(this.props.from, this.props.to);
        this.setState({quote: Object.values(this.props.quote.rates)});
        await this.props.fetchLatestQuotes(this.props.from);
      }
      
      
      console.log(this.props.from);
      console.log(this.props.to);
      
    }

    componentDidMount() {
      this.props.fetchLatest('USD', 'EUR');
      console.log(this.props.all)
    }

   

   
  
    
   

    render() {
        
        return (
            <div>
              <h1>Currency app</h1>
              <Select function={this.props.setFromCurrency}/>
              <Select function={this.props.setToCurrency}/>
              
              <h2>{this.props.from && this.props.from}</h2>
              <h2>{this.props.to && this.props.to}</h2>
              {this.props.from && this.props.to ? <Exchange>{this.state.quote}</Exchange> : 'Choose currency'}
              <Counter/>
              <button onClick={this.fetchData}>Fetch</button>
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
   latest: state.exchange.latest
 }
}

export const App = connect(mapStateToProps, {fetchLatest, setFromCurrency, setToCurrency, fetchLatestQuotes})(_App);