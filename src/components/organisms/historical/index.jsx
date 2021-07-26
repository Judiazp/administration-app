import React, { useState } from 'react';
import { FilteredTransactions } from '../filteredTransactions';
import './historical.css';

const TransactionHistory = ({ transactions, deleteRecord, updateRecord }) =>  {

    const [filters, setFilters] = useState('everyone')

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
                        onClick={ (e) => handleFilterClick(e, 'ingreso') }
                    >
                        Ingresos
                    </button>
                    <button 
                        className='filter-expenses filters'
                        name='expenses' 
                        onClick={ (e) => handleFilterClick(e, 'gasto') }
                    >
                        Gastos
                    </button>
                    <button 
                        className='filter-debts filters' 
                        name='debts' 
                        onClick={ (e) => handleFilterClick(e, 'deuda') }
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
            <FilteredTransactions 
                filters={ filters } 
                transactions={ transactions }
                deleteRecord = { deleteRecord }
                updateRecord = { updateRecord } 
            />
        </div>
    )
}

export default TransactionHistory;