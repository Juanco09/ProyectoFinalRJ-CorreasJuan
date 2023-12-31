import React, { useContext, useState } from 'react'
import './LoginScreen.css'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    const { login, googleLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>Log In</h2>
                <hr />
                <form onSubmit={handleSubmit}>
                    <input
                        value={values.email}
                        type={'text'}
                        onChange={handleInputChange}
                        className='form-control my-2'
                        placeholder='correo electrónico'
                        name='email'
                    />
                    <input
                        value={values.pass}
                        type={'password'}
                        onChange={handleInputChange}
                        className='form-control my-2'
                        placeholder='contraseña'
                        name='password'
                    />
                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                    <Link to="/register">Eres nuevo? Crea tu usuario</Link>
                </form>
                <button className='btn btn-outline-primary' onClick={googleLogin}>Ingresar con Google</button>

            </div>
        </div>
    )
}
