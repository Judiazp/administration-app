import React, { useState } from 'react';
import Form from '../organisms/form/Form';
import Historical from '../organisms/historical/Historical';
import swal from 'sweetalert';
import Header from '../organisms/header/header'
import './financeBoard.css'

const FinanceBoard = () => {

    const [records, setRecords] = useState({
        transactions: [
            {
                date: '28/02/2021',
                operation: 'Egreso',
                amount: '2000',
                description: 'Netflix',
                id: 0,
            },
            {
                date: '30/01/2021',
                operation: 'Ingreso',
                amount: '1500',
                description: 'Luz',
                id: 1,
            },
            {
                date: '2/02/2021',
                operation: 'Ingreso',
                amount: '700',
                description: 'Gas',
                id: 2,
            }
        ]
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

    const updateRecord = (description, amount) => {

        swal("Write something here:", {
            content: "input"
          })
          .then((value) => {
            const updateRecords = records.transactions.map(trans => {
                trans.amount = amount;
                trans.description = description;
            })
            console.log(updateRecords)
            setRecords({ transactions: updateRecords})
            swal( `Se cambio el valor a `, value);

          });
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