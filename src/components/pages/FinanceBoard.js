import React, { useState } from 'react';
import Form from '../organisms/form/Form';
import Historical from '../organisms/historical/Historical';
import swal from 'sweetalert';
import Header from '../organisms/header/header'
import './financeBoard.css'

const FinanceBoard = () => {

    const [records, setRecords] = useState({
        transactions: []
    })

    const addRecord = (operation, amount, description) => {
        const newTrans = {
            operation: operation,
            amount: amount,
            description: description,
            id: records.transactions.length
        }

        setRecords({
            transactions: [...records.transactions, newTrans]
        })
    }

    const deleteRecord = (id) => {
        swal( {
            title: `Eliminando transaccion`,
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
        const newTrans = records.transactions.map( trans => {
            if(trans.id === id) {
                setRecords({ transactions: newTrans });
            }
            return trans;
        })
    }

    return (
        <>
            <Header />
            <section className = "bodyPages">
                <Form addRecord = { addRecord } />
                <Historical
                transactions = {records.transactions}
                deleteRecord = { deleteRecord }
                updateRecord = { updateRecord } />
            </section>
        </>
    )
}

export default FinanceBoard;