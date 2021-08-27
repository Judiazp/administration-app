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
        stateDebts: typeTransaction === 'deuda' ? 'notPayed' : typeTransaction,
        date: date.toLocaleDateString()
    })

    const onSubmit = event => {
        event.preventDefault();
        addRecord(data.operation, data.amount, data.description, data.stateDebts, data.date);
        setTypeTransaction()
        setModal(false)
    }

    const handleClickCancel = () => {
        setModal(false)
    }

    return (
        
        <div className="content-form">
            <form className="form-modal" onSubmit={ onSubmit } >
                <h2 className="title-form"> Agregar { typeTransaction } </h2>
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
                    className="input" 
                    onChange={ handleInputChange } 
                    required 
                    autoComplete="off"
                    maxlength="20" 
                />
                <div className="content-btns">
                    <button className="btn-init" type="submit">Agregar</button>
                    <button className="btn-init btn-cancel" onClick={ handleClickCancel }>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;