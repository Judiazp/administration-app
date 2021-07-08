import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import '../forms.css';

const Form = (props) => {
    
    const { addRecord, typeTransaction, setTypeTransaction, setModal } = props;
    const date = new Date()

    const [data, handleInputChange] = useForm({
        operation: typeTransaction,
        amount: 0,
        description: '',
        date: date.toLocaleString()
    })

    const onSubmit = event => {
        event.preventDefault();
        addRecord(data.operation, data.amount, data.description, data.date);
        setTypeTransaction()
        setModal(false)
    }

    const handleClickCancel = () => {
        setModal(false)
    }

    return (
        <div className="content-form">
            <form className="form" onSubmit={ onSubmit } >
                <h2> { typeTransaction } </h2>
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="Ingrese monto" 
                    className="input" 
                    onChange = { handleInputChange } 
                    step="0.001" 
                    required 
                />
                <textarea 
                    name="description" 
                    placeholder="Alquiler, mercado..." 
                    className="description" 
                    onChange={ handleInputChange } 
                    required 
                />
                <div className="content-btns">
                    <button className="button" type="submit">Agregar</button>
                    <button className="button btn-cancel" onClick={ handleClickCancel }>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;