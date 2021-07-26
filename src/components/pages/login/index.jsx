import React, { useState } from 'react';
import Header from '../../molecules/header';
import { Login } from '../../molecules/forms/formLogin';
import { Register } from '../../molecules/forms/formRegister';
import './login.css'

const Form = () =>  {

    const [form, setForm] = useState(true)

    return (
        <>
            <Header />
            <div className="container">
                {
                    form ? (
                        <Login setForm={ setForm } />
                    ) : (
                        <Register setForm={ setForm } />
                    )
                }
            </div>            
        </>
    )
}

export default Form;