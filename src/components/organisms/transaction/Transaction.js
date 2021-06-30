import React, { useState } from 'react';
import FormEdit from '../editTransacction';
import './Transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord, updateRecord } = props;
    let style;
    
    const [editData, setEditData] = useState(false)

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

    const handleEdit = () => {
        setEditData(!editData)
    }

    return (
        <div >
            <div className="transaction" style= { style }>
                <p>{ trans.date }</p>
                <p name="description">
                    { trans.description }
                </p>
                <p name="monto">
                    { trans.amount }
                </p>
                <button className='btn' title="Editar" onClick={ handleEdit }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pen" viewBox="0 0 16 16">
                        <path d="M13.498.795l.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001zm-.644.766a.5.5 0 0 0-.707 0L1.95 11.756l-.764 3.057 3.057-.764L14.44 3.854a.5.5 0 0 0 0-.708l-1.585-1.585z"/>
                    </svg>
                </button>
                <button className='btn' title="Eliminar" onClick={ onClick }>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
                        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708z"/>
                    </svg>
                </button>
            </div>
            { 
                editData && 
                    <FormEdit 
                        update={ updateRecord } 
                        transaction={ trans } 
                        setEditData={ setEditData }
                    />
            }
        </div>
    )
}

export default Transaction;