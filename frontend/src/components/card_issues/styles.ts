import styled from "styled-components";
import { ExclamationMarkIcon } from "@phosphor-icons/react";

export const Container = styled.div`
background-color: ${props => props.theme.colors.warningSoft};
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: .5rem;

    padding: 1rem;

    border-radius: 1rem;
`;

export const ContainerText = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.25rem;
`;

export const Title = styled.h3`
font-size: ${props => props.theme.fontSizes.base};
font-weight: ${props => props.theme.fontWeights.bold};
color: ${props => props.theme.colors.warning};

`

export const Text = styled.p`
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.regular};
color: ${props => props.theme.colors.foreground};
`


export const CircleIcon = styled.div`
background-color: ${props => props.theme.colors.warning};

width: 2.5rem;
height: 2.5rem;
border-radius: 50%;

display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;

`

export const Icon = styled(ExclamationMarkIcon)`	
    color: white;
    font-size: ${props => props.theme.fontSizes["2xl"]};
    font-weight: ${props => props.theme.fontWeights.extrabold};
`;