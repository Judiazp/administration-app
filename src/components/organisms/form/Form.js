import React, { useState } from 'react';
import { useForm } from '../../hooks/useForm';

import './Form.css';

const Form = (props) => {

    const { addRecord } = props;

    const [data, handleInputChange] = useForm({
        operation: '',
        amount: '',
        description: '',
    })

    const onSubmit = event => {
        event.preventDefault();
        addRecord(data.operation, data.amount, data.description);
    }

    return (
        <div className="operation">
            <div>
                <h2>Balance</h2>
                <h3>{ data.amount } $</h3>
            </div>
            <form className="form" onSubmit = { onSubmit } >
                <h3 style={{ color: '#fff' }}>Nueva Operación</h3>
                <select  name="operation" className="input" onChange={ handleInputChange }>
                    <option value="Ingreso">Ingreso</option>
                    <option value="Egreso">Egreso</option>
                </select>
                <input type="number" name="amount" placeholder="Ingrese Monto" className="input" onChange = { handleInputChange }/>
                <textarea name="description" placeholder="Alquiler, mercado, etc" className="description" onChange={ handleInputChange }/>
                <button className="button" type="submit">Agregar</button>
            </form>
        </div>
    )
}

export default Form;