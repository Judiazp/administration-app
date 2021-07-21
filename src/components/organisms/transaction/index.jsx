import React, { useState } from 'react';
import FormEdit from '../../molecules/forms/editTransacction';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrashAlt} from '@fortawesome/free-solid-svg-icons';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import {faArrowCircleUp} from '@fortawesome/free-solid-svg-icons';
import {faArrowCircleDown} from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';

import './transaction.css';

const Transaction = (props) => {

    const { trans, deleteRecord, updateRecord } = props;
    const { date, amount, description, operation, stateDebts } = trans
    let style;
    
    const [editData, setEditData] = useState(false)

    if (operation === 'revenues'){
        style = { 
            color: 'rgb(93,192,97)',
        }
    } 
    
    if (operation === 'expenses') {
        style = {
            color: 'rgb(229,61,47)',
        }
    }

    if (operation === 'debts') {
        if (stateDebts === 'paid') {
            style = {
                color: '#005248',
            }
        } else {
            style = {
                color: 'rgb(229,61,47)',
            }
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
            <div className="transaction" title={ stateDebts === 'notPayed' ? 'Pendiente' : 'Pagada' }>
                <p style= { style }> 
                    { operation === 'revenues' && <FontAwesomeIcon icon={faArrowCircleUp} /> }
                    { operation === 'expenses' && <FontAwesomeIcon icon={faArrowCircleDown} /> }
                    { operation === 'debts' && <FontAwesomeIcon icon={faCreditCard} />  }
                </p>
                <p className="date">
                    { date } 
                </p>
                <p name="description">
                    { description }
                </p>
                <p name="monto" style= { style }>
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
                editData && (
                    <FormEdit 
                        update={ updateRecord } 
                        transaction={ trans } 
                        setEditData={ setEditData }
                    />
                )
            }
        </div>
    )
}

export default Transaction;