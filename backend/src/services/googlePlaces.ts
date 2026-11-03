

interface GoogleAccessibilityOptions {
    wheelchairAccessibleEntrance?: boolean
    wheelchairAccessibleParking?: boolean
    wheelchairAccessibleRestroom?: boolean
    wheelchairAccessibleSeating?: boolean
}

interface GooglePlaceSearchResponse {
    places?: {
      id: string
      displayName?: {
        text: string
      }
      formattedAddress?: string
    }[]
  }

  interface GooglePlaceDetailsResponse {
    id: string
    displayName?: {
      text: string
    }
    accessibilityOptions?: GoogleAccessibilityOptions,
    formattedAddress?: string
  }



export async function searchGooglePlace(placeName: string) {

    const GOOGLE_PLACES_URL = 'https://places.googleapis.com/v1/places:searchText'
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY

    if (!API_KEY) {
        throw new Error('GOOGLE_PLACES_API_KEY is missing')
    }

    const response = await fetch(GOOGLE_PLACES_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
            'X-Goog-FieldMask': 'places.id,places.displayName,places.formattedAddress'
        },
        body: JSON.stringify({
            textQuery: placeName
        })
    })

    if (!response.ok) {
        const errorData = await response.text()
      
        throw new Error(
          `Google Places API error ${response.status}: ${errorData}`
        )
      }

    const data = (await response.json()) as GooglePlaceSearchResponse

    const placeId = data.places?.[0]?.id

    if(!placeId){
        throw new Error(`No Google Place ID found for ${placeName}`)
    }

    const details = await getGooglePlaceDetails(placeId) 

    return details

}


export async function getGooglePlaceDetails(placeId: string){
    const GOOGLE_PLACES_URL = `https://places.googleapis.com/v1/places/${placeId}`
    const API_KEY = process.env.GOOGLE_PLACES_API_KEY

    if (!API_KEY) {
        throw new Error('GOOGLE_PLACES_API_KEY is missing')
    }

    const response = await fetch(GOOGLE_PLACES_URL, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Goog-Api-Key': API_KEY,
            'X-Goog-FieldMask': 'id,displayName,formattedAddress,accessibilityOptions'
        },
    })

    if (!response.ok) {
        throw new Error(`Google Places API error: ${response.status}`)
    }

    const data = (await response.json()) as GooglePlaceDetailsResponse

    return {
        googlePlaceId: data.id,
        name: data.displayName?.text,
        address: data.formattedAddress,
        accessibility: mapAccessibility(data.accessibilityOptions),
      }

}


function mapAccessibility(accessibilityOptions?: GoogleAccessibilityOptions) {

    return {
        wheelchairAccessibleEntrance: convertAccessibility(accessibilityOptions?.wheelchairAccessibleEntrance),
        wheelchairAccessibleParking: convertAccessibility(accessibilityOptions?.wheelchairAccessibleParking),
        wheelchairAccessibleRestroom: convertAccessibility(accessibilityOptions?.wheelchairAccessibleRestroom),
        wheelchairAccessibleSeating: convertAccessibility(accessibilityOptions?.wheelchairAccessibleSeating),
        accessibilitySource: 'google_places',
        accessibilityVerified: false,
    }
}

function convertAccessibility(value: boolean | undefined) {
    if (value === true) return 'yes'
    if (value === false) return 'no'
    return 'unknown'
}