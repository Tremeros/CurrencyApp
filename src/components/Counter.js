import React, {useState} from 'react';
import {connect} from 'react-redux';


const _Counter = props => {

  const [amount, setAmount] = useState(0);

  const onChangeHandle = e => {
      setAmount(e.target.value);
      console.log(Object.values(props.quote.rates));
  }

    return (
        <div>
            <label>How many</label>
            <input type='text' onChange={e => onChangeHandle(e)}></input>
            <h2>{amount === 0 ? 'How many?' : amount * Object.values(props.quote.rates)}</h2>
            
        </div>
    )
}

const mapStateToProps = state => {
    return {
      
      quote: state.exchange.quote
    }
   }

export const Counter = connect(mapStateToProps)(_Counter);