import React from 'react';
import './Transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord } = props;
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

    const onClick = () => {
        deleteRecord(trans.id);
    }

    return (
        <article className="transaction" style= { style } >
            <p>{ trans.date }</p>
            <p name = "description"> { trans.description } </p>
            <p name = "monto"> { trans.amount } </p>
            <button className = 'btn' onClick = { onClick }>
                x
            </button>
        </article>
    )
}

export default Transaction;