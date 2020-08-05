import React from 'react';
import {connect} from 'react-redux';

const _Exchange = props => {
    return (
        <div className='main__exchange'>
            <h2>Latest exchange course:</h2>
            <span>{props.children}</span>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      
      quote: state.exchange.quote
    }
   }

export const Exchange = connect(mapStateToProps)(_Exchange);