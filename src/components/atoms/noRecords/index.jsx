import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSadTear} from '@fortawesome/free-solid-svg-icons'
import './no-records.css'

export const NoRecords = () => {
    return (
        <div className="no-records">
            <h3>No hay registros actualmente...  <FontAwesomeIcon icon={faSadTear} /> </h3>
        </div>
    )
}
