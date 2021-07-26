import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';

export const Register = ({ setForm } ) => {

    const [formRegister, handleInputChangeRegister] = useForm({
        nameRegister: '',
        emailRegister: '',
        passwordRegister: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formRegister)
    }

    return (
        <form className="container__form " onSubmit={ handleSubmit }>
            <div align="center">
                <h2 className="icon">
                    <FontAwesomeIcon icon={ faLock } />
                </h2>
                <h2 className="title-form">¡Comencemos!</h2>
            </div>
            <input 
                type="text" 
                className="input" 
                placeholder="Nombre"
                name="nameRegister" 
                onChange={ handleInputChangeRegister }
            />
            <input 
                type="email" 
                className="input" 
                placeholder="Email"
                name="emailRegister"
                onChange={ handleInputChangeRegister }
            />
            <input 
                type="password" 
                className="input" 
                placeholder="Contraseña"
                name="passwordRegister"
                onChange={ handleInputChangeRegister }
            />
            <button className="btn-init">
                Registrarme
            </button>
            <p className="signup">
                ¿Ya tienes cuenta?
                <span onClick={ () => setForm(true) } >
                    Inicia sesión aquí
                </span>
            </p>
        </form>
    )
}
