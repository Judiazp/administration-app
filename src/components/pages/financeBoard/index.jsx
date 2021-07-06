import React, { useState } from 'react';
import Form from '../../molecules/forms/addTransaction';
import Historical from '../../organisms/historical';
import swal from 'sweetalert';
import Header from '../../molecules/header'
import { Balance } from '../../organisms/balance';
import { Footer } from '../../molecules/footer';

import './financeBoard.css'

const FinanceBoard = () => {

    const [records, setRecords] = useState({
        transactions: []
    })
    const [modal, setModal] = useState(false);
    const [typeTransaction, setTypeTransaction] = useState()

    const addRecord = (operation, amount, description) => {
        swal( {
            title: `Agregando transacción`,
            text: '¿Seguro que quiere agregar esta transacción?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                const newTrans = {
                    operation: operation,
                    amount: amount, 
                    description: description,
                    id: records.transactions.length
                }

                setRecords({
                    transactions: [...records.transactions, newTrans]
                })
                swal("Operacion eliminada con exito", {icon: 'success'});
            } else {
                swal('Operación cancelada', {icon: 'error'})
            }
        })
    }

    const deleteRecord = (id) => {
        swal( {
            title: `Eliminando transacción`,
            text: '¿Seguro que quiere eliminar esta transacción?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                const newTrans = records.transactions.filter(trans => trans.id !== id);
                setRecords({transactions: newTrans})
                swal("Operacion eliminada con exito", {icon: 'success'});
            } else {
                swal('Operación cancelada', {icon: 'error'})
            }
        })
    }

    const updateRecord = (id, amount, description) => {
        swal( {
            title: `Actualizando transacción`,
            text: '¿Seguro que quiere actualizar esta transacción?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
            dangerMode: true
        }).then((willDelete) => {
            if (willDelete) {
                const newTransaction = records.transactions.map( trans => {
                    if(trans.id === id) {
                        trans.amount = amount
                        trans.description = description
                    }
                    return trans;
                })
                setRecords({transactions: newTransaction})
                swal("Operacion actualizada con exito", {icon: 'success'});
            } else {
                swal('Operación cancelada', {icon: 'error'})
            }
        })
    }

    const handleClickAddRevenues = () => {
        setTypeTransaction('Ingreso')
        setModal(true)
    }

    const handleClickAddExpenses = () => {
        setTypeTransaction('Egreso')
        setModal(true)
    }


    return (
        <>
            { modal && <Form addRecord={ addRecord } typeTransaction={ typeTransaction } setTypeTransaction={ setTypeTransaction } setModal={ setModal } /> }
            <Header />
            <Balance records={ records } />
            <div className = "content-graph-form">
                <div className="graph">
                    <h1>Gráficas proximamente</h1>
                </div>
                <div className="content-buttons">
                    <button className="btn-add-transaction add-revenues" onClick={ handleClickAddRevenues }>
                        Agregar Ingreso
                    </button>
                    <button className="btn-add-transaction add-expenses" onClick={handleClickAddExpenses}>
                        Agregar Egreso
                    </button>
                </div>
            </div>
            <Historical
                transactions = {records.transactions}
                deleteRecord = { deleteRecord }
                updateRecord = { updateRecord } 
            />
            <Footer/>
        </>
    )
}

export default FinanceBoard;