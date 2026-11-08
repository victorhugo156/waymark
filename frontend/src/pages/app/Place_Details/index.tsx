import { useParams, useNavigate, createSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
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

interface Place {
    _id: string
    name: string
    description: string
    category: string
    imageUrl: string
    images: string[]
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

export function PlaceDetails() {

    const { placeId } = useParams();
    const navigate = useNavigate()


    const [place, setPlace] = useState<Place | null>(null);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)


    function handlePlanJourney() {
        if (!placeId) return

        navigate({
            pathname: "/journey",
            search: `?${createSearchParams({
                destination: placeId,
            })}`,
        });

    }

    useEffect(() => {

        async function loadPlace() {
            setIsLoading(true)

            try {

                console.log(placeId)

                if (!placeId) {
                    return console.log("invalida place ID")
                }
                const response = await getPlaceById(placeId)
                console.log(response)
                setPlace(response)

            } catch (error) {
                setError('Unable to load featured places.')

            } finally {
                setIsLoading(false)
                console.log(place)
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
                        <CoverPhoto src={place.imageUrl} alt={place.name} />
                        <PhotoRow>
                            <PreviewPhoto src={place.imageUrl} alt="" />
                            {
                                place.images.length > 0 ? (
                                    <Button variant="ink" className="h-auto min-h-0 min-w-0 flex-1 self-stretch rounded-2xl">{`${place.images.length} more images`}</Button>
                                ) : (
                                    <Button variant="ink" className="h-auto min-h-0 min-w-0 flex-1 self-stretch rounded-2xl">No images available</Button>
                                )
                            }

                        </PhotoRow>
                    </PlacePhotos>

                    <TitlePlace>{place.name}</TitlePlace>
                    <DescriptionPlace>{place.description}</DescriptionPlace>
                    <Button onClick={handlePlanJourney}>Plan accessible journey</Button>
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
                                {place.accessibility.accessibilityVerified ? (
                                    <span>Accessibility information verified</span>
                                ) : (
                                    <span>Accessibility information not verified</span>
                                )}
                            </HeaderAccessibilityInfo>

                            <AccessibilityListTitle>Mobility</AccessibilityListTitle>
                            <AccessibilityInfoContentMobility>
                                <AccessibilityInfoContentItem>
                                    {place.accessibility.wheelchairAccessibleEntrance === 'yes'
                                        ? '✓ Accessible entrance'
                                        : place.accessibility.wheelchairAccessibleEntrance === 'no'
                                            ? '✕ No accessible entrance reported'
                                            : '? Entrance accessibility not confirmed'
                                    }
                                </AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>
                                    {
                                        place.accessibility.wheelchairAccessibleRestroom === "yes"
                                            ? '✓ Accessible restroom'
                                            : place.accessibility.wheelchairAccessibleRestroom === 'no'
                                                ? '✕ No accessible restroom reported'
                                                : '? Restroom accessibility not confirmed'
                                    }

                                </AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>
                                    {
                                        place.accessibility.wheelchairAccessibleParking === "yes"
                                            ? '✓ Accessible parking'
                                            : place.accessibility.wheelchairAccessibleParking === 'no'
                                                ? '✕ No accessible parking reported'
                                                : '? Parking accessibility not confirmed'
                                    }
                                </AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>
                                    {
                                        place.accessibility.wheelchairAccessibleSeating === "yes"
                                            ? '✓ Accessible seating'
                                            : place.accessibility.wheelchairAccessibleSeating === 'no'
                                                ? '✕ No accessible seating reported'
                                                : '? Seating accessibility not confirmed'
                                    }
                                </AccessibilityInfoContentItem>
                            </AccessibilityInfoContentMobility>


                            {/* <AccessibilityListTitle>Additional physical access</AccessibilityListTitle>
                            <AccessibilityInfoContentPhysicalAccess>
                                <AccessibilityInfoContentItem>✓ Lift / elevator</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>⚠ Stairs present</AccessibilityInfoContentItem>
                                <AccessibilityInfoContentItem>? Ramp information unavailable</AccessibilityInfoContentItem>
                            </AccessibilityInfoContentPhysicalAccess> */}

                            {/* <Button variant="outline-primary">Update access info</Button> */}
                        </AccessibilityInfo>
                    </AccessibilitySection>

                    {/* <CardIssues title="Wynyard — lift reported slow today" text="Lift is operating, but additional waiting time may be required. This may affect the step-free route." /> */}

                    {/* <ContainerCommunityReviews>
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
                    </ContainerCommunityReviews> */}

                    {isLoading && <SpinnerContainer><Spinner label="Signin you up..." /></SpinnerContainer>}
                </Container>
            )
        }
    }

}