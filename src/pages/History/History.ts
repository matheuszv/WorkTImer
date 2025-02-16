import styled from "styled-components";

export const HistoryContainer = styled.main`
    flex: 1;

    display: flex;
    padding: 5rem 4rem;

    flex-direction: column;

    gap: 2rem;

    h1{
        color: ${props => props.theme["gray-100"]};

    }
`

export const HistoryList = styled.div`
    flex: 1;

    overflow: auto;
    
    table{
        width: 100%;
        border-collapse: collapse;

        min-width: 600px;

        th{
            background: ${props => props.theme["gray-600"]};
            padding: 1rem 1.5rem;
            text-align: left;
            color: ${props => props.theme["gray-100"]};
            font-size: 0.875rem;
            line-height: 1.6;
            
            &:first-child{
                border-top-left-radius: 8px;
                padding-left: 1.5rem;
            }

            &:last-child{
                border-top-right-radius: 8px;
                padding-left: 1.5rem;
            }
        }

        td{
            background: ${props => props.theme["gray-700"]};
            border-top: 4px solid ${props => props.theme["gray-800"]};
            padding: 1rem 1.5rem;
            font-size: 0.875rem;
            line-height: 1.6;

            &:first-child{
                padding-left: 1.5rem;
            }

            &:last-child{
                padding-right: 1.5rem;
            }
        }
    }
`

const COLOR_STATUS = {
    yellow: 'yellow-500',
    green: 'green-500',
    red: 'red-500',
} as const

interface StatusProps {
    statusColor: keyof typeof COLOR_STATUS;
}

export const Status = styled.span<StatusProps>`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &::before{
        content: '';
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 999px;
        background: ${props => props.theme[COLOR_STATUS[props.statusColor]]};
    }
`
