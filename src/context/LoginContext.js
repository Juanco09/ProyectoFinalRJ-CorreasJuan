import { createContext, useState } from "react";

export const LoginContext = createContext()

const MOCK_USERS = [
    {
        id: 'Juan',
        email: 'juan@usuario.com',
        pass: '1234'
    },
]

export const LoginProvider = ({children}) => {
    const [user, setUser] = useState({
        id: null,
        email: null,
        logged: false
    })

    const tryLogin = (values) => {
        const match = MOCK_USERS.find((user) => user.email === values.email)

        if (match && match.pass === values.pass) {
            setUser({
                logged: true,
                email: match.email,
                id: match.id
            })

        }
    }

    const logout = () => {
        setUser({
            email: null,
            logged: false
        })
    }

    return (
        <LoginContext.Provider value={{
            user,
            tryLogin,
            logout
        }}>
            {children}
        </LoginContext.Provider>
    )

}