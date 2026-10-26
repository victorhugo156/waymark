import { createContext, useState, type ReactNode } from "react";
import { signin } from "@/services/auth";
import { setAccessToken } from "@/utils/token";


interface AuthContextData{
    user: User | null
    isAuthenticated: boolean
    ContextSignin: (data: SigninData )=>Promise<void>
}

interface SigninData {
    email: string
    password: string
  }

interface User{
    _id: string
    username: string
    email: string
}

interface AuthProvider{
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider ({children}: AuthProvider){

    const[user, setUser] = useState<User | null>(null)
    const[isAuthenticated, setIsAuthenticated] = useState(false)

    async function ContextSignin(data: SigninData) {
        const response = await signin(data)

        setAccessToken(response.token)
        setIsAuthenticated(true)
    }

    return(
        <AuthContext.Provider value={{user, isAuthenticated, ContextSignin}}>
            {children}
        </AuthContext.Provider>
    )
}