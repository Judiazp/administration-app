import { faWallet } from '@fortawesome/free-solid-svg-icons';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';

const getBalanceCards = ({ ingreso, gasto, totalDebts, debtsPaid }) => [
    {
        id: 1,
        typeTransaction: "Saldo actual",
        icon: faWallet,
        message: "Ver saldo",
        iconColor: "#2196F3",
        parameter: 'saldo',
        currentBalance: `${ingreso - gasto - debtsPaid}`
    },
    {
        id: 2,
        typeTransaction: "Ingresos",
        icon: faArrowCircleUp,
        message: "Agrega un ingreso",
        iconColor: "rgb(93,192,97)",
        parameter: "ingreso",
        currentBalance: `${ingreso}`
    },
    {
        id: 3,
        typeTransaction: "Gastos",
        icon: faArrowCircleDown,
        message: "Agrega un gasto",
        iconColor: "rgb(229,61,47)",
        parameter: "gasto",
        currentBalance: `${gasto + debtsPaid}`
    },
    {
        id: 4,
        typeTransaction: "Deudas",
        icon: faCreditCard,
        message: "Agrega una deuda",
        iconColor: "#00796B",
        parameter: "deuda",
        currentBalance: `${totalDebts}`
    },
]

export default getBalanceCards
