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
        swal( {
            title: `Actualizando transaccion`,
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

    const balance = () => {
        let egresos = records.transactions.filter(trans => trans.operation === 'Egreso')
        let ingresos = records.transactions.filter(trans => trans.operation === 'Ingreso')
        let totalEgresos = 0;
        let totalIngresos = 0;
        
        for (let i = 0; i < ingresos.length-1; i++) {
            totalIngresos = ingresos[i].amount + ingresos[i+1].amount 
        }
        
        for (let i = 0; i < egresos.length-1; i++) {
            totalEgresos = egresos[i].amount + egresos[i+1].amount 
        }

        return totalIngresos - totalEgresos
    }

    return (
        <>
            <Header />
            <section className = "bodyPages">
                <Form addRecord={ addRecord } balance={ balance } />
                <Historical
                transactions = {records.transactions}
                deleteRecord = { deleteRecord }
                updateRecord = { updateRecord } />
            </section>
        </>
    )
}

export default FinanceBoard;