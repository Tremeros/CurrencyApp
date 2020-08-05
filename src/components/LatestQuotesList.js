import React from 'react';
import {connect} from 'react-redux';

const _LatestQuotesList = props => {
  return (
     <div>{
        props.latest.rates && Object.entries(props.latest.rates).map((el, index) => {
           return (
               <div key={index}>
                   <div>{el[0]}</div>
                   <div>{el[1]}</div>
               </div>
           )
        })
         }</div>
  )
}

const mapStateToProps = state => {
    return {
      
        latest: state.exchange.latest
    }
   }

export const LatestQuotesList = connect(mapStateToProps)(_LatestQuotesList);

