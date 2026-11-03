import { ApiError } from "../errors/ApiError"
import { getAccessToken } from "@/utils/token";


export const BASE_URL = "http://localhost:8000";

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