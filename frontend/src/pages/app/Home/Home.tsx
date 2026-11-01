import { Button } from '@/components/ui/button'
import heroImage from '@/assets/hero_banner_opera_house.webp'
import { InputSearch } from '@/components/input_search'
import { MagnifyingGlassIcon } from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { CardPlaces } from '@/components/card_places'

import card_bondi from '@/assets/card_bondi.webp'
import card_opera_house from '@/assets/card_opera_house.webp'

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
import{useNavigate} from 'react-router-dom'
import { getFeaturedPlaces } from '@/services/places'
import { ApiError } from '@/errors/ApiError'


const dataCards = [
  {
    id: 1,
    attraction_type: 'Beach',
    rating: 4.8,
    image: card_bondi,
    title: 'Bondi Beach',
    description: 'Sydney, Australia',
  },
  {
    id: 2,
    attraction_type: 'Museum',
    rating: 4.5,
    image: card_opera_house,
    title: 'Opera House',
    description: 'Sydney, Australia',
  },
  {
    id: 3,
    attraction_type: 'Zoo',
    rating: 4.3,
    image: card_bondi,
    title: 'Sydney Harbour Bridge',
    description: 'Sydney, Australia',
  },
  {
    id: 4,
    attraction_type: 'Bridge',
    rating: 4.3,
    image: card_opera_house,
    title: 'Sydney Harbour Bridge',
    description: 'Sydney, Australia',
  },
  {
    id: 5,
    attraction_type: 'Cafe',
    rating: 4.3,
    image: "",
    title: 'Sydney Harbour Bridge',
    description: 'Sydney, Australia',
  },
]

interface Place {
  _id: string
  name: string
  description: string
  category: string
  imageUrl: string
  featured: boolean
  accessibility: {
    wheelchairEntrance: string,
    accessibleToilet: string,
    stepFreeAccess: string,
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

  function handleExplore() {
    navigate('/explore')
  }

  useEffect(()=>{

    async function loadFeaturedPlaces(){
      try {
        const response = await getFeaturedPlaces()
        setPlaces(response)
      
      } catch (error) {
        setError('Unable to load featured places.')
        
      }finally{
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

          <ActionContainer>
            <InputSearch icon={MagnifyingGlassIcon} id="search" placeholder="Search for a place" type="text" value={search} name="search" autoComplete="off" onChange={(event) => setSearch(event.target.value)} />
            <Button onClick={handleExplore}>Explore</Button>
          </ActionContainer>
        </HeroContent>
      </HeroSection>

      <Main>
        <CategoriesSection>
          <CategoriesTitle id="categories">Explore by Categories</CategoriesTitle>
          <ContainerToggleGroupCategories>
            <ToggleGroup variant="outline" type="multiple" aria-labelledby="categories" >
              <ToggleGroupItem  value="attractions">Attractions</ToggleGroupItem>
              <ToggleGroupItem  value="beaches">Beaches</ToggleGroupItem>
              <ToggleGroupItem  value="museums">Museums</ToggleGroupItem>
              <ToggleGroupItem  value="cafes-restaurants">Cafés & Restaurants</ToggleGroupItem>
              <ToggleGroupItem  value="parks">Parks</ToggleGroupItem>
            </ToggleGroup>
          </ContainerToggleGroupCategories>
        </CategoriesSection>

        <PlacesSection>
          <ContainerPlacesTitle>
            <PlacesTitle>Featured places in Sydney</PlacesTitle>
            <PlacesDescription>Based on the accessibility preferences you selected.</PlacesDescription>
          </ContainerPlacesTitle>
        </PlacesSection>

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
      </Main>
      <JourneySection>
        <JourneyTag>Plan an accessible journey</JourneyTag>
        <JourneyTitle>Understand access on the way</JourneyTitle>
        <JourneyDescription>NSW Transport calculates the path. Waymark explains stations, lifts and transfers, not turn-by-turn maps.</JourneyDescription>
        <ContainerJourneyForm>
          <Label htmlFor="journey">From</Label>
          <Input id="journey" placeholder="Current location or starting point" type="text" value={journey} name="journey" autoComplete="off" onChange={(event) => setJourney(event.target.value)} />

          <Label htmlFor="destination">To</Label>
          <Input id="destination" placeholder="Destination" type="text" value={destination} name="destination" autoComplete="off" onChange={(event) => setDestination(event.target.value)} />

          <Button>Plan accessible journey</Button>

        </ContainerJourneyForm>

      </JourneySection>
    </Container>

  )
}