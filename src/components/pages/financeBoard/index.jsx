import React, { useState } from 'react';
import Form from '../../molecules/form';
import Historical from '../../organisms/historical';
import swal from 'sweetalert';
import Header from '../../molecules/header'
import { Balance } from '../../organisms/balance';

import './financeBoard.css'

const FinanceBoard = () => {

    const [records, setRecords] = useState({
        transactions: []
    })

    const [modal, setModal] = useState(true);
    const [balance, setBalance] = useState({
        ingresos: 0,
        egresos: 0,
    })

    const { ingresos, egresos } = balance


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

    // let egresos = records.transactions.filter(trans => trans.operation === 'Egreso')
    // let ingresos = records.transactions.filter(trans => trans.operation === 'Ingreso')
    
    const handleClick = () => {
        setModal(false)
    }

    return (
        <>
            <Header />
            <Balance expenses={ egresos } income={ ingresos } />
            <section className = "bodyPages">
                <Form addRecord={ addRecord } />
                <Historical
                transactions = {records.transactions}
                deleteRecord = { deleteRecord }
                updateRecord = { updateRecord } />
            </section>

            {
                modal && (
                    <div className="message-advertencia" align="center">
                        <p>
                            Es posible que la interfaz tenga errores de diseño, esto se debe a que los esfuerzos
                            de desarrollo estan enfocados inicialmente en la funcionalidad de la plataforma. Posteriormente
                            la interfaz será ampliamente mejorada para una mejor experiencia.
                        </p>
                        <button className="btnInit" onClick={ handleClick }>
                            continuar
                        </button>
                    </div>
                )
            }
        </>
    )
}

export default FinanceBoard;