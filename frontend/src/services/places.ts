import { ApiError } from "../errors/ApiError"

const BASE_URL = "http://localhost:8000";

export async function getFeaturedPlaces(){
    const response = await fetch(`${BASE_URL}/places?featured=true`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })

      const result = await response.json();

      if(!response.ok){
        throw new ApiError(result.message || 'Failed to fetch places', response.status)
      }
  
      return result
}