import React from 'react';
import {connect} from 'react-redux';


const _Error = props => {
    return (
       <div>
           {props.error && props.error.map((el, index) => {
               return <p>{el}</p>
           })}
       </div>
    )
}

const mapStateToProps = state => {
    return {
      
        error: state.exchange.error
    }
   }

export const Error = connect(mapStateToProps)(_Error);