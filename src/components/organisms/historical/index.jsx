import React, { useState } from 'react';
import Transaction from '../transaction';
import { NoRecords } from '../../atoms/noRecords';
import './historical.css';

const TransactionHistory = ({ transactions, deleteRecord, updateRecord }) =>  {

    // const { transactions } = props
    const [filtros, setFiltros] = useState('everyone')
    const revenues = transactions.filter(({operation}) => operation === 'Ingreso')
    const expenses = transactions.filter(({operation}) => operation === 'Egreso')

    const handleClick = (e) => {
        if (e.target.name === 'revenues') {
            setFiltros('revenues')
        } else if (e.target.name === 'expenses') {
            setFiltros('expenses')
        } else {
            setFiltros('everyone')
        }
    }


    return (
        <section className="content-history">
            <div className='transactionHistory'>
                <div className="content-filter">
                    <h2 className='title'>Historial de Transacciones</h2>
                    <article className='btns'>
                        <button className='filtros' name="revenues" onClick={ (e) => handleClick(e) }>Ingresos</button>
                        <button className='filtroEgr filtros' name='expenses' onClick={ (e) => handleClick(e) }>Egresos</button>
                        <button className='filtros' name='everyone' onClick={ (e) => handleClick(e) }>Todos</button>
                    </article>
                </div>
                <div className="content-transaction">
                    { 
                        (filtros === 'everyone') && (
                            transactions.map(transaction => 
                                <Transaction
                                trans = { transaction }
                                key={transaction.id}
                                deleteRecord = { deleteRecord }
                                updateRecord = { updateRecord }
                                />
                                )
                                )
                    }

                    {
                        (transactions.length === 0) && (
                            <NoRecords/>
                        )
                    }
                    
                    {
                        (filtros === 'revenues') && (
                            (revenues.length === 0) ?  <NoRecords/> : (
                                revenues.map(transaction => 
                                    <Transaction
                                        trans = { transaction }
                                        key={transaction.id}
                                        deleteRecord = { deleteRecord }
                                        updateRecord = { updateRecord }
                                    />
                                )
                            )
                        )
                    }
                    {
                        (filtros === 'expenses') && (
                            (expenses.length === 0) ? <NoRecords/> : (
                                expenses.map(transaction => 
                                    <Transaction
                                        trans = { transaction }
                                        key={transaction.id}
                                        deleteRecord = { deleteRecord }
                                        updateRecord = { updateRecord }
                                    />
                                )
                            )
                        )
                    }
                </div>
            </div>
        </section>
    )
}

export default TransactionHistory;