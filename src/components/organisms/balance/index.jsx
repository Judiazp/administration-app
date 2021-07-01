import React from 'react'
import './balance.css'

export const Balance = ( { expenses, income } ) => {
    return (
        <div className="balance">
            <div className="content-icome content-item-balance">
                <h3>Ingresos</h3>
                <h3> { income } $</h3>
            </div>
            <div className="content-expenses content-item-balance">
                <h3>Egresos</h3>
                <h3> { expenses } $</h3>
            </div> 
        </div>
    )
}
