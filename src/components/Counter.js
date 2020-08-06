import React, {useState} from 'react';
import {connect} from 'react-redux';


const _Counter = props => {

  const [amount, setAmount] = useState(0);

  const onChangeHandle = async e => {
      await setAmount(e.target.value);
      
  }

    return (
        <div className='main__counter'>
            <label>How much do You want to exchange?</label>
            <input className='counter__input' type='text' onChange={e => onChangeHandle(e)}></input>
            <span>You will get</span>
            <h2>{amount === 0 ? 'Check' : parseFloat(amount * Object.values(props.quote.rates)).toFixed(4) }</h2>
            
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

export const Counter = connect(mapStateToProps)(_Counter);