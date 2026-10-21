import type {SignUpFormSchema  } from "../pages/auth/signup"


export const BASE_URL = "http://localhost:8000";

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
        throw new Error(result.message || 'Signup failed')
      }

      return result

}