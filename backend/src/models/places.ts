import mongoose from 'mongoose'

const placesSchema = new mongoose.Schema({
    googlePlaceId: { type: String, default: null,},
    name: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    imageUrl: { type: String, default: '',},
    images: { type: [String], default: [],},
    category: { type: String, required: true },
    address: { type: String, required: true },
    featured: { type: Boolean, default: false },
    coordinates: {
        latitude: { type: Number, required: true, min: -90, max: 90, },
        longitude: { type: Number, required: true, min: -180, max: 180, },
    },
    accessibility: {
        wheelchairAccessibleEntrance: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        wheelchairAccessibleParking: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        wheelchairAccessibleSeating: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        wheelchairAccessibleRestroom: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        accessibilitySource: {
            type: String,
            enum: ['google_places', 'community', 'manual', 'unknown'],
            default: 'unknown',
        },

        accessibilityVerified: {
            type: Boolean,
            default: false,
        },
    },
})

export const Place = mongoose.model('Place', placesSchema)