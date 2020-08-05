import React from 'react';
import {connect} from 'react-redux';

const _Exchange = props => {
    return (
        <div>
            <h2>Latest exchange course:</h2>
            <h3>{props.children}</h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      
      quote: state.exchange.quote
    }
   }

export const Exchange = connect(mapStateToProps)(_Exchange);