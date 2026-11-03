import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import card_bondi from '@/assets/card_bondi.webp'
import card_opera_house from '@/assets/card_opera_house.webp'
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import {
    Container,
    PlacePhotos,
    CoverPhoto,
    PhotoRow,
    PreviewPhoto,
    TitlePlace,
    DescriptionPlace,
    AccessibilitySection,
    Tag,
    Map,
    AccessibilityPlaceDescriptionMobile,
    AccessibilityPlaceDescription,
    AccessibilityMap,
    AccessibilityInfo,
    HeaderAccessibilityInfo,
    TitleAccessibilityInfo,
    AccessibilityInfoContentMobility,
    AccessibilityInfoContentItem,
    AccessibilityListTitle,
    AccessibilityInfoContentPhysicalAccess,
    ContainerCommunityReviews,
    TitleCommunityReviews,
    ContainerCommunityReviewsItems,
    CommunityReviewItem,
    CommunityReviewItemTitle,
    CommunityReviewItemText,
    SpinnerContainer

} from './styles'
import Spinner from '@/components/spinner'

import { VerifiedButton } from "@/components/verified_button";
import { CardIssues } from "@/components/card_issues";
import { getPlaceById } from "@/services/places";


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

export function PlaceDetails() {

    const { placeId } = useParams();
    const [place, setPlace] = useState<any>(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {

        async function loadPlace(){
            setIsLoading(true)

            try {

                console.log(placeId)

                if(!placeId){
                    return console.log("invalida place ID")
                }
                const response = await getPlaceById(placeId)
                console.log(response)
                setPlace(response)
              
              } catch (error) {
                setError('Unable to load featured places.')
                
              }finally{
                setIsLoading(false)
              }

        }

        void loadPlace()

    }, [placeId])

    {
        if (!place) {
            return (
                <div>
                    <h1>Place not found</h1>
                </div>
            )
        } else {
            return (
                <Container>
                    <PlacePhotos>
                        <CoverPhoto src={place.image} alt={place.title} />
                        <PhotoRow>
                            <PreviewPhoto src={place.image} alt="" />
                            <Button variant="ink" className="h-auto min-h-0 min-w-0 flex-1 self-stretch rounded-2xl">18 community photos</Button>
                        </PhotoRow>
                    </PlacePhotos>

                    <TitlePlace>{place.title}</TitlePlace>
                    <DescriptionPlace>{place.description}</DescriptionPlace>
                    <Button>Plan accessible journey</Button>
                    <AccessibilitySection>
                        <AccessibilityPlaceDescriptionMobile>
                            <AccessibilityPlaceDescription>
                                Australia's most photographed landmark, with a dedicated access program: step-free entry from Macquarie Street, lifts to performance levels, and accessible toilets on every public floor. Tours can be booked with access notes in advance.
                            </AccessibilityPlaceDescription>

                            <AccessibilityMap>
                                <Tag>Location</Tag>
                                <Map>
                                    <iframe src="https://google.com"
                                        width="600"
                                        height="450"
                                        loading="lazy"
                                    />
                                </Map>
                            </AccessibilityMap>

                        </AccessibilityPlaceDescriptionMobile>


                        <AccessibilityInfo>
                            <HeaderAccessibilityInfo>
                                <TitleAccessibilityInfo>Access summary</TitleAccessibilityInfo>
                                <VerifiedButton>Verified</VerifiedButton>
                            </HeaderAccessibilityInfo>

                            <AccessibilityListTitle>Mobility</AccessibilityListTitle>
                            <AccessibilityInfoContentMobility>
                                <AccessibilityInfoContentItem>✓ Accessible entrance</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>✓ Accessible restroom</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>✓ Accessible parking</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>✓ Accessible seating</AccessibilityInfoContentItem>
                            </AccessibilityInfoContentMobility>


                            <AccessibilityListTitle>Additional physical access</AccessibilityListTitle>
                            <AccessibilityInfoContentPhysicalAccess>
                                <AccessibilityInfoContentItem>✓ Lift / elevator</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>⚠ Stairs present</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>? Ramp information unavailable</AccessibilityInfoContentItem>
                            </AccessibilityInfoContentPhysicalAccess>

                            <Button variant="outline-primary">Update access info</Button>
                        </AccessibilityInfo>
                    </AccessibilitySection>

                    <CardIssues title="Wynyard — lift reported slow today" text="Lift is operating, but additional waiting time may be required. This may affect the step-free route." />

                    <ContainerCommunityReviews>
                        <TitleCommunityReviews>Community reviews</TitleCommunityReviews>
                        <ContainerCommunityReviewsItems>
                            <CommunityReviewItem>
                                <CommunityReviewItemTitle>Wynyard — lift reported slow today</CommunityReviewItemTitle>
                                <CommunityReviewItemText>Lift is operating, but additional waiting time may be required. This may affect the step-free route.</CommunityReviewItemText>
                                
                            </CommunityReviewItem>

                            <Separator />

                            <CommunityReviewItem>
                                <CommunityReviewItemTitle>Wynyard — lift reported slow today</CommunityReviewItemTitle>
                                <CommunityReviewItemText>Lift is operating, but additional waiting time may be required. This may affect the step-free route.</CommunityReviewItemText>
                            </CommunityReviewItem>
                        </ContainerCommunityReviewsItems>
                    </ContainerCommunityReviews>
                    {isLoading && <SpinnerContainer><Spinner label="Signin you up..." /></SpinnerContainer>}
                </Container>
            )
        }
    }

}