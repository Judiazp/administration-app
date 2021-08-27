import React, { useEffect, useState } from 'react';
import Form from '../../molecules/forms/addTransaction';
import Historical from '../../organisms/historical';
import swal from 'sweetalert';
import Header from '../../molecules/header'
import { Balance } from '../../organisms/balance';
import { Footer } from '../../molecules/footer';

import './financeBoard.css'

const FinanceBoard = () => {

    const initialValueRecords = JSON.parse(localStorage.getItem('transactions')) || { transactions: [] }
    const [records, setRecords] = useState(initialValueRecords)
    const [modal, setModal] = useState(false);
    const [typeTransaction, setTypeTransaction] = useState()

    useEffect(() => {
        localStorage.setItem('transactions', JSON.stringify(records))
    }, [records])

    const addRecord = (operation, amount, description, stateDebts, date) => {
        swal( {
            title: `Agregando ${operation}`,
            text: '¿Seguro que quiere agregar esta transacción?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
            dangerMode: true
        }).then((addTransaction) => {
            if (addTransaction) {
                const newTrans = {
                    operation: operation,
                    amount: amount, 
                    description: description,
                    stateDebts: stateDebts,
                    date: date,
                    id: records.transactions.length
                }

                setRecords({
                    transactions: [ newTrans, ...records.transactions ]
                })

                swal("Transacción agregada con exito", {icon: 'success'});
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
                swal("Transacción eliminada con exito", {icon: 'success'});
            } else {
                swal('Operación cancelada', {icon: 'error'})
            }
        })
    }

    const updateRecord = (id, operation, amount, description, stateDebts) => {
        swal( {
            title: `Actualizando ${operation}`,
            text: (operation === 'deuda' && stateDebts === 'paid') ? (
                'Al confirmar el pago, no podrá modificar nuevamente el estado de la deuda. ¿Seguro que quiere continuar?' 
                ) : '¿Seguro que quiere actualizar esta transacción?',
            icon: 'warning',
            buttons: ['Cancelar', 'Confirmar'],
            dangerMode: true
        }).then((update) => {
            if (update) {
                const newTransaction = records.transactions.map( trans => {
                    if(trans.id === id) {
                        trans.amount = amount
                        trans.description = description
                        trans.stateDebts = stateDebts
                    }
                    return trans;
                })
                setRecords({transactions: newTransaction})
                swal("Transacción actualizada con exito", {icon: 'success'});
            } else {
                swal('Operación cancelada', {icon: 'error'})
            }
        })
    }

    const handleClickAddTransaction = (typeTransaction) => {
        setTypeTransaction(typeTransaction)
        setModal(true)
    }

    return (
        <>
            <Header />
            <div className="content-app">
                { modal && <Form addRecord={ addRecord } typeTransaction={ typeTransaction } setTypeTransaction={ setTypeTransaction } setModal={ setModal } /> }
                <Balance 
                    records={ records } 
                    addTransaction={ handleClickAddTransaction } 
                />
                <Historical
                    transactions={records.transactions}
                    deleteRecord={ deleteRecord }
                    updateRecord={ updateRecord }
                />
            </div>
            <Footer/>
        </>
    )
}

export default FinanceBoard;