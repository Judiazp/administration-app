import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import '../forms.css';

const FormEdit = ({ transaction, update, setEditData }) => {

    const [formEditData, handleInputChange] = useForm({
        amount: '',
        description: '',
    })

    const { amount, description } = formEditData

    const handleSubmit = (e) => {
        e.preventDefault()
        update( transaction.id, amount, description )
        setEditData(false)
    }

    const handleClickCancel = () => {
        setEditData(false)
    }

    return( 
        <div className="content-form">
            <form className="form" onSubmit={ handleSubmit }>
                <h2>
                    Editar transacción
                </h2>
                <input 
                    className="input" 
                    type="number" 
                    placeholder="monto" 
                    onChange={ handleInputChange }
                    name="amount" 
                    required
                    step="0.001"
                />
                <input 
                    className="input" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={ handleInputChange }
                    name="description"
                    required
                />
                <div className="content-btns">
                    <button className="button" type='submit' >Confirmar</button>
                    <button className="button btn-cancel" onClick={ handleClickCancel } >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdit;