import { useContext } from "react"
import type {SignUpFormSchema  } from "../pages/auth/signup"
import type {SigninFormSchema  } from "../pages/auth/login"
import { ApiError } from "../errors/ApiError"
import { AuthContext } from '@/contexts/AuthContext'


export const BASE_URL = "http://localhost:8000";



export const signin = async (data: SigninFormSchema )=> {

  const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: "POST",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })

  const result = await response.json();

    if(!response.ok){
      throw new ApiError(result.message || 'Signin failed', response.status)
    }

    return result
}

export const refreshToken = async ()=> {

  const response = await fetch(`${BASE_URL}/auth/refresh`, {
      method: "POST",
      credentials: 'include',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

  const result = await response.json();

    if(!response.ok){
      throw new ApiError(result.message || 'Session refresh failed', response.status)
    }

    return result
}

export const signup = async (data: SignUpFormSchema )=> {

    const response = await fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

    const result = await response.json();

      if(!response.ok){
        throw new ApiError(result.message || 'Signup failed', response.status)
      }

      return result

}