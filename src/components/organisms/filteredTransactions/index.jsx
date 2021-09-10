import React from 'react';
import Transaction from '../transaction';
import { NoRecords } from '../../atoms/noRecords';

export const FilteredTransactions = ({ filters, transactions, deleteRecord, updateRecord  }) => {
    
    const filterArray = (typeFilter) => {

        let array
        if (typeFilter === 'everyone') {
            array = transactions
        } 
        if (typeFilter === 'notPayed') {
            array = transactions.filter(({stateDebts}) => stateDebts === typeFilter)  
        } else {
            array = transactions.filter(({operation}) => operation === typeFilter)
        }

        if (filters === typeFilter) {
            if (array.length === 0) {
                return <NoRecords/>
            } else {
                return array.map(transaction => 
                    <Transaction
                        trans = { transaction }
                        key={transaction.id}
                        deleteRecord = { deleteRecord }
                        updateRecord = { updateRecord }
                    /> 
                )
            }
        }
    }
    
    return (
        <div className="content-transaction">
            { filterArray(filters) }
        </div>
    )
}
