import { getAccessToken } from "@/utils/token";
import { ApiError } from "@/errors/ApiError";

interface JourneyRequest {
    origin: string
    destination: string
}

interface JourneyResponse{
    journey:Journey[]
}

interface JourneyLeg {
    from: string
    to: string
    mode: string
    line?: string
    destinationWheelchairAccess: AccessibilityStatus
    originWheelchairAccess: AccessibilityStatus
    wheelchairAccess: AccessibilityStatus
    lowFloorVehicle: AccessibilityStatus
    arrivalTime: string
    departureTime: string
    durationMinutes: number | null
}

type AccessibilityStatus = 'yes' | 'no' | 'unknown'

interface Journey {
    id: string
    accessibilityStatus: AccessibilityStatus
    totalDurationMinutes: number | null
    interchanges: number
    legs: JourneyLeg[]
}


export const BASE_URL = import.meta.env.VITE_API_BASE_URL;
export async function getJourneys(data: JourneyRequest): Promise<JourneyResponse> {

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

    if (!response.ok) {
        throw new ApiError(result.message || 'Request failed', response.status)
    }

    return result
}