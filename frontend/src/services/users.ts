import { ApiError } from "../errors/ApiError"
import { getAccessToken } from "@/utils/token";


const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getCurrentUser = async () => {

    const token = getAccessToken()

    if (!token) {
        throw new Error('No access token available')
    }

    const response = await fetch(`${BASE_URL}/users/me`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const result = await response.json()

    if (!response.ok) {
        throw new ApiError(
            result.message || 'Failed to retrieve user',
            response.status
        )
    }

    return result
}