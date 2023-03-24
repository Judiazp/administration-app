import React from 'react';
import { Graphics } from '../../molecules/graphics';
import getBalance from '../../../utils/getFullAmount'
import getBalanceCards from './_helper';
import Card from '../../molecules/card'
import './balance.css';

export const Balance = ({ records, addTransaction }) => {

    const { transactions } = records

    let amounts = {
        totalRevenues: 0,
        totalExpenses: 0,
        totalDebts: 0,
        totalDebtsPaid: 0,
        totalDebtsNotPayed: 0
    }

    const { ingreso, gasto, totalDebts, debtsPaid } = getBalance(transactions)

    const cards = getBalanceCards({ ingreso, gasto, totalDebts, debtsPaid })

    return (
        <>
            <div className="content-balance">
                {cards.map(item => {
                    return (
                        <Card
                            key={item.id}
                            addTransaction={addTransaction}
                            typeTransaction={item.typeTransaction}
                            icon={item.icon}
                            currentBalance={item.currentBalance}
                            amounts={amounts}
                            message={item.message}
                            iconColor={item.iconColor}
                            parameter={item.parameter}
                        />
                    )
                })}
            </div>
            <Graphics
                income={ingreso}
                expenses={gasto}
                debts={totalDebts}
                debtsPaid={debtsPaid}
            />
        </>
    )
}
