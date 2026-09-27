import styled from "styled-components";


export const InputField = styled.input`
    width: 100%;
    padding: 0.5rem;
    border: 2px solid ${props => props.theme.colors.foreground};
    border-radius: 8px;
    font-size: 1rem;
    color: ${props => props.theme.colors.foreground};
`