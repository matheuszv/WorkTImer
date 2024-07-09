import { Header } from "../../components/header/index"
import { Outlet } from "react-router-dom"
import { LayoutContainer } from "./styles"

export function LayoutDefault(){
    return(
        <LayoutContainer>
            <Header/>
            <Outlet />
        </LayoutContainer>
    )
}