


import { 
    Container, 
    ContainerText, 
    Title, 
    Text,

    CircleIcon,
    Icon,
 } from "./styles";



 interface CardIssuesProps {
    title: string;
    text: string;
 }

export function CardIssues({ title, text }: CardIssuesProps) {
    return (
        <Container>

            <CircleIcon>
                <Icon size={24} />
            </CircleIcon>




            <ContainerText>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </ContainerText>

        </Container>
    )
}