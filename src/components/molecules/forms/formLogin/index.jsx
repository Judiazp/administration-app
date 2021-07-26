import React from 'react';
import { useForm } from '../../../../hooks/useForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import '../forms.css'

export const Login = ({ setForm }) => {

    const [formLogin, handleInputChange] = useForm({
        emailLogin: '',
        passwordLogin: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formLogin);
    }

    return (
        <form className="container__form" onSubmit={ handleSubmit } >
            <div align="center">
                <h2 className="icon"> 
                    <FontAwesomeIcon icon={ faKey } />
                </h2>
                <h2 className="title-form">Inicia sesión</h2>
            </div>

            <input 
                type="email" 
                className="input" 
                placeholder="Email"
                name="emailLogin"
                onChange={ handleInputChange }
            />
            <input 
                type="password" 
                className="input" 
                placeholder="Contraseña"
                name="passwordLogin"
                onChange={ handleInputChange }
            />
            <button className="btn-init">
                Iniciar sesión
            </button>
            <p className="signup">
                ¿No tienes cuenta?
                <span onClick={ () => setForm(false) } >
                    Registrate aquí
                </span>
            </p>
        </form>
    )
}
