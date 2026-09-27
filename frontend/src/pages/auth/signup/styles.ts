import styled from "styled-components";

export const Container = styled.div`
min-height: 100dvh;

display: flex;
flex-direction: column;

@media (min-width: 1024px) {
    flex-direction: row;
    
}
`

export const Header = styled.div`
background-color: ${props => props.theme.colors.foreground};
flex: 1;
min-width: 0;

height: auto;
display: flex;
flex-direction: column;
gap: 1rem;

padding: 1.5rem;

@media (min-width: 768px) {
    justify-content: space-between;
    padding: 2rem;
}

@media (min-width: 1024px) {
    justify-content: space-between;
    padding: 1.5rem;
}
    
`
export const ContainerTitle = styled.div`
display: flex;
flex-direction: column;
gap: 1rem;
`
export const Logo = styled.img`
width: 9.43rem;
height: auto;
`

export const Title = styled.h1`
color: ${props => props.theme.colors.secondaryForeground};
font-size: ${props => props.theme.fontSizes['2xl']};
font-weight: ${props => props.theme.fontWeights.extrabold};
line-height: 1.2;

max-width: 32rem;

@media (min-width: 768px) {
        max-width: 30rem;
        font-size: ${props => props.theme.fontSizes['2xl']};
    }

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes['3xl']};
}

`

export const Text = styled.p`
color: ${props => props.theme.colors.secondaryForeground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.regular};
line-height: 1.5;

max-width: 32rem;

@media (min-width: 768px) {
    max-width: 30rem;
    font-size: ${props => props.theme.fontSizes['lg']};
}

@media (min-width: 1024px) {
    font-size: ${props => props.theme.fontSizes['xl']};
}
`


export const TitleLogin = styled(Title)`
color: ${props => props.theme.colors.foreground};
`

export const ContainerForm = styled.div`
min-width: 0;
display: flex;
flex: 1;
justify-content: flex-end;
flex-direction: column;
gap: 1rem;

padding: 1.5rem;

@media (min-width: 768px) {
 padding: 1.5rem 5rem
}

@media (min-width: 1024px) {
    justify-content: center;
    padding: 5rem;
}

@media (min-width: 1280px) {
    max-width: 45rem;
    flex: 1 1 45rem;
}
`

export const Form = styled.form`
width: 100%;
display: flex;
flex-direction: column;
gap: 1rem;

`

export const Label = styled.label`

color: ${props => props.theme.colors.foreground};
font-size: ${props => props.theme.fontSizes.sm};
font-weight: ${props => props.theme.fontWeights.semibold};
line-height: 1.5;

`

export const CreateAccount = styled.p`

color: ${props => props.theme.colors.ink};
font-size: ${props => props.theme.fontSizes.base};
font-weight: ${props => props.theme.fontWeights.regular};

`

export const ContainerToggleGroupAccessibility = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
gap: 1rem;
`