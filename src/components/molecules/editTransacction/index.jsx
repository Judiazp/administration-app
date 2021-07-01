import React from 'react';
import { useForm } from '../../../hooks/useForm';
import './formEdit.css'

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
        <div align="center" className='modal'>
            <form className="form-edit" onSubmit={ handleSubmit }>
                <h1>
                    Editar transacción
                </h1>
                <input 
                    className="input-edit" 
                    type="number" 
                    placeholder="monto" 
                    onChange={ handleInputChange }
                    name="amount" 
                    required
                />
                <input 
                    className="input-edit" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={ handleInputChange }
                    name="description"
                    required
                />
                <div className="contenet-button">
                    <button className="btn-edit" type='submit' >Confirmar</button>
                    <button className="btn-edit" onClick={ handleClickCancel } >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdit;