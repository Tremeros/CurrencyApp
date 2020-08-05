import React from 'react';
import {connect} from 'react-redux';
import {Spinner} from './spinner/Spinner';

const _LatestQuotesList = props => {
  return (
       <div className='latestQuotes'>
            {props.fetching ? <Spinner/> : <table className="ui celled table">
                {props.latest.rates && (
                    
                    <thead>
                    <tr>
                      <th>{`Latest quotes for ${props.from}`}</th>
                      <th>Course</th>
                    </tr>
                </thead>
                )}
                <tbody>
                    {props.latest.rates && Object.entries(props.latest.rates).map((el, index) => {
                        return (
                            <tr key={index}>
                                <td>{el[0]}</td>
                                <td>{el[1]}</td>
                            </tr>
                        )
                     })}
                </tbody>
            </table>}
       </div>
             
        )
      }
        


const mapStateToProps = state => {
    return {
       latest: state.exchange.latest,
       from: state.exchange.from,
       fetching: state.exchange.isFetching
    }
   }

export const LatestQuotesList = connect(mapStateToProps)(_LatestQuotesList);

