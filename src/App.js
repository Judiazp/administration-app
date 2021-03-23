import React from 'react';
import FinanceBoard from './components/pages/FinanceBoard'
import Login from './components/pages/login'
import { BrowserRouter as Router, Route } from 'react-router-dom'


const App = () => {

    return (
        <Router >
            <Route exact path = "/" component = { Login }/>
            <Route path = "/board" component = { FinanceBoard } />
        </Router>
    )
}

export default App;