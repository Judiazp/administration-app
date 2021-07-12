import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faHandHoldingUsd} from '@fortawesome/free-solid-svg-icons';

import './header.css';

const Header = () => {
    return (
        <header className = "header">
            <div className = "titlePages">
                <h1 className="icon-logo">
                    <FontAwesomeIcon icon={ faHandHoldingUsd } />
                </h1> 
                <h2>Finance</h2>
            </div>
        </header>
    )
}

export default Header;