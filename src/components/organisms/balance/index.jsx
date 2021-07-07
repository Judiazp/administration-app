import React from 'react'
import './balance.css'

export const Balance = ({ records }) => {

    const { transactions } = records
    
    let totalRevenues = 0;
    let totalExpenses = 0;

    transactions.filter(({ operation }) => operation === 'Ingreso').forEach(({ amount }) => {
        totalRevenues += parseFloat(amount)
    });

    transactions.filter(({operation}) => operation === 'Egreso').forEach(({ amount }) => {
        totalExpenses += parseFloat(amount)
    })

    return (
        <div className="content-balance">
            <div className="content-calculation">
                <div className="balance-calculation">
                    <h3>Balance</h3>
                    <h3> { (totalRevenues - totalExpenses).toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } </h3>
                </div>
            </div>
            <div className="balance">
                <div className="content-icome content-item-balance">
                    <h3>Ingresos</h3>
                    <h3> { totalRevenues.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } </h3>
                </div>
                <div className="content-expenses content-item-balance">
                    <h3>Egresos</h3>
                    <h3> { totalExpenses.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) } </h3>
                </div> 
            </div>
        </div>
    )
}
