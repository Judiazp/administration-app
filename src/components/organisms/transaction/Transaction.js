import React from 'react';
import './Transaction.css';

const Transaction = (props) => {

    const { trans } = props

    let style;

    if (trans.operation === 'Ingreso'){
        style = {
            background: 'rgb(93,192,97, 0.5)',
        }
    } else {
        style = {
            background: 'rgb(229,61,47, 0.5)'
        }
    }

    return (
        <article className="transaction" style= { style }>
            <p>{ trans.date }</p>
            <p name = "description"> { trans.description } </p>
            <p name = "monto"> { trans.amount } </p>
        </article>
    )
}

export default Transaction;