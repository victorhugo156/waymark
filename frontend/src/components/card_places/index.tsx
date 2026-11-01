import { WheelchairIcon, CrossIcon, QuestionIcon } from '@phosphor-icons/react'
import { FeatureButton } from '@/components/feature_button'
import { VerifiedButton } from '@/components/verified_button'
import vertical_logo from '@/assets/vertical_logo.webp'
import { Link } from 'react-router-dom'

import {
    Container,
    ContainerImage,
    Image,
    NoImage,
    ContainerCardDescription,
    Tag,
    Rating,
    Title,
    TagText,
    Location,
    CardInfo,
    ButtonsContainer,
} from './styles'


interface CardPlacesProps {
    id: string;
    attraction_type: string;
    rating?: number;
    image: string;
    title: string;
    description: string;
    accessibility: {
        wheelchairEntrance: string,
        accessibleToilet: string,
        stepFreeAccess: string,
        accessibilityVerified: boolean
    }
}

export function CardPlaces({ id, image, title, description, attraction_type, rating, accessibility }: CardPlacesProps) {
    const hasImage = Boolean(image)

    return (
        <Container>
            <Link to={`/places/${id}`}>

                <ContainerImage>
                    <Image
                        src={hasImage ? image : vertical_logo}
                        alt={title}
                        $hasImage={hasImage}
                    />
                    <NoImage $hasImage={hasImage}>
                        {hasImage ? "" : 'No image available'}
                    </NoImage>

                </ContainerImage>

                <ContainerCardDescription>
                    <Tag>
                        <TagText>{attraction_type}</TagText>
                        <Rating>{rating}</Rating>
                    </Tag>
                    <CardInfo>
                        <Title>{title}</Title>
                        <Location>{description}</Location>
                        <ButtonsContainer>
                            {
                                accessibility.wheelchairEntrance === 'yes' && (
                                    <FeatureButton icon={WheelchairIcon}>Accessible Entrance</FeatureButton>
                                )
                            }


                            {
                                accessibility.wheelchairEntrance === 'no' && (
                                    <FeatureButton icon={CrossIcon}>No accessible entrance</FeatureButton>
                                )
                            }

                            {
                                accessibility.wheelchairEntrance === 'unknown' && (
                                    <FeatureButton icon={QuestionIcon}>Accessibility not confirmed</FeatureButton>
                                )
                            }


                            {
                                accessibility.accessibilityVerified === true && (
                                    <VerifiedButton>Verified</VerifiedButton>
                                )
                            }
                        </ButtonsContainer>
                    </CardInfo>

                </ContainerCardDescription>
            </Link>
        </Container>
    )
}