import { HeaderContainer } from "./Header"
import { NavLink } from "react-router-dom"
import { Timer } from "phosphor-react"
import { Scroll } from "phosphor-react"

import logo from "../../assets/Logo.svg"

export function Header(){
    return (
        <HeaderContainer>
            <img src={logo} alt="Logotipo" />
            <nav> 
                <NavLink to="/" title="Cronometro">
                    <Timer size={30} />
                </NavLink>
                <NavLink to="/history" title="Histórico">
                    <Scroll size={30} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}