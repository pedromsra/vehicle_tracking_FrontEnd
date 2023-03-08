import { slide as Menu } from 'react-burger-menu';

import {Container} from "./styles"

import { Link } from "react-router-dom"

import {ButtonText} from "../ButtonText";


export function SlideBar() {
    return (
        <Container>
            <Menu>
                <Link to="/" ><ButtonText className="menu-item" title="Início" isActive /></Link>
                <ButtonText className="menu-item" title="Motoristas" isActive />
                <Link to="/vehiclesDashboard" ><ButtonText className="menu-item" title="Veículos" isActive /></Link>
                <Link to="/locations"><ButtonText className="menu-item" title="Localização" isActive /></Link>
                <ButtonText className="menu-item" title="Financeiro" isActive />
            </Menu>
        </Container>
    )
}