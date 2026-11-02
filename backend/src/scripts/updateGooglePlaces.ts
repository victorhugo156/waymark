import mongoose from 'mongoose'
import { Place } from '../models/places'
import { getGooglePlaceDetails } from '../services/googlePlaces'

async function updateGooglePlaces() {
  try {
    // 1. Connect to MongoDB
    const MONGO_URI = process.env.MONGO_URI

    if (!MONGO_URI) {
      throw new Error('MONGO_URI is missing')
    }

    await mongoose.connect(MONGO_URI)
    console.log('Connected to MongoDB')

    // 2. Find Sydney Opera House
    const place = await Place.findOne({
      name: 'Sydney Opera House'
    })

    if (!place) {
      throw new Error('Sydney Opera House not found in MongoDB')
    }

    // 3. Check whether the Google Place ID exists
    if (!place.googlePlaceId) {
      throw new Error('Google Place ID is missing')
    }

    console.log('MongoDB place:', place.name)
    console.log('Saved Google Place ID:', place.googlePlaceId)

    // 4. Request accessibility information from Google
    const googleDetails = await getGooglePlaceDetails(
      place.googlePlaceId
    )

    // 5. Display the information
    console.log('Google place:', googleDetails.name)
    console.log('Google accessibility:', googleDetails.accessibility)

  } catch (error) {
    console.error('Error:', error)
  } finally {
    // 6. Disconnect from MongoDB
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

void updateGooglePlaces()