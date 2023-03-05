import { Container, TableContainer, AlertContainer, Tab, APIMaps } from "./styles";

import { useState } from "react";

import Data from "../../services/Data.json"

import Map from "../../components/MyMapComponent"

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Indicador } from "../../components/Indicador";
import {Chart} from "../../components/Chart";
import {Input} from "../../components/Input";
import {Where} from "../../components/Where";

import Clients from "../../assets/clients.svg";
import Vehicle from "../../assets/vehicle.svg";
import Users from "../../assets/users.svg";
import Equipment from "../../assets/equipment.svg";
import ArrowUp from "../../assets/arrowUp.svg";
import ArrowDown from "../../assets/arrowDown.svg";
import Find from "../../assets/find.svg";
import Alert from "../../assets/alert.svg";
import Clock from "../../assets/clock.svg";
import Date from "../../assets/date.svg";
import Pin from "../../assets/pin.svg";


let coords = []
let adresses = []
let vehiclesLocations = []
let counter = 0

const addressesGeo = [
    "Av. dos Pinheirais, 415 - Neópolis, Natal - RN",
    "R. Minas Gerais, 238 - Neópolis, Natal - RN",
    "Av. dos Pinheirais, 327c - Neópolis, Natal - RN",
    "Alameda das Castanholas, 358 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 350 - Neópolis, Natal - RN",
    "R. Rio de Janeiro, 164 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 344 - Neópolis, Natal - RN",
    "R. Domingos Alves Queirós, 21 - Nova Parnamirim, Parnamirim - RN",
    "R. Antônio Lopes Filho, 307 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 424 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Br Cento e Um, 968 - Tirol, Parnamirim - RN",
    "Av. Alto do Monte Belo, 169 - Neópolis, Natal - RN",
    "R. Lúcia Viveiros, 101 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "R. Muriaé, 2910 - Neópolis, Natal - RN",
    "Praça Das Árvores - R. Juiz de Fora, 2918-2932 - Neópolis, Natal - RN",
    "R. Gov. Valadares, 1 - Neópolis, Natal - RN",
    "Rua Rio Beberibe, 186, Emaús",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "R. Arapiraca, 52 - Neópolis, Natal - RN",
    "R. Arapiraca, 1 - Neópolis, Natal - RN",
    "Ao lado do nº35 - R. Delmiro Gouveia, LOJA 3 - Neópolis, Natal - RN",
    "R. Dr. Orlando de Azevedo, 530 - Capim Macio, Natal - RN",
    "Rua Missionário Gunnar Vingren, 1930 - Capim Macio, Natal - RN",
    "R. Serra dos Milagres, 105 - Nova Parnamirim, Parnamirim - RN",
    "R. Neópolis, 1734 - Nova Parnamirim, Parnamirim - RN",
    "Av. Maria Lacerda Montenegro, 77 - Nova Parnamirim, Parnamirim - RN",
    "R. Adeodato José dos Réis, 1009 - Nova Parnamirim, Parnamirim - RN",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3331 - Nova Parnamirim, Parnamirim - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "R. Serra dos Milagres, 105 - Nova Parnamirim, Parnamirim - RN",
    "R. Neópolis, 1734 - Nova Parnamirim, Parnamirim - RN",
    "Av. Maria Lacerda Montenegro, 77 - Nova Parnamirim, Parnamirim - RN",
    "R. Adeodato José dos Réis, 1009 - Nova Parnamirim, Parnamirim - RN",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3331 - Nova Parnamirim, Parnamirim - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "R. Domingos Alves Queirós, 21 - Nova Parnamirim, Parnamirim - RN",
    "R. Antônio Lopes Filho, 307 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 424 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Br Cento e Um, 968 - Tirol, Parnamirim - RN",
    "Av. Alto do Monte Belo, 169 - Neópolis, Natal - RN",
    "R. Lúcia Viveiros, 101 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "R. Muriaé, 2910 - Neópolis, Natal - RN",
    "Praça Das Árvores - R. Juiz de Fora, 2918-2932 - Neópolis, Natal - RN",
    "R. Gov. Valadares, 1 - Neópolis, Natal - RN",
    "Rua Rio Beberibe, 186, Emaús",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "R. Arapiraca, 52 - Neópolis, Natal - RN",
    "R. Arapiraca, 1 - Neópolis, Natal - RN",
    "Ao lado do nº35 - R. Delmiro Gouveia, LOJA 3 - Neópolis, Natal - RN",
    "R. Dr. Orlando de Azevedo, 530 - Capim Macio, Natal - RN",
    "Rua Missionário Gunnar Vingren, 1930 - Capim Macio, Natal - RN",
    "Av. dos Pinheirais, 415 - Neópolis, Natal - RN",
    "R. Minas Gerais, 238 - Neópolis, Natal - RN",
    "Av. dos Pinheirais, 327c - Neópolis, Natal - RN",
    "Alameda das Castanholas, 358 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 350 - Neópolis, Natal - RN",
    "R. Rio de Janeiro, 164 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 344 - Neópolis, Natal - RN",
    "R. Serra dos Milagres, 105 - Nova Parnamirim, Parnamirim - RN",
    "R. Neópolis, 1734 - Nova Parnamirim, Parnamirim - RN",
    "Av. Maria Lacerda Montenegro, 77 - Nova Parnamirim, Parnamirim - RN",
    "R. Adeodato José dos Réis, 1009 - Nova Parnamirim, Parnamirim - RN",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3331 - Nova Parnamirim, Parnamirim - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "R. Muriaé, 2910 - Neópolis, Natal - RN",
    "Praça Das Árvores - R. Juiz de Fora, 2918-2932 - Neópolis, Natal - RN",
    "R. Gov. Valadares, 1 - Neópolis, Natal - RN",
    "Rua Rio Beberibe, 186, Emaús",
    "Av. São Miguel dos Caribes, 16 - Neópolis, Natal - RN",
    "R. Arapiraca, 52 - Neópolis, Natal - RN",
    "R. Arapiraca, 1 - Neópolis, Natal - RN",
    "Ao lado do nº35 - R. Delmiro Gouveia, LOJA 3 - Neópolis, Natal - RN",
    "R. Dr. Orlando de Azevedo, 530 - Capim Macio, Natal - RN",
    "Rua Missionário Gunnar Vingren, 1930 - Capim Macio, Natal - RN",
    "R. Domingos Alves Queirós, 21 - Nova Parnamirim, Parnamirim - RN",
    "R. Antônio Lopes Filho, 307 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 424 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Br Cento e Um, 968 - Tirol, Parnamirim - RN",
    "Av. Alto do Monte Belo, 169 - Neópolis, Natal - RN",
    "R. Lúcia Viveiros, 101 - Neópolis, Natal - RN",
    "Av. Abel Cabral, 3591 - Nova Parnamirim, Parnamirim - RN",
    "Rod. Gov. Mário Covas, 15660 - Nova Parnamirim, Natal - RN",
    "Rod. Br Cento e Um, 1010 - Pitimbú, Natal - RN",
    "Av. Dão Silveira, 159 - Neópolis, Natal - RN",
    "Av. dos Pinheirais, 415 - Neópolis, Natal - RN",
    "R. Minas Gerais, 238 - Neópolis, Natal - RN",
    "Av. dos Pinheirais, 327c - Neópolis, Natal - RN",
    "Alameda das Castanholas, 358 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 350 - Neópolis, Natal - RN",
    "R. Rio de Janeiro, 164 - Neópolis, Natal - RN",
    "Alameda das Castanholas, 344 - Neópolis, Natal - RN"
]

Data.cars.forEach(car => {
    vehiclesLocations.push(car.localNow)
    car.travels.forEach(travel => {
        travel.locations.forEach(location => {
            if(location.velocity >= 100) {
                coords.push({coord: location.coord,index: counter})
                counter++
            }
        })
    })
})

for(let i=0; i < coords.length; i++){
    adresses[coords[i].index] = addressesGeo[coords[i].index]
}

const alertsCoords = coords.map(loc => {
    return {lat: loc.coord[0], lng: loc.coord[1]}
})

const vehiclesCoords = vehiclesLocations.map(loc => {
    return {lat: loc[0], lng: loc[1]}
})

export function StartDashboard(){
    let alerts
    let alertsTravels
    let dateTimeHandler
    let date
    let time

    const tabTitle = ["Veículos", "Alertas"]

    const [activeTab, setActiveTab] = useState(tabTitle[0]);

    const [activeAlert, setActiveAlert] = useState([])

    function handleAlertsSelected(counter){
        const alreadySelected = activeAlert.includes(counter);
        if(alreadySelected){
            const filteredAlert = activeAlert.filter(alert => alert !== counter);
            setActiveAlert(filteredAlert);
        } else {
            setActiveAlert(prevState => [...prevState, counter]);
        }
    }

    return (
        <Container>
            <Header />

            <Where title="Dashboard" />
            <main>
                <div className="dashboard" >
                    <Section title="Indicadores" className="indicators" >
                        <Indicador data={[{
                            title: "Veículos",
                            quantity: "2656",
                            variation: "50",
                            indication: "-",
                            icon: Vehicle
                        },
                        {
                            title: "Equipamentos",
                            quantity: "2656",
                            variation: "5",
                            indication: "+",
                            icon: Equipment
                        },
                        {
                            title: "Clientes",
                            quantity: "1628",
                            variation: "20",
                            indication: "+",
                            icon: Clients
                        },
                        {
                            title: "Usuários",
                            quantity: "2526",
                            variation: "34",
                            indication: "+",
                            icon: Users
                        }
                    ]} />
                    </Section>
                    <Section title="Comunicação dos veículos" >
                        <Chart data={[
                            {
                                info: "0 a 1 hora",
                                quantity: "2196" 
                            },
                            {
                                info: "1 a 6 horas",
                                quantity: "116" 
                            },
                            {
                                info: "6 a 24 horas",
                                quantity: "104" 
                            },
                            {
                                info: "24 a 72 horas",
                                quantity: "63" 
                            },
                            {
                                info: "Falha na comunicação",
                                quantity: "4" 
                            },
                            {
                                info: "Manutenção",
                                quantity: "173" 
                            },
                        ]} />
                    </Section>
                    <APIMaps isActive={"Alertas" === activeTab}><Map markersInit={alertsCoords} markersInitIcon={Pin}/></APIMaps>
                    <APIMaps isActive={"Veículos" === activeTab}><Map markersInit={vehiclesCoords} markersInitIcon={Vehicle}/></APIMaps>
                </div>
                <div className="table">
                        <div className="header">
                            <div className="headerTabs">
                                {
                                    tabTitle.map(title => (
                                        <Tab key={title} className={title} isActive={title === activeTab} onClick={() => setActiveTab(title)} >{title}</Tab>
                                    ))
                                }
                            </div>
                            <Input icon={Find} inputWidth="20.8rem" placeholder="Pesquisar" />
                        </div>
                    <TableContainer className="Veículos" isActive={"Veículos" === activeTab}>
                        <table className="vehicles" cellSpacing="0" >
                            <tbody>
                                {Data && Data.cars.map(car => (
                                    <tr key={String(car.id)}>
                                        <td><div>{car.plate}<span>Apelido</span></div></td>
                                        <td><div>Categoria<span>{car.model}</span></div></td>
                                        <td><a>Mais informações</a></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </TableContainer>
                    <TableContainer className="Alertas" isActive={"Alertas" === activeTab} >
                        <div className="alerts" >
                            <div className="todayAlert" >
                                <h3>Hoje</h3>
                                <div className="alertsContainer">
                                    {Data && Data.cars.map(car => {
                                        alertsTravels = car.travels.map(travel => {
                                            alerts = travel.locations.map(location => {
                                                if(location.velocity >= 100){
                                                    dateTimeHandler = location.timestamp.split(" ");

                                                    date = dateTimeHandler[0]

                                                    time = dateTimeHandler[1]
                                                    
                                                    return (
                                                        <AlertContainer isActive={activeAlert.includes(String(location.id))} key={String(location.id)}>
                                                            
                                                            <div className="alertHead">
                                                                <div className="titleContainer">
                                                                    <img src={Alert} alt="alert icon" />
                                                                    <p>O veículo {car.model} {car.plate} passou do limite de velocidade</p>
                                                                </div>
                                                                <div className="arrowContainer">
                                                                    <button><img className="arrowUp" src={ArrowUp} alt="arrow up" onClick={() => handleAlertsSelected(String(location.id))}/></button>
                                                                    <button><img className="arrowDown" src={ArrowDown} alt="arrow up" onClick={() => handleAlertsSelected(String(location.id))} /></button>
                                                                </div>
                                                            </div>
                                                            <div className="alertBody">
                                                                <div className="alertLocal">
                                                                    <p>Localização</p>
                                                                    <span>{adresses[location.id]}</span>
                                                                </div>
                                                                <div className="alertInfo">
                                                                    <div className="alertAt">
                                                                        <p>Momento da ocorrencia</p>
                                                                        <div className="momentContainer">
                                                                            <div className="alertMoment">
                                                                                <img src={Date} alt="calendar icon" />
                                                                                <span>{date}</span>
                                                                            </div>
                                                                            <div className="alertMoment">
                                                                                <img src={Clock} alt="clock icon" />
                                                                                <span>{time}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="alertVelocity">
                                                                        <p>Velocidade</p>
                                                                        <span>{location.velocity} km/h</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </AlertContainer>
                                                    )
                                                }
                                            })
                                            return alerts
                                        })
                                        return alertsTravels
                                    })}
                                    
                                </div>
                            </div>
                            <div className="yesterdayAlert" >
                                <h3>Ontem</h3>
                            </div>
                        </div>
                    </TableContainer>
                </div>
            </main>
        </Container>
    )
}