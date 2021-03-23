import React, { useState } from 'react';
import './Transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord, updateRecord } = props;
    let style;
    const [editData, setEditData] = useState({
        trans: {
            operation: '',
            amount: ''
        }
    })

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

    const formDisplay = () => {
        const inptEdit = document.querySelector('.formEdit');
        inptEdit.classList.toggle('formEditOpen');
    }

    const update = (event) => {
        event.preventDefault()
        const data = event.target.name;
        console.log(data)
        updateRecord(trans.id)
    }

    return (
        <div >
            <article className="transaction" style= { style }>
                <p>{ trans.date }</p>
                <p name = "description" title = "Editar" className = "edit" onClick = { formDisplay }>
                    { trans.description }
                </p>
                <p name = "monto" title = "Editar" className = "edit" onClick = { formDisplay }>
                    { trans.amount }
                </p>
                <button className = 'btn' title = "Eliminar" onClick = { onClick }>
                    x
                </button>
            </article>
            <form className = "formEdit" onSubmit = { update } >
                <input className = "input" type = "text" placeholder = "Editar" onChange = "" />
            </form>
        </div>
    )
}

export default Transaction;