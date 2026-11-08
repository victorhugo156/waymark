import { getAccessToken } from "@/utils/token";
import { ApiError } from "@/errors/ApiError";

interface JourneyRequest {
    origin: string
    destination: string
  }


  export const BASE_URL = "http://localhost:8000";
  export async function getJourneys(data: JourneyRequest) {

    const token = getAccessToken()

    if (!token) {
        throw new Error('No access token available')
    }

    const response = await fetch(`${BASE_URL}/journey`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data),
      })

      const result = await response.json();

      if(!response.ok){
        throw new ApiError(result.message || 'Request failed', response.status)
      }
  
      return result
  }