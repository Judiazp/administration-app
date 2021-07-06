import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import '../forms.css';

const Form = (props) => {
    
    const { addRecord, typeTransaction, setTypeTransaction, setModal } = props;
    const date = new Date()

    const [data, handleInputChange] = useForm({
        operation: typeTransaction,
        amount: '',
        description: '',
        date: {
            dd: date.getDate(),
            mm: date.getMonth() + 1,
            yy: date.getFullYear(),
            hr: date.getHours(),
            min: date.getMinutes(),
            seconds: date.getSeconds()
        }
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
                <input type="number" name="amount" placeholder="Ingrese Monto" className="input" onChange = { handleInputChange } required />
                <textarea name="description" placeholder="Alquiler, mercado, etc" className="description" onChange={ handleInputChange } required />
                <div className="content-btns">
                    <button className="button" type="submit">Agregar</button>
                    <button className="button btn-cancel" onClick={ handleClickCancel }>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;