import { searchGooglePlace } from "../services/googlePlaces";

async function testingPlaces(){
    try {
        const place = await searchGooglePlace("Sydney Opera House, Sydney, Australia")

        console.log("Google Place ID:", place.googlePlaceId)
        console.log("Place name:", place.name)
        console.log("Entrance:", place.accessibility.wheelchairAccessibleEntrance)
    } catch (error) {
        console.error('Google Places test failed:', error)
        
    }
}


void testingPlaces()