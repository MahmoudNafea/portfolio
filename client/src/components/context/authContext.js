import { createContext } from 'react';

const AuthContext = createContext({
    isLoginIn: false,
    login: () => { },
    logout: () => { }
})

export default AuthContext;