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
        stateDebts: '',
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
                <h2> { typeTransaction } </h2>
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
                    maxlength="15" 
                />

                {/* {
                    typeTransaction === 'Deuda' && (
                        <div className="content-checkbox">
                            <label 
                                className="checkbox"
                            >
                                <input 
                                    type="checkbox"
                                    name="stateDebts"
                                    value="notPayed"
                                    onChange={ handleInputChange }
                                    disabled={ data.stateDebts === 'paid' ? true : false }
                                    required={ data.stateDebts === 'paid' ? true : false } 
                                />
                                Pendiente
                            </label>
                            <label 
                                className="checkbox" 
                            >
                                <input 
                                    type="checkbox" 
                                    name="stateDebts"
                                    value="paid"
                                    onChange={ handleInputChange }
                                    disabled={ data.stateDebts === 'notPayed' ? true : false }
                                    required={ data.stateDebts === 'notPayed' ? true : false } 
                                />
                                Pagada
                            </label>
                        </div>
                    )
                } */}

                <div className="content-btns">
                    <button className="button" type="submit">Agregar</button>
                    <button className="button btn-cancel" onClick={ handleClickCancel }>Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default Form;