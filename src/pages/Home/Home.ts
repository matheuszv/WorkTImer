import styled from "styled-components"

export const HomeContainer = styled.main`
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 3rem;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;

        button{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 0.5rem;
            width: 100%;
            padding: 1rem 0;
            background: ${props => props.theme["green-500"]};
            border: 0;
            cursor: pointer;
            border-radius: 8px;
            color: ${props => props.theme["gray-100"]};

            transition: 0.3s;

            &:hover{
                background: ${props => props.theme["green-700"]};
            }

            &:disabled{
                background: ${props => props.theme["green-700"]};
                color: ${props => props.theme["gray-400"]};
                cursor: not-allowed;
            }
        }

    }

`

export const FormContainer = styled.div`

    display: flex;
    width: 100%;

    color: ${props => props.theme["gray-100"]};
    justify-content: center;
    align-itens: center;
    gap: 0.5rem;
    
    font-family: 'roboto', sans-serif;
    font-weight: bold;
    font-size: 1.125rem;

    flex-wrap: wrap;

    input{
        background: transparent !important;
        color: ${props => props.theme["gray-400"]};
        font-weight: bold;
        width: 14rem;
        border: none;
        border-bottom: 2px solid ${props => props.theme["gray-400"]};
        text-align: left;

        &:focus{
            outline: none;
            box-shadow: none;
            border-color: ${props => props.theme["green-500"]};
        }
    }
`

export const CounterContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 9rem;
    line-height: 8rem;
    color: ${props => props.theme["gray-100"]};

    display: flex;
    justify-content: center;
    gap: 1rem;

    span{
        background: ${props => props.theme["gray-700"]};
        padding: 2rem 2.4rem;
        border-radius: 8px;
    }
`

export const Separator = styled.div`
    padding: 2rem 0;
    color: ${props => props.theme["green-500"]};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center; 
`