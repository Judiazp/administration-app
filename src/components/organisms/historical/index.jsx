import React, { useState } from 'react';
import Transaction from '../transaction'
import './historical.css';

const TransactionHistory = (props) =>  {

    const [filtros, setFiltros] = useState('everyone')

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
                { 
                    (filtros === 'everyone') && (
                        props.transactions.map(transaction => <Transaction
                            trans = { transaction }
                            key={transaction.id}
                            deleteRecord = { props.deleteRecord }
                            updateRecord = { props.updateRecord }
                        />)
                    )
                }
                {
                    (filtros === 'revenues') && (
                      props.transactions.filter(({operation}) => operation === 'Ingreso').map(transaction => 
                        <Transaction
                            trans = { transaction }
                            key={transaction.id}
                            deleteRecord = { props.deleteRecord }
                            updateRecord = { props.updateRecord }
                        />)
                    )
                }
                {
                    (filtros === 'expenses') && (
                        props.transactions.filter(({operation}) => operation === 'Egreso').map(transaction => 
                            <Transaction
                                trans = { transaction }
                                key={transaction.id}
                                deleteRecord = { props.deleteRecord }
                                updateRecord = { props.updateRecord }
                            />
                        )
                    )
                }
            </div>
        </section>
    )
}

export default TransactionHistory;