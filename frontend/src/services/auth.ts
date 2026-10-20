import type {SignUpFormSchema  } from "../pages/auth/signup"


export const BASE_URL = "http://localhost:8000";

export const signup = async (data: SignUpFormSchema )=> {

    return fetch(`${BASE_URL}/auth/signup`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }else{
            return console.log("Error")
          }
        })
}