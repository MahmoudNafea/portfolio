import { createContext } from 'react';

const AuthContext = createContext({
    isLogin: false,
    login: () => { },
    logout: () => { }
})

export default AuthContext;