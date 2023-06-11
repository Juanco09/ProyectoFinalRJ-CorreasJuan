import React, { useContext, useState } from 'react'
import './RegisterScreen.css'
import { LoginContext } from '../../context/LoginContext'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
    const { register } = useContext(LoginContext)

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
        register(values)
    }

    return (
        <div className='login-screen'>
            <div className='login'>
                <h2>Registrarse</h2>
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
                    <button className='btn btn-primary' type='submit'>Crear usuario</button>
                    <Link to="/login">Ya te registraste? Ingresa aquí</Link>
                </form>
            </div>
        </div>
    )
}
