import React from 'react';
import { useForm } from '../../hooks/useForm';
import './formEdit.css'

const FormEdit = ({ trans, updateRecord }) => {

    const [formEditData, handleInputChange] = useForm({
        amount: '',
        description: '',
    })

    const { amount, description } = formEditData

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formEditData);
        updateRecord(trans.id, amount, description)
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
                />
                <input 
                    className="input-edit" 
                    type="text" 
                    placeholder="Descripción" 
                    onChange={ handleInputChange }
                    name="description"
                />
                <div className="contenet-button">
                    <button className="btn-edit" >Confirmar</button>
                    <button type="submit" className="btn-edit" >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdit;