import React from 'react';
import './Transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord, updateRecord } = props;
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

    const update = () => {
        updateRecord(trans.id, trans.amount, trans.description)
    }

    return (
        <article className="transaction" style= { style } >
            <p>{ trans.date }</p>
            <p name = "description" title = "Editar" className = "edit" onClick = { update }>
                { trans.description }
            </p>
            <p name = "monto" title = "Editar" className = "edit" onClick = { update }>
                { trans.amount }
            </p>
            <button className = 'btn' title = "Eliminar" onClick = { onClick }>
                x
            </button>
        </article>
    )
}

export default Transaction;