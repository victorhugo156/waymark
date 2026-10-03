import styled from "styled-components";

export const Text = styled.p`
color: ${props => props.theme.colors.primary};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.semibold};
line-height: 1.5;
`