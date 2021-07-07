import React, { useState } from 'react';
import FormEdit from '../../molecules/forms/editTransacction';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons'

import './transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord, updateRecord } = props;
    const { date, amount, description } = trans
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

    const handleClickDelete = () => {
        deleteRecord(trans.id);
    }

    const handleClickEdit = () => {
        setEditData(!editData)
    }

    return (
        <div >
            <div className="transaction" style= { style }>
                <p> { date.dd }/{ date.mm }/{ date.yy }, { date.hr }:{ date.min }:{ date.seconds }</p>
                <p name="description">
                    { description }
                </p>
                <p name="monto">
                    { parseFloat(amount).toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                </p>
                <div className="buttons-content">
                    <button className='btn' title="Editar" onClick={ handleClickEdit }>
                        <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className='btn' title="Eliminar" onClick={ handleClickDelete }>
                        <FontAwesomeIcon icon={faTrashAlt} />
                    </button>
                </div>
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