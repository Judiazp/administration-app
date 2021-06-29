import React from 'react';
import { useForm } from '../hooks/useForm';
import Header from '../organisms/header/header'
import './login.css'

const Login = () =>  {

   const [formLogin, handleInputChange] = useForm({
        emailLogin: '',
        passwordLogin: ''
   })

   const [formRegister, handleInputChangeRegister] = useForm({
    nameRegister: '',
    emailRegister: '',
    passwordRegister: ''
})

    const show = () => {
        const signupOpen = document.querySelector('.signupForm');
        const loginClosed = document.querySelector('.login');
        signupOpen.classList.toggle('signupFormOpen');
        loginClosed.classList.toggle('loginClosed');
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formLogin);
        console.log(formRegister)
    }

    return (
        <div>
            <Header />
            <div>
                <form className="login" onSubmit={ handleSubmit } >
                    <h2>Inicia sesión</h2>
                    <input 
                        type="email" 
                        className="loginInpt" 
                        placeholder="Email"
                        name="emailLogin"
                        onChange={ handleInputChange }
                    />
                    <input 
                        type="password" 
                        className="loginInpt" 
                        placeholder="Contraseña"
                        name="passwordLogin"
                        onChange={ handleInputChange }
                    />
                    <button className="btnInit">
                        Iniciar sesión
                    </button>
                    <p className="signup">
                        ¿No tienes cuenta?
                        <span onClick={ show } >
                            Registrate aquí
                        </span>
                    </p>
                </form>
                <form className="signupForm" onSubmit={ handleSubmit }>
                    <h2>¡Comencemos!</h2>
                    <input 
                        type="text" 
                        className="loginInpt" 
                        placeholder="Nombre"
                        name="nameRegister"
                        onChange={ handleInputChangeRegister }
                    />
                    <input 
                        type="email" 
                        className="loginInpt" 
                        placeholder="Email"
                        name="emailRegister"
                        onChange={ handleInputChangeRegister }
                    />
                    <input 
                        type="password" 
                        className="loginInpt" 
                        placeholder="Contraseña"
                        name="passwordRegister"
                        onChange={ handleInputChangeRegister }
                    />
                    <button className="btnInit">
                        Registrarme
                    </button>
                    <p className="signup">
                        ¿Ya tienes cuenta?
                        <span onClick={ show } >
                            Inicia sesión aquí
                        </span>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;