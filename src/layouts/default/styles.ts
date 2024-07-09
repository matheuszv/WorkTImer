import styled from "styled-components"

export const LayoutContainer = styled.div`
    max-width = 74rem;
    heigth = calc(100vh - 11rem);
    margin: 4rem 6rem;
    background: ${props => props.theme['gray-800']};
    padding: 2.5rem;
    border-radios: 8px;
    display: flex;
    flex-direction: column;

`