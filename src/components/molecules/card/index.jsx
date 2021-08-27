import React, { useState }  from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CurrentBalance } from '../currentBalance';
import './card.css'

const Card = ({
    addTransaction, 
    typeTransaction, 
    icon, 
    message, 
    currentBalance,
    iconColor, 
    parameter,
    amounts,
}) => {

    const [balance, setBalance] = useState(false)
    
    const action = () => {
        typeTransaction === 'Saldo actual' ?
            setBalance(!balance)
        : addTransaction(parameter)
    }

    return (
        <>
        <div 
            className="content-item-balance" 
            onClick={ () => action()} 
            title={message}
        >
            <p>{ typeTransaction }</p>
            <h2> 
                { currentBalance.toLocaleString('de-DE', { style: 'currency', currency: 'USD' }) }
                <span style={{ color: `${iconColor}` }}> 
                    <FontAwesomeIcon icon={icon} /> 
                </span>
            </h2>
            
        </div>
            { balance && <CurrentBalance amounts={amounts} setBalance={setBalance} /> }
        </>
    )
}

export default Card;