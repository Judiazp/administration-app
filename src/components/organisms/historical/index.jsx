import React, { useState } from 'react';
import Transaction from '../transaction';
import { NoRecords } from '../../atoms/noRecords';
import './historical.css';

const TransactionHistory = ({ transactions, deleteRecord, updateRecord }) =>  {

    const [filters, setFilters] = useState('everyone')

    const revenues = transactions.filter(({operation}) => operation === 'Ingreso')
    const expenses = transactions.filter(({operation}) => operation === 'Gasto')
    const debtHistory = transactions.filter(({operation}) => operation === 'Deuda')


    const handleFilterClick = (e, filter) => {
        if (e.target.name === filter) {
            setFilters(filter)
        } 
    }

    return (
        <div className='transaction-history'>
            <div className="content-filter">
                <h2 className='title'>Historial de Transacciones</h2>
                <article className='btns'>
                    <button 
                        className='filter-revenues filters' 
                        name="revenues" 
                        onClick={ (e) => handleFilterClick(e, 'revenues') }
                    >
                        Ingresos
                    </button>
                    <button 
                        className='filter-expenses filters'
                        name='expenses' 
                        onClick={ (e) => handleFilterClick(e, 'expenses') }
                    >
                        Gastos
                    </button>
                    <button 
                        className='filter-debts filters' 
                        name='debts' 
                        onClick={ (e) => handleFilterClick(e, 'debts') }
                    >
                        Deudas
                    </button>
                    <button 
                        className='filters' 
                        name='everyone' 
                        onClick={ (e) => handleFilterClick(e, 'everyone') }
                    >
                        Todos
                    </button>
                </article>
            </div>
            <div className="content-tab">
                <p>Tipo</p>
                <p>Fecha</p>
                <p>Descripción</p>
                <p>Valor</p>
                <p>Edicion</p>
            </div>
            <div className="content-transaction">
                { 
                    (filters === 'everyone') && (
                        (transactions.length === 0) ? <NoRecords/> : (
                            transactions.map(transaction => 
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
                    (filters === 'revenues') && (
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
                    (filters === 'expenses') && (
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
                {
                    (filters === 'debts') && (
                        (debtHistory.length === 0) ? <NoRecords/> : (
                            debtHistory.map(transaction => 
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
    )
}

export default TransactionHistory;