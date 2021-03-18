import React, { useState } from 'react';
import Form from '../organisms/form/Form';
import Historical from '../organisms/historical/Historical';

const FinanceBoard = () => {

    const [records, setRecords] = useState({
        transactions: []
    })

    const addRecord = (operation, amount, description) => {
        const newTrans = {
            operation: operation,
            amount: amount,
            description: description
        }

        setRecords({
            transactions: [...records.transactions, newTrans]
        })
    }

    return (
        <>
            <Form addRecord = { addRecord } />
            <Historical  transactions = {records.transactions} />
        </>
    )
}

export default FinanceBoard;