import { Play } from "phosphor-react"
import { CounterContainer, FormContainer, HomeContainer, Separator } from "./Home"
import { useState } from "react"


export function Home(){

    const [task, setTask] = useState('')

    return (
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <input type="text" id="task" placeholder="Dê o nome para seu projeto" onChange={ e => setTask(e.target.value)} value={task} required/>

                    <label htmlFor="minutesAmount">durante</label>
                    <input type="number" id="minutesAmount" className="minutos" placeholder="00" min={0} max={6000} required/>

                    <span>minutos.</span>
                </FormContainer>

                <CounterContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CounterContainer>

                <button type="submit" disabled={task === ''}><Play size={24} /> Começar</button>
            </form>
        </HomeContainer>
    )
}