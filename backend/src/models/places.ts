import mongoose from 'mongoose'

const placesSchema = new mongoose.Schema({
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
        wheelchairEntrance: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        accessibleToilet: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        stepFreeAccess: {
            type: String,
            enum: ['yes', 'no', 'unknown'],
            default: 'unknown',
        },
        accessibilitySource: {
            type: String,
            default: 'unknown',
        },

        accessibilityVerified: {
            type: Boolean,
            default: false,
        },
    },
})

export const Place = mongoose.model('Place', placesSchema)