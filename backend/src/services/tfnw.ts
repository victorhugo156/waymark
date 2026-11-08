import { calculateDurationMinutes } from "../utils/calculateDurationMinutes.";

interface ElementMatch {
  isBest: boolean
}

interface TfNSWLocation {
  id: string
  type: string
}


export async function searchTfNSWLocation(locationName: string) {

  const locationParams = new URLSearchParams({
    outputFormat: 'rapidJSON',
    type_sf: 'any',
    name_sf: locationName,
    coordOutputFormat: 'EPSG:4326',
  })

  const TFNSW_URL = 'https://api.transport.nsw.gov.au/v1/tp/stop_finder'

  const url = `${TFNSW_URL}?${locationParams.toString()}`
  const API_KEY = process.env.TFNSW_API_KEY


  if (!API_KEY) {
    throw new Error('Transport NSW API Key is missing')
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `apikey ${API_KEY}`
    },
  })

  if (!response.ok) {
    const errorData = await response.text()

    throw new Error(
      `TFNSW API error ${response.status}: ${errorData}`
    )
  }

  const data = await response.json()

  const result = data.locations?.find((element: ElementMatch) => element.isBest === true)

  if (result === undefined) {
    throw new Error('No matching TfNSW location found')
  }

  return result
}

export async function getTfNSWJourney(  origin: TfNSWLocation, destination: TfNSWLocation) {
  const params = new URLSearchParams({
    outputFormat: 'rapidJSON',
    coordOutputFormat: 'EPSG:4326',
    type_origin: origin.type,
    name_origin: origin.id,
    type_destination: destination.type,
    name_destination: destination.id,
  })

  const TRIP_PLANNER_URL = 'https://api.transport.nsw.gov.au/v1/tp/trip'

  const url = `${TRIP_PLANNER_URL}?${params.toString()}`
  const API_KEY = process.env.TFNSW_API_KEY

  if (!API_KEY) {
    throw new Error('Transport NSW API Key is missing')
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `apikey ${API_KEY}`
    },
  })

  if (!response.ok) {
    const errorData = await response.text()

    throw new Error(
      `TFNSW API error ${response.status}: ${errorData}`
    )
  }

  const data = await response.json()

  const journeys = data.journeys?.map((journey: any, index: number) => {
    const firstLeg = journey.legs?.[0]
    const lastLeg = journey.legs?.at(-1)

    const journeyDepartureTime = firstLeg?.origin?.departureTimeEstimated ?? firstLeg?.origin?.departureTimePlanned
    const journeyArrivalTime = lastLeg?.destination?.arrivalTimeEstimated ?? lastLeg?.destination?.arrivalTimePlanned
    const totalDurationMinutes = calculateDurationMinutes(journeyDepartureTime, journeyArrivalTime)

    const transportLegs = journey.legs?.filter((leg: any) => {

      const transportClass = leg.transportation?.product?.class

      return transportClass !== 99 && transportClass !== 100 && transportClass !== undefined
    })

    const interchanges = Math.max(0, (transportLegs?.length ?? 0) - 1)

    const hasAccessibilityIssue = journey.legs?.some((leg: any) => {
      return leg.origin?.properties?.WheelchairAccess === 'false' || leg.destination?.properties?.WheelchairAccess === 'false'
    })

    const accessibilityStatus = hasAccessibilityIssue ? 'no' : 'unknown'

    return {
      id: `journey-${index}`,
      accessibilityStatus: accessibilityStatus,
      totalDurationMinutes,
      interchanges,
      legs: journey.legs?.map((leg: any) => {
        const departureTime = leg.origin?.departureTimeEstimated ?? leg.origin?.departureTimePlanned
        const arrivalTime = leg.destination?.arrivalTimeEstimated ?? leg.destination?.arrivalTimePlanned
        const durationMinutes = calculateDurationMinutes(departureTime, arrivalTime)
        const originWheelchairAccess = leg.origin?.properties?.WheelchairAccess === 'true' ? 'yes' : leg.origin?.properties?.WheelchairAccess === 'false' ? 'no' : 'unknown'
        return {
          from: leg.origin?.name,
          to: leg.destination?.name,
          line: leg.transportation?.disassembledName,
          mode: leg.transportation?.product?.name,
          wheelchairAccess: leg.transportation?.properties?.attributes?.includes('PLAN_WHEELCHAIRACCESS') ? 'yes' : 'unknown',
          lowFloorVehicle: leg.transportation?.properties?.attributes?.includes('PLAN_LOWFLOORVEHICLE') ? 'yes' : 'unknown',
          departureTime,
          arrivalTime,
          durationMinutes,
          originWheelchairAccess: originWheelchairAccess,
          destinationWheelchairAccess: leg.destination?.properties?.WheelchairAccess === 'true' ? 'yes' : 'unknown',
        }
      }),
    }
  })

  return journeys


}