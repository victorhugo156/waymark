import mongoose from 'mongoose'
import { Place } from '../models/places'
import { getGooglePlaceDetails } from '../services/googlePlaces'
import { searchGooglePlace } from '../services/googlePlaces'


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
    //const place = await Place.findOne({ name: 'Sydney Opera House' })
    const places = await Place.find({
      googlePlaceId: null
    })

    console.log('Places missing Google IDs:', places.length)

    if (places.length === 0) {
      console.log('All places already have Google Place IDs')
    }

    for (const place of places) {
      const googlePlace = await searchGooglePlace(
        `${place.name}, Sydney, Australia`
      )

      console.log('------------------------')
      console.log('MongoDB name:', place.name)
      console.log('MongoDB address:', place.address)
      console.log('Google name:', googlePlace.name)
      console.log('Google address:', googlePlace.address)
      console.log('Google Place ID:', googlePlace.googlePlaceId)

      // Save the Google Place ID
      if (!googlePlace.googlePlaceId) {
        console.log(`Skipping ${place.name}: Google Place ID missing`)
        continue
      }

      place.googlePlaceId = googlePlace.googlePlaceId

      await place.save()

      console.log(`Saved Google Place ID for ${place.name}`)
    }

  } catch (error) {
    console.error('Error:', error)
  } finally {
    // 6. Disconnect from MongoDB
    await mongoose.disconnect()
    console.log('Disconnected from MongoDB')
  }
}

void updateGooglePlaces()