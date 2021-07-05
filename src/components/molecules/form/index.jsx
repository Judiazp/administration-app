import React from 'react';
import { useForm } from '../../../hooks/useForm';
import './form.css';

const Form = (props) => {
    
    const { addRecord, typeTransaction, setTypeTransaction, setModal } = props;

    const [data, handleInputChange] = useForm({
        operation: typeTransaction,
        amount: '',
        description: '',
    })

    const onSubmit = event => {
        event.preventDefault();
        addRecord(data.operation, data.amount, data.description);
        setTypeTransaction()
        setModal(false)
    }

    const handleClickCancel = () => {
        setModal(false)
    }

    return (
        <div className="content-form">
            <form className="form" onSubmit = { onSubmit } >
                <h2> { typeTransaction } </h2>
                <input type="number" name="amount" placeholder="Ingrese Monto" className="input" onChange = { handleInputChange } required />
                <textarea name="description" placeholder="Alquiler, mercado, etc" className="description" onChange={ handleInputChange } required />
                <div className="content-btns">
                    <button className="button" type="submit">Agregar</button>
                    <button className="button add-expenses" onClick={ handleClickCancel }>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;