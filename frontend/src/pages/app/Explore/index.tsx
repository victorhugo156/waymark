import { InputSearch } from "@/components/input_search";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CardPlaces } from "@/components/card_places";
import card_bondi from '@/assets/card_bondi.webp'
import card_opera_house from '@/assets/card_opera_house.webp'
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
import { useState } from "react";



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

export function Explore() {

  const [search, setSearch] = useState("");
  return (
    <Main>
      <ExploreContainer>
        <Title>Explore Sydney</Title>
        <ActionContainer>
          <InputSearch icon={MagnifyingGlassIcon} id="search" placeholder="Search for a place" type="text" value={search} name="search" autoComplete="off" onChange={(event) => setSearch(event.target.value)} />
          <Button>Explore</Button>
        </ActionContainer>
      </ExploreContainer>

      <SectionFilters>
        <FiltersTitle>Filters</FiltersTitle>
        <FiltersContainer>
          <ToggleGroup variant="outline" type="multiple" aria-labelledby="access-preferences" >
            <ToggleGroupItem value="transport">Wheelchair-accessible transport</ToggleGroupItem>
            <ToggleGroupItem value="stairs">Avoid stairs</ToggleGroupItem>
            <ToggleGroupItem value="hearing">Hearing information</ToggleGroupItem>
            <ToggleGroupItem value="quiet">Quiet environments</ToggleGroupItem>
          </ToggleGroup>
        </FiltersContainer>

<Cards>
{dataCards.map((card) => (
          <CardPlaces
            key={card.id}
            image={card.image}
            attraction_type={card.attraction_type}
            rating={card.rating}
            title={card.title}
            description={card.description}
          />
        ))}

</Cards>


      </SectionFilters>
    </Main>
  );
}