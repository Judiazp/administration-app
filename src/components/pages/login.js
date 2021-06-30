import React, { useState } from 'react';
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

    const [modal, setModal] = useState(true);

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

    const handleClick = () => {
        setModal(false)
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

            {
                modal && (
                    <div className="message-advertencia" align="center">
                        <p>
                            Es 
                            posible que la interfaz tenga errores de diseño, esto se debe a que los esfuerzos
                            de desarrollo estan enfocados inicialmente en la funcionalidad de la plataforma. Posteriormente
                            la interfaz será ampliamente mejorada para una mejor experiencia. Si desea ver y probar el dashboard
                            de la app agregue a la url la siguiente dirección: /board
                        </p>
                        <button className="btnInit" onClick={ handleClick }>
                            continuar
                        </button>
                    </div>
                )
            }

            
        </div>
    )
}

export default Login;