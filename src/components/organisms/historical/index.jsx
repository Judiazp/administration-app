import React from 'react';
import Transaction from '../transaction'
import './historical.css';

const TransactionHistory = (props) =>  {

    return (
        <div className='transactionHistory'>
            <h2 className='title'>Historial de Transacciones</h2>
            <article className='btns'>
                <button className='filtros'>Ingresos</button>
                <button className='filtroEgr'>Egresos</button>
                <button className='filtros'>Todos</button>
            </article>
            { props.transactions.map(transaction => <Transaction
            trans = { transaction }
            key={transaction.id}
            deleteRecord = { props.deleteRecord }
            updateRecord = { props.updateRecord }/> )}
        </div>
    )
}

export default TransactionHistory;