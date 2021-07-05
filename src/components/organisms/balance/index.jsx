import React from 'react'
import './balance.css'

export const Balance = ({ records }) => {

    const { transactions } = records
    
    let totalRevenues = 0;
    let totalExpenses = 0;

    transactions.filter(({ operation }) => operation === 'Ingreso').forEach(({ amount }) => {
        totalRevenues += parseInt(amount)
    });

    transactions.filter(({operation}) => operation === 'Egreso').forEach(({ amount }) => {
        totalExpenses += parseInt(amount)
    })

    return (
        <div className="content-balance">
            <div className="content-calculation">
                <div className="balance-calculation">
                    <h3>Balance: { totalRevenues - totalExpenses } </h3>
                </div>
            </div>
            <div className="balance">
                <div className="content-icome content-item-balance">
                    <h3>Ingreso</h3>
                    <h3> { totalRevenues } $</h3>
                </div>
                <div className="content-expenses content-item-balance">
                    <h3>Egreso</h3>
                    <h3> { totalExpenses } $</h3>
                </div> 
            </div>
        </div>
    )
}
