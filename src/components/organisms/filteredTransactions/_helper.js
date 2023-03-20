const getTransactionsByFilter = (typeFilter, transactions = []) =>
    typeFilter === 'everyone' ?
        transactions
        : transactions.filter(({ stateDebts, operation }) =>
            stateDebts === typeFilter || operation === typeFilter
        )

export default getTransactionsByFilter;