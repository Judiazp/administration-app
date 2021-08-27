import React from 'react';
import { Graphics } from '../../molecules/graphics';
import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
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
   
    transactions.filter(({ operation }) => operation === 'ingreso' ).forEach(({ amount }) => {
        amounts.totalRevenues += parseFloat(amount)
    });

    transactions.filter(({operation}) => operation === 'gasto').forEach(({ amount }) => {
        amounts.totalExpenses += parseFloat(amount)
    })

    transactions.filter(({operation}) => operation === 'deuda').forEach(({ amount }) => {
        amounts.totalDebts += parseFloat(amount)
    })

    transactions.filter(({stateDebts}) => stateDebts === 'paid').forEach(({ amount }) => {
        amounts.totalDebtsPaid += parseFloat(amount)
    })

    transactions.filter(({stateDebts}) => stateDebts === 'notPayed').forEach(({ amount }) => {
        amounts.totalDebtsNotPayed += parseFloat(amount)
    })

    console.log(amounts.totalDebtsNotPayed);

    const cards = [
        {
            id: 1,
            typeTransaction: "Saldo actual",
            icon: faWallet,
            message: "Ver saldo",
            iconColor: "#2196F3", 
            parameter: 'saldo',
            currentBalance: amounts.totalRevenues - amounts.totalExpenses - amounts.totalDebtsPaid
        },
        {
            id: 2,
            typeTransaction: "Ingresos",
            icon:  faArrowCircleUp,
            message: "Agrega un ingreso",
            iconColor: "rgb(93,192,97)",
            parameter: "ingreso",
            currentBalance: amounts.totalRevenues
        },
        {
            id: 3,
            typeTransaction: "Gastos",
            icon:  faArrowCircleDown ,
            message: "Agrega un gasto",
            iconColor: "rgb(229,61,47)",
            parameter: "gasto",
            currentBalance: amounts.totalExpenses + amounts.totalDebtsPaid
        },
        {
            id: 4,
            typeTransaction: "Deudas",
            icon:  faCreditCard,
            message: "Agrega una deuda",
            iconColor: "#00796B",
            parameter: "deuda",
            currentBalance: amounts.totalDebts - amounts.totalDebtsPaid
        },
    ]

    return (
        <>
            <div className="content-balance">
                { cards.map(item => {
                    return ( 
                        <Card  
                            key={item.id}
                            addTransaction={ addTransaction } 
                            typeTransaction={ item.typeTransaction }
                            icon={ item.icon }
                            currentBalance={item.currentBalance}
                            amounts={ amounts }
                            message={ item.message}
                            iconColor={item.iconColor}
                            parameter={item.parameter}
                        />
                    )
                })}
            </div>
            <div className = "content-graph-form">
                <div className="graph">
                    <Graphics 
                        income={ amounts.totalRevenues } 
                        expenses={ amounts.totalExpenses } 
                        debts={ amounts.totalDebts } 
                        debtsPaid={ amounts.totalDebtsPaid } 
                    />
                </div>
            </div>
        </>
    )
}
