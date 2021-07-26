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
        stateDebts: 'notPayed',
        date: date.toLocaleDateString()
    })

    const onSubmit = event => {
        event.preventDefault();
        addRecord(data.operation, data.amount, data.description, data.stateDebts, data.date);
        setTypeTransaction()
        setModal(false)
    }

    console.log(data.stateDebts);

    const handleClickCancel = () => {
        setModal(false)
    }

    return (
        <div className="content-form">
            <form className="form" onSubmit={ onSubmit } >
                <h2> Agregar { typeTransaction } </h2>
                <input 
                    type="number" 
                    name="amount" 
                    placeholder="Ingrese monto" 
                    className="input" 
                    onChange={ handleInputChange } 
                    step="0.001" 
                    required
                />
                <input 
                    name="description" 
                    placeholder="Alquiler, mercado..." 
                    className="description" 
                    onChange={ handleInputChange } 
                    required 
                    autoComplete="off"
                    maxlength="20" 
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