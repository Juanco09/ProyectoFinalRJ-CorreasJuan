import React, { useContext, useState } from 'react'
import './LoginScreen.css'
import { LoginContext } from '../../context/LoginContext'

export const LoginScreen = () => {
    const { user, tryLogin } = useContext(LoginContext)

    const [values, setValues] = useState({
        email: '',
        pass: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        tryLogin(values)
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
                        name='pass'
                    />
                    <button className='btn btn-primary' type='submit'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}
