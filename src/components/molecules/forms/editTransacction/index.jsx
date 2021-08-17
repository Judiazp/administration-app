import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import '../forms.css';

const FormEdit = ({ transaction, update, setEditData }) => {

    const [formEditData, handleInputChange] = useForm({
        amount: transaction.amount,
        description: transaction.description,
        stateDebts: transaction.stateDebts
    })

    const { amount, description, stateDebts } = formEditData
    
    const handleSubmit = (e) => {
        e.preventDefault()
        update( transaction.id, transaction.operation, amount, description, stateDebts )
        setEditData(false)
    }

    const handleClickCancel = () => {
        setEditData(false)
    }

    return( 
        <div className="content-form">
            <form className="form-modal" onSubmit={ handleSubmit }>
                <h2 className="title-form">
                    Editar { transaction.operation }
                </h2>
                <input 
                    className="input" 
                    type="number" 
                    placeholder="monto" 
                    onChange={ handleInputChange }
                    name="amount" 
                    required
                    value={ amount }
                    step="0.001"
                />
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={ handleInputChange }
                    name="description"
                    value={ description }
                    autoCorrect="off"
                    required
                />

                {
                    transaction.operation === 'deuda' && (
                        <div className="content-checkbox">
                            <label 
                                className="checkbox" 
                            >
                                <input 
                                    type="checkbox"
                                    name="stateDebts"
                                    value='paid'
                                    checked={ stateDebts === 'notPayed' ? false : true }
                                    onChange={ handleInputChange }
                                />
                                Pago realizado
                            </label>
                        </div>
                    )
                }

                <div className="content-btns">
                    <button className="btn-init" type='submit' >Confirmar</button>
                    <button className="btn-init btn-cancel" onClick={ handleClickCancel } >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdit;