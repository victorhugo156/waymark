import { createContext, useEffect, useState, type ReactNode } from "react";
import { refreshToken, signin } from "@/services/auth";
import { setAccessToken, deleteAccessToken } from "@/utils/token";


interface AuthContextData {
    user: User | null
    isAuthenticated: boolean
    isAuthLoading: boolean
    ContextSignin: (data: SigninData) => Promise<void>
}

interface SigninData {
    email: string
    password: string
}

interface User {
    _id: string
    username: string
    email: string
}

interface AuthProvider {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthProvider) {

    const [user, setUser] = useState<User | null>(null)
    const [isAuthLoading, setIsAuthLoading] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    async function ContextSignin(data: SigninData) {

        const response = await signin(data)

        setAccessToken(response.token)
        setIsAuthenticated(true)
    }


    useEffect(() => {
        async function restoreSession() {
            try {
                const response = await refreshToken()

                setAccessToken(response.token)
                setIsAuthenticated(true)
            } catch (error) {
                deleteAccessToken()
                setIsAuthenticated(false)
            } finally {
                setIsAuthLoading(false)
            }
        }

        void restoreSession()
    }, [])

    return (
        <AuthContext.Provider value={{ user, isAuthLoading, isAuthenticated, ContextSignin }}>
            {children}
        </AuthContext.Provider>
    )
}