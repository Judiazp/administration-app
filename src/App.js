import React from 'react';
import FinanceBoard from './components/pages/financeBoard'
import Login from './components/pages/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

    return (
        <Router >
            <Route exact path="/" component={ FinanceBoard }/>
            <Route path="/board" component={ FinanceBoard } />
            <Route path="/pruebas" component={ Login } />
        </Router>
    )
}

export default App;