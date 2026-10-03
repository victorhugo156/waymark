import styled from "styled-components";


export const InputContainer = styled.div`
width: 100%;
position: relative;

display: flex;

input {
    background-color: ${props => props.theme.colors.background};
    padding-left: 2.75rem;
  }

`

export const SearchIcon = styled.span`
width: 100%;
position: absolute;
left: 12px;
top: 50%;
transform: translateY(-50%);
pointer-events: none;
`

