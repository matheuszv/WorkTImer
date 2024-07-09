import { HistoryContainer, HistoryList, Status } from './History'

import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function History(){


    interface Tasks {
        tarefa: string,
        duracao: string,
        inicio: string,
        status: string,
    }

    const date = new Date();
    const dated = new Date('2024-01-22 00:00:00')

    const PublisedDateRelativeToNow = formatDistanceToNow(date, {
        locale: ptBR,
        addSuffix: true,
    })

    const PublisedDateRelativeToNowed = formatDistanceToNow(dated, {
        locale: ptBR,
        addSuffix: true,
    })

    const task: Array<Tasks> = [
        {
            tarefa: "Correr",
            duracao: "22",
            inicio: PublisedDateRelativeToNowed,
            status: "Em atividade",
        },
        {   
            tarefa: "Caminhar",
            duracao: "20",
            inicio: PublisedDateRelativeToNow,
            status: "Em atividade",
        },
        {   
            tarefa: "Brincar",
            duracao: "27",
            inicio: PublisedDateRelativeToNowed,
            status: "Terminado",
        }
    ];

    return (
        <HistoryContainer>
            <h1>Meu histórico</h1>

            <HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{task[0].tarefa}</td>
                            <td>{task[0].duracao}</td>
                            <td>{task[0].inicio}</td>
                            <td>
                                <Status statusColor='yellow'>{task[0].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[1].tarefa}</td>
                            <td>{task[1].duracao}</td>
                            <td>{task[1].inicio}</td>
                            <td>
                                <Status statusColor='yellow'>{task[1].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='yellow' >{task[2].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='red' >{task[2].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='green' >{task[2].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='yellow' >{task[2].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='yellow'>{task[0].status}</Status>
                            </td>
                        </tr>
                        <tr>
                            <td>{task[2].tarefa}</td>
                            <td>{task[2].duracao}</td>
                            <td>{task[2].inicio}</td>
                            <td>
                                <Status statusColor='red'>{task[0].status}</Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </HistoryList>
        </HistoryContainer>

    )
}