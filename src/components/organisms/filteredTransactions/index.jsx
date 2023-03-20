import React from 'react';
import Transaction from '../transaction';
import { NoRecords } from '../../atoms/noRecords';
import getTransactionsByFilter from './_helper';

export const FilteredTransactions = ({ filters: typeFilter, transactions, deleteRecord, updateRecord }) => {
    const transactionList = getTransactionsByFilter(typeFilter, transactions)
    return (
        <div className="content-transaction">
            {
                transactionList.length ? transactionList.map(transaction =>
                    <Transaction
                        trans={transaction}
                        key={transaction.id}
                        deleteRecord={deleteRecord}
                        updateRecord={updateRecord}
                    />
                ) : <NoRecords />
            }
        </div>
    )
}
