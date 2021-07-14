import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import '../forms.css';

const FormEdit = ({ transaction, update, setEditData }) => {

    const [formEditData, handleInputChange] = useForm({
        amount: transaction.amount,
        description: transaction.description,
        stateDebts: ''
    })

    console.log(transaction.stateDebts);

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
            <form className="form" onSubmit={ handleSubmit }>
                <h2>
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
                    required
                />

                {
                    transaction.operation === 'Deuda' && (
                        <div className="content-checkbox">
                            {/* <label 
                                className="checkbox"
                            >
                                <input 
                                    type="checkbox"
                                    name="stateDebts"
                                    value="notPayed"
                                    onChange={ handleInputChange }
                                    disabled={ stateDebts === 'paid' ? true : false }
                                    required={ stateDebts === 'paid' ? true : false } 
                                />
                                Pendiente
                            </label> */}
                            <label 
                                className="checkbox" 
                            >
                                <input 
                                    type="checkbox" 
                                    name="stateDebts"
                                    value="paid"
                                    onChange={ handleInputChange }
                                    disabled={ stateDebts === 'notPayed' ? true : false }
                                    required={ stateDebts === 'notPayed' ? true : false } 
                                />
                                Pagada
                            </label>
                        </div>
                    )
                }

                <div className="content-btns">
                    <button className="button" type='submit' >Confirmar</button>
                    <button className="button btn-cancel" onClick={ handleClickCancel } >Cancelar</button>
                </div>
            </form>
        </div>
    )
}

export default FormEdit;