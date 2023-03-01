import React from "react"

import {Container} from "./styles.js"

import {Input} from "../../components/Input"
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

            <div>
                <ButtonText title="Início" isActive />
                <ButtonText title="Motoristas" isActive />
                <ButtonText title="Veículos" isActive />
                <ButtonText title="Localização" isActive />
                <ButtonText title="Financeiro" isActive />
            </div>
            
            <div>
                <Button icon={Reload} isActive />
                <div className="rectangle" />
                <Button icon={Chat} isActive />
                <Button icon={DarkMode} isActive />
                <Button icon={Profile} isActive />
            </div>
        </Container>
    );
}