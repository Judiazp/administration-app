import React from 'react';
import { useForm } from '../../../hooks/useForm';

import './form.css';

const Form = (props) => {

    const { addRecord, balance } = props;

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
        <form className="form" onSubmit = { onSubmit } >
            <h3 style={{ color: '#fff' }}>Nueva Operación</h3>
            <select  
                name="operation" 
                className="input" 
                onChange={ handleInputChange }
                required
            >
                <option disabled selected="selected">Operación</option>
                <option value="Ingreso">Ingreso</option>
                <option value="Egreso">Egreso</option>
            </select>
            <input type="number" name="amount" placeholder="Ingrese Monto" className="input" onChange = { handleInputChange } required />
            <textarea name="description" placeholder="Alquiler, mercado, etc" className="description" onChange={ handleInputChange } required />
            <button className="button" type="submit">Agregar</button>
        </form>
    )
}

export default Form;