import React from "react"
import { Link } from "react-router-dom"

import {Container} from "./styles.js"

import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import ComigoLogo from "../../assets/comigo-logo.png"
import Chat from "../../assets/chat.svg"
import DarkMode from "../../assets/dark_mode.svg"
import Profile from "../../assets/profile.svg"
import Reload from "../../assets/reload.svg"

export function Header() {

    return (
        <Container>
            <img src={ComigoLogo} alt="" />

            <div className="navigation">
                <Link to="/" ><ButtonText title="Início" isActive /></Link>
                <ButtonText title="Motoristas" isActive />
                <Link to="/vehiclesDashboard" ><ButtonText title="Veículos" isActive /></Link>
                <Link to="/locations"><ButtonText title="Localização" isActive /></Link>
                <ButtonText title="Financeiro" isActive />
            </div>
            <div className="buttons">
                <Button icon={Reload} isActive />
                <div className="rectangle" />
                <Button icon={Chat} isActive />
                <Button icon={DarkMode} isActive />
                <Button icon={Profile} isActive />
            </div>
        </Container>
    );
}