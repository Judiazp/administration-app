// TODO: Dejar de pasar los montos como strings
const getBalance = (transactions = []) => transactions.reduce((acc, currentValue) => {
    const { operation, amount, stateDebts } = currentValue;

    if (operation === 'ingreso' || operation === 'gasto') {
        acc[operation] = Number(amount) + acc[operation]
    }

    if (stateDebts === 'paid') {
        acc.debtsPaid += Number(amount)
    }

    if (stateDebts === 'notPayed') {
        acc.totalDebts += Number(amount)
    }

    return acc
}, {
    ingreso: 0,
    gasto: 0,
    totalDebts: 0,
    debtsPaid: 0
})

export default getBalance;
