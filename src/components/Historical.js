import './Historical.css';
import Transaction from './Transaction';

const TransactionHistory = () => {
    return (
        <div className='transactionHistory'>
            <h2 className='title'>Historial de Transacciones</h2>
            <filtros className='btns'>
                <button className='filtros'>Ingresos</button>
                <button className='filtros'>Egresos</button>
                <button className='filtros'>Todos</button>
            </filtros>
            
            <Transaction />
        </div>
    )
}


export default TransactionHistory;

