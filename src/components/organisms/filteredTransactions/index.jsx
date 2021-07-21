import React from 'react';
import Transaction from '../transaction';
import { NoRecords } from '../../atoms/noRecords';

export const FilteredTransactions = ({ filters, transactions, deleteRecord, updateRecord  }) => {

    const filterArray = (typeFilter) => {
        
        const array = (typeFilter === 'everyone') ? transactions : transactions.filter(({operation}) => operation === typeFilter)

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
