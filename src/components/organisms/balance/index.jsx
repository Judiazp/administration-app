import React, { useState } from 'react';
import { Graphics } from '../../molecules/graphics';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
import './balance.css';

export const Balance = ({ records, addTransaction }) => {

    const [balance, setBalance] = useState(false)

    const { transactions } = records

    let totalRevenues = 0;
    let totalExpenses = 0;
    let totalDebts = 0;
    let totalDebtsPaid = 0;
   
    transactions.filter(({ operation }) => operation === 'ingreso' ).forEach(({ amount }) => {
        totalRevenues += parseFloat(amount)
    });

    transactions.filter(({operation}) => operation === 'gasto').forEach(({ amount }) => {
        totalExpenses += parseFloat(amount)
    })

    transactions.filter(({operation}) => operation === 'deuda').forEach(({ amount }) => {
        totalDebts += parseFloat(amount)
    })

    transactions.filter(({stateDebts}) => stateDebts === 'paid').forEach(({ amount }) => {
        totalDebtsPaid += parseFloat(amount)
    })

    return (
        <>
            <div className="content-balance">
                <div 
                    className="content-item-balance" 
                    title="Ver balance" 
                    onClick={ () => setBalance(!balance) }
                >
                    <p>Saldo actual</p>
                    <h2> 
                        { (totalRevenues - totalExpenses - totalDebtsPaid).toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        <span className="icon"> <FontAwesomeIcon icon={ faWallet } /> </span> 
                    </h2>
                    <div className={ balance ? "current-balance-open" : "current-balance"}>
                        <h4> 
                            Ingregos: 
                            <span className="icon-up"> 
                                { totalRevenues.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                            </span> 
                        </h4>
                        <h4> 
                            Gastos: 
                            <span className="icon-down"> 
                                { totalExpenses.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                            </span> 
                        </h4>
                        <h4> 
                            Deudas Pagadas: 
                            <span className="icon-down"> 
                                { totalDebtsPaid.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                            </span> 
                        </h4>
                    </div> 
                </div>
                <div 
                    className="content-item-balance" 
                    onClick={ () => addTransaction('ingreso') } 
                    title="Agrega un ingreso"
                >
                    <p>Ingresos</p>
                    <h2> 
                        { totalRevenues.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) }
                        <span className="icon-up"> <FontAwesomeIcon icon={faArrowCircleUp} /> </span>
                    </h2>
                </div>
                <div 
                    className="content-item-balance" 
                    onClick={ () => addTransaction('gasto') } 
                    title="Agrega un gasto"
                >
                    <p>Gastos</p>
                    <h2> 
                        { (totalExpenses + totalDebtsPaid ).toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) }
                        <span className="icon-down"> <FontAwesomeIcon icon={faArrowCircleDown} /> </span>
                    </h2>
                </div>
                <div 
                    className="content-item-balance" 
                    onClick={ () => addTransaction('deuda') }
                    title="Agregar una deuda"
                >
                    <p>Deudas</p>
                    <h2>
                        { (totalDebts - totalDebtsPaid).toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) }
                        <span className="icon-tdc"> <FontAwesomeIcon icon={ faCreditCard } /> </span> 
                    </h2>
                </div> 
            </div>
            <div className = "content-graph-form">
                <div className="graph">
                    <Graphics income={ totalRevenues } expenses={ totalExpenses } debts={ totalDebts } debtsPaid={ totalDebtsPaid } />
                </div>
            </div>
        </>
    )
}
