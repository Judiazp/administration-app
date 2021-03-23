import React from 'react';
import Header from '../organisms/header/header'
import './login.css'

const Login = () =>  {

    const show = () => {
        const signupOpen = document.querySelector('.signupForm');
        const loginClosed = document.querySelector('.login');
        signupOpen.classList.toggle('signupFormOpen');
        loginClosed.classList.toggle('loginClosed');
    }

    return (
        <div>
            <Header />
            <div>
                <form className = "login" >
                    <h2>Inicia sesión</h2>
                    <input type = "email" className = "loginInpt" placeholder = "Email"/>
                    <input type = "password" className = "loginInpt" placeholder = "Contraseña"/>
                    <button className = "btnInit">
                        Iniciar sesión
                    </button>
                    <p className = "signup">
                        ¿No tienes cuenta?
                        <a href="#" onClick = { show } >
                            Registrate aquí
                        </a>
                    </p>
                </form>
                <form className = "signupForm">
                    <h2>¡Comencemos!</h2>
                    <input type = "text" className = "loginInpt" placeholder = "Nombre"/>
                    <input type = "email" className = "loginInpt" placeholder = "Email"/>
                    <input type = "password" className = "loginInpt" placeholder = "Contraseña"/>
                    <button className = "btnInit">
                        Registrarme
                    </button>
                    <p className = "signup">
                        ¿Ya tienes cuenta?
                        <a href="#" onClick = { show } >
                            Inicia sesión aquí
                        </a>
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login;