import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero_banner_opera_house.webp'
import { InputSearch } from '@/components/input_search'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { CardPlaces } from '@/components/card_places'
import Spinner from "@/components/spinner";

import {
  Container,
  HeroSection,
  Hero,
  HeroImage,
  HeroContent,
  Content,
  HeroEyebrow,
  HeroTitle,
  HeroDescription,
  ActionContainer,
  Main,
  CategoriesSection,
  CategoriesTitle,
  ContainerToggleGroupCategories,
  PlacesSection,
  ContainerPlacesTitle,
  PlacesTitle,
  PlacesDescription,
  Cards,
  JourneySection,
  JourneyTag,
  JourneyTitle,
  JourneyDescription,
  ContainerJourneyForm,
  Label,
} from './styles'
import { Input } from '@/components/inputs/input'
import { useNavigate } from 'react-router-dom'
import { getFeaturedPlaces } from '@/services/places'


interface Place {
  _id: string
  name: string
  description: string
  category: string
  imageUrl: string
  featured: boolean
  accessibility: {
    wheelchairAccessibleEntrance: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleParking: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleRestroom: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleSeating: 'yes' | 'no' | 'unknown'
    accessibilitySource: string
    accessibilityVerified: boolean
  }
}

export function Home() {

  const navigate = useNavigate()
  const [search, setSearch] = useState("")
  const [journey, setJourney] = useState("")
  const [destination, setDestination] = useState("")

  const [places, setPlaces] = useState<Place[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  function handleExplore(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    navigate(`/explore?search=${encodeURIComponent(search.trim())}`)
  }

  function handlePlanJourney(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!journey.trim() || !destination.trim()) {
      return
    }

    const params = new URLSearchParams({
      origin: journey.trim(),
      destination: destination.trim(),
    })

    navigate(`/journey?${params.toString()}`)
  }

  function handleCategoryChange(category: string) {
    if (!category) return

    navigate(`/explore?category=${encodeURIComponent(category)}`)
  }

  useEffect(() => {

    async function loadFeaturedPlaces() {
      try {
        const response = await getFeaturedPlaces()
        setPlaces(response)

      } catch (error) {
        setError('Unable to load featured places.')

      } finally {
        setIsLoading(false)
      }
    }

    void loadFeaturedPlaces()

  }, [])
  return (
    <Container>
      <HeroSection>
        <Hero>
          <HeroImage src={heroImage} alt="Opera House in Sydney" />
        </Hero>
        <HeroContent>
          <Content>
            <HeroEyebrow>Accessible Sydney</HeroEyebrow>
            <HeroTitle>Find the way. Know the access.</HeroTitle>
            <HeroDescription>
              Explore accessible places, then understand the public transport journey to get there.
            </HeroDescription>
          </Content>

          <ActionContainer onSubmit={handleExplore}>
            <InputSearch icon={MagnifyingGlassIcon} id="search" placeholder="Search for a place" type="text" value={search} name="search" autoComplete="off" onChange={(event) => setSearch(event.target.value)} />
            <Button type="submit">Explore</Button>
          </ActionContainer>
        </HeroContent>
      </HeroSection>

      <Main>
        <CategoriesSection>
          <CategoriesTitle id="categories">Explore by Categories</CategoriesTitle>
          <ContainerToggleGroupCategories>
            <ToggleGroup variant="outline" type="single" aria-labelledby="categories" onValueChange={handleCategoryChange}>
              <ToggleGroupItem value="attraction">Attractions</ToggleGroupItem>
              <ToggleGroupItem value="beach">Beaches</ToggleGroupItem>
              <ToggleGroupItem value="museum">Museums</ToggleGroupItem>
              <ToggleGroupItem value="cafes-restaurants">Cafés & Restaurants</ToggleGroupItem>
              <ToggleGroupItem value="park">Parks</ToggleGroupItem>
              <ToggleGroupItem value="zoo">Zoo</ToggleGroupItem>
              <ToggleGroupItem value="landmark">Landmark</ToggleGroupItem>
            </ToggleGroup>
          </ContainerToggleGroupCategories>
        </CategoriesSection>

        <PlacesSection>
          <ContainerPlacesTitle>
            <PlacesTitle>Featured places in Sydney</PlacesTitle>
            <PlacesDescription>Discover popular Sydney destinations and explore their available accessibility information.</PlacesDescription>
          </ContainerPlacesTitle>
        </PlacesSection>
        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p role="alert">{error}</p>
        ) : (
          <Cards>
            {places.map((place) => (
              <CardPlaces
                key={place._id}
                id={place._id}
                image={place.imageUrl}
                attraction_type={place.category}
                title={place.name}
                description={place.description}
                accessibility={place.accessibility}
              />
            ))}
          </Cards>
        )}
      </Main>
      <JourneySection>
        <JourneyTag>Plan an accessible journey</JourneyTag>
        <JourneyTitle>Understand access on the way</JourneyTitle>
        <JourneyDescription>NSW Transport calculates the path. Waymark explains stations, lifts and transfers, not turn-by-turn maps.</JourneyDescription>
        <ContainerJourneyForm onSubmit={handlePlanJourney}>
          <Label htmlFor="journey">From</Label>
          <Input id="journey" placeholder="Current location or starting point" type="text" value={journey} name="journey" autoComplete="off" onChange={(event) => setJourney(event.target.value)} />

          <Label htmlFor="destination">To</Label>
          <Input id="destination" placeholder="Destination" type="text" value={destination} name="destination" autoComplete="off" onChange={(event) => setDestination(event.target.value)} />

          <Button type="submit">Plan accessible journey</Button>

        </ContainerJourneyForm>

      </JourneySection>
    </Container>

  )
}