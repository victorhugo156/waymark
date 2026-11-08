import { InputSearch } from "@/components/input_search";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CardPlaces } from "@/components/card_places";
import {
  Main,
  Title,
  ExploreContainer,
  ActionContainer,
  SectionFilters,
  FiltersTitle,
  FiltersContainer,
  Cards
} from "./styles";
import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom'
import { getPlaces } from "@/services/places";
import Spinner  from "@/components/spinner";

interface Place {
  _id: string
  name: string
  description: string
  category: string
  imageUrl: string
  accessibility: {
    wheelchairAccessibleEntrance: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleParking: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleRestroom: 'yes' | 'no' | 'unknown'
    wheelchairAccessibleSeating: 'yes' | 'no' | 'unknown'
    accessibilitySource: string
    accessibilityVerified: boolean
  }
}



export function Explore() {

  const [searchParams] = useSearchParams()
  const [search, setSearch] = useState(searchParams.get('search') ?? '');
  const [places, setPlaces] = useState<Place[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const category = searchParams.get('category') ?? ''

  const filteredPlaces = places.filter((place) => {
    const matchesSearch = place.name
      .toLowerCase()
      .includes(search.toLowerCase().trim())
  
    const matchesCategory = !category || place.category === category
  
    return matchesSearch && matchesCategory
  })



  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const places = await getPlaces()
        setPlaces(places)
      } catch (error) {
        setError('Unable to load places.')
      } finally {
        setIsLoading(false)
      }
    }
    loadPlaces()
  }, [])

  return (
    <Main>
      <ExploreContainer>
        <Title>Explore Sydney</Title>
        <ActionContainer  as="form" onSubmit={(event) => event.preventDefault()}>
          <InputSearch icon={MagnifyingGlassIcon} id="search" placeholder="Search for a place" type="text" value={search} name="search" autoComplete="off" onChange={(event) => setSearch(event.target.value)} />
        </ActionContainer>
      </ExploreContainer>

      <SectionFilters>
        {/* <FiltersTitle>Filters</FiltersTitle>
        <FiltersContainer>
          <ToggleGroup variant="outline" type="multiple" aria-labelledby="access-preferences" >
            <ToggleGroupItem value="transport">Wheelchair-accessible transport</ToggleGroupItem>
            <ToggleGroupItem value="stairs">Avoid stairs</ToggleGroupItem>
            <ToggleGroupItem value="hearing">Hearing information</ToggleGroupItem>
            <ToggleGroupItem value="quiet">Quiet environments</ToggleGroupItem>
          </ToggleGroup>
        </FiltersContainer> */}

        {isLoading ? (
          <Spinner />
        ) : error ? (
          <p role="alert">{error}</p>
        ) : filteredPlaces.length === 0 ? (
          <p>No places found. Try another search.</p>
        ) : (
          <Cards>
            {filteredPlaces.map((place) => (
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
      </SectionFilters>
    </Main>
  );
}