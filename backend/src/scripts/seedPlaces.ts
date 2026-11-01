
import mongoose from 'mongoose';
import { Place } from '../models/places';

// Generates image paths from your existing filenames.
function createImages(
  folder: string,
  prefix: string,
  count: number
): string[] {
  return Array.from(
    { length: count },
    (_, index) => `/${folder}/${prefix}_${index + 1}.jpg`
  );
}

const initialPlaces = [
  {
    name: 'Sydney Opera House',
    description: 'An iconic performing arts venue overlooking Sydney Harbour.',
    category: 'attraction',
    address: 'Bennelong Point, Sydney NSW 2000',
    coordinates: {
      latitude: -33.8568,
      longitude: 151.2153,
    },
    featured: true,
    images: createImages('opera_house', 'opera-house', 5),
  },
  {
    name: 'Bondi Beach',
    description: 'A famous Sydney beach known for its golden sand and coastal scenery.',
    category: 'beach',
    address: 'Queen Elizabeth Drive, Bondi Beach NSW 2026',
    coordinates: {
      latitude: -33.8915,
      longitude: 151.2767,
    },
    featured: true,
    images: createImages('bondi_beach', 'bondi-beach', 5),
  },
  {
    name: 'Taronga Zoo',
    description: 'A wildlife destination overlooking Sydney Harbour.',
    category: 'zoo',
    address: 'Bradleys Head Road, Mosman NSW 2088',
    coordinates: {
      latitude: -33.8430,
      longitude: 151.2410,
    },
    featured: true,
    images: createImages('taronga_zoo', 'taronga-zoo', 5),
  },
  {
    name: 'Royal Botanic Garden Sydney',
    description: 'A botanical garden with native plants, walking paths and harbour views.',
    category: 'park',
    address: 'Mrs Macquaries Road, Sydney NSW 2000',
    coordinates: {
      latitude: -33.8642,
      longitude: 151.2166,
    },
    featured: true,
    images: createImages('botanic_gardens', 'botanic-gardens', 4),
  },
  {
    name: 'Sydney Harbour Bridge',
    description: 'A historic steel arch bridge connecting Sydney and the North Shore.',
    category: 'landmark',
    address: 'Bradfield Highway, Sydney NSW 2000',
    coordinates: {
      latitude: -33.8523,
      longitude: 151.2108,
    },
    featured: false,
    images: createImages('harbour_bridge', 'harbour-bridge', 7),
  },
  {
    name: 'Darling Harbour',
    description: 'A waterfront destination with museums, dining and entertainment.',
    category: 'attraction',
    address: 'Darling Harbour, Sydney NSW 2000',
    coordinates: {
      latitude: -33.8749,
      longitude: 151.2009,
    },
    featured: false,
    images: createImages('darling_harbour', 'darling-harbour', 7),
  },
  {
    name: 'Australian Museum',
    description: 'A museum showcasing natural history, science and Australian culture.',
    category: 'museum',
    address: '1 William Street, Sydney NSW 2010',
    coordinates: {
      latitude: -33.8743,
      longitude: 151.2132,
    },
    featured: false,
    // The fifth file is .fif, so use the four JPG files for now.
    images: createImages('australian_museum', 'australian-museum', 4),
  },
  {
    name: 'Barangaroo Reserve',
    description: 'A waterfront park with native gardens and harbour views.',
    category: 'park',
    address: 'Hickson Road, Barangaroo NSW 2000',
    coordinates: {
      latitude: -33.8605,
      longitude: 151.2014,
    },
    featured: false,
    images: createImages('barangaroo', 'barangaroo', 4),
  },
];

async function seedPlaces() {
  try {
    const mongoUri = process.env.MONGO_URI;

    if (!mongoUri) {
      throw new Error('MONGO_URI is missing');
    }

    await mongoose.connect(mongoUri);

    const operations = initialPlaces.map((place) => {
      const { images, ...placeDetails } = place;

      return {
        updateOne: {
          filter: { name: place.name },

          update: {
            // Update images even for previously seeded places.
            $set: {
              imageUrl: images[0],
              images,
            },

            // Initialize other fields only for new places.
            $setOnInsert: {
              ...placeDetails,
              accessibility: {
                wheelchairEntrance: 'unknown',
                accessibleToilet: 'unknown',
                stepFreeAccess: 'unknown',
              },
              accessibilitySource: 'unknown',
              accessibilityVerified: false,
            },
          },

          upsert: true,
        },
      };
    });

    const result = await Place.bulkWrite(operations);

    console.log(`New places: ${result.upsertedCount}`);
    console.log(`Existing places: ${result.matchedCount}`);
    console.log('Places seeded successfully!');
  } catch (error) {
    console.error('Error seeding places:', error);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

void seedPlaces();
