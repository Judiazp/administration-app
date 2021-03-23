import React from 'react';
import './header.css'

const Header = () => {
    return (
        <header className = "header">
            <div className = "titlePages">
                <img src="./finance.png" alt="logo-finance" />
                <h1>Finance</h1>
            </div>
        </header>
    )
}

export default Header