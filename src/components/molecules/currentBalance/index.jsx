import React from 'react';
import './currentBalance.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';


export const CurrentBalance = ({setBalance, amounts}) => {

    const handleClickClosed = () => {
        setBalance(false)
    }

    const balance = amounts.totalRevenues - amounts.totalExpenses - amounts.totalDebtsPaid
    const realBalance = amounts.totalRevenues - amounts.totalExpenses - amounts.totalDebtsPaid -amounts.totalDebtsNotPayed

    return (
        <div className="content-remainder">
            <div className="remainder">
                <span onClick={ handleClickClosed }>
                    <FontAwesomeIcon icon={faWindowClose} />
                </span>
                <div className="current-remainder">
                    <h2>Saldo actual</h2>
                    <h4> 
                        Ingregos: 
                        <span className="icon-up"> 
                            { amounts.totalRevenues.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h4> 
                        Gastos: 
                        <span className="icon-down">
                            { amounts.totalExpenses.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h4> 
                        Deudas pagadas: 
                        <span className="icon-down">
                            { amounts.totalDebtsPaid.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h3> 
                        Saldo: 
                        <span className="icon">
                            { balance.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h3>
                </div>

                <div className="current-remainder">
                    <h2>Saldo real </h2>
                    <h4> 
                        Ingregos: 
                        <span className="icon-up"> 
                            { amounts.totalRevenues.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h4> 
                        Gastos: 
                        <span className="icon-down">
                            { amounts.totalExpenses.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h4> 
                        Deudas pagadas: 
                        <span className="icon-down">
                            { amounts.totalDebtsPaid.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h4> 
                        Deudas pendientes: 
                        <span className="icon-down">
                            { amounts.totalDebtsNotPayed.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h4>
                    <h3> 
                        Saldo: 
                        <span className="icon">
                            { realBalance.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } 
                        </span> 
                    </h3>
                </div>
            </div>
        </div>
    )
}
