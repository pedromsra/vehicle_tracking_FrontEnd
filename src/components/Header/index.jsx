import React from "react"
import { Link } from "react-router-dom"

import { SlideBar } from "../../components/SlideBar";

import {Container} from "./styles.js"

import {Button} from "../../components/Button"
import {ButtonText} from "../../components/ButtonText"

import Chat from "../../assets/chat.svg"
import DarkMode from "../../assets/dark_mode.svg"
import Profile from "../../assets/profile.svg"
import Reload from "../../assets/reload.svg"

import {BsFillHexagonFill} from "react-icons/bs"

export function Header() {

    return (
        <Container>
            <SlideBar DesenvolvedorpageWrapId={"main"} outerContainerId={"outer-container"} />

            <div className="logoAndName">
                <BsFillHexagonFill size={24} className = "logo" />
                <h3>CarTrack</h3>
            </div>

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