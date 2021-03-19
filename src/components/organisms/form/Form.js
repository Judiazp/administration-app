import React, { useState } from 'react';
import './Form.css';

const Form = (props) => {

    const { addRecord } = props;

    const [data, setDatos] = useState({
        operation: '',
        amount: '',
        description: '',
    })

    const onSubmit = event => {
        event.preventDefault();
         addRecord(data.operation, data.amount, data.description);
    }

    const onChange = event => {
        setDatos({
            ...data,
            [event.target.name] : event.target.value
        })
    }

    return (
        <div className="operation">
            <div className="balance">
                <h2>Balance</h2>
                <h3>0.00 $</h3>
            </div>
            <form className="form" onSubmit = { onSubmit } >
                <h3 style={{ color: '#fff' }}>Nueva Operacion</h3>
                <select  name = "operation" className = "input" onChange = { onChange }>
                    <option>Operacion</option>
                    <option value="Ingreso">Ingreso</option>
                    <option value="Egreso">Egreso</option>
                </select>
                <input type = "number" name  = "amount" placeholder = "Ingrese Monto" className = "input" onChange = { onChange }/>
                <textarea name = "description" placeholder = "Agrega una descripcion" className = "description" onChange = { onChange }/>
                <button className = "button" type = "submit">Agregar</button>
            </form>
        </div>
    )
}

export default Form;