import { Container, Table, Legend } from "./styles";

import { useState, useEffect } from "react";

import { useRef } from 'react';

import Data from "../../services/Data.json"

import { myPathLength } from "../../services/distance";

import Map from "../../components/MyMapComponent"

import theme from "../../styles/theme"

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { Input } from "../../components/Input";
import { InfoBoxVehicle } from "../../components/InfoBoxVehicle"
import { Section } from "../../components/Section";
import KmChart from "../../components/DistributedChart";

import Find from "../../assets/find.svg";
import Car from "../../assets/Car.svg";
import PinSucess from "../../assets/pinSucess.svg";
import Origin from "../../assets/origin.svg";
import Destiny from "../../assets/destiny.svg";
import Route from "../../assets/route.svg";

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

export function VehiclesDashboard(){
    
    let lastTravels
    let lastStart
    let lastStop
    let dateTimeHandler = []
    let travelLength
    let travelCoords
    let timestampHandler

    const [vehicleSelected, setVehicleSelected] = useState(Data.cars[0].id)
    const [model, setModel] = useState(Data.cars[0].model)
    const [plate, setPlate] = useState(Data.cars[0].plate)
    const [travels, setTravels] = useState(Data.cars[0].travels)
    const [timestamp, setTimestamp] = useState([])

    function handleVehicleSelected(car){
        setVehicleSelected(car)
        setModel(Data.cars[car-1].model)
        setPlate(Data.cars[car-1].plate)
        setTravels(Data.cars[car-1].travels)
        timestampHandler = travels.map(travel => {
            return {timestamp: travel.locations[travel.locations.length-1].timestamp, id: travel.id}
        })
        setTimestamp(timestampHandler)
    }

    useEffect(() => {
        timestampHandler = travels.map(travel => {
            return {timestamp: travel.locations[travel.locations.length-1].timestamp, id: travel.id}
        })
        setTimestamp(timestampHandler)
    },[])

    dateTimeHandler = timestamp.map(times => {
        return {date: times.timestamp.split(" ")[0], time: times.timestamp.split(" ")[1]}
    })
    
    lastTravels = [
        travels[0].locations.map(location => {
            return {lat: location.coord[0], lng: location.coord[1]}
        }),
        travels[1].locations.map(location => {
            return {lat: location.coord[0], lng: location.coord[1]}
        }),
    ]

    travelLength = travels.map(travel => {
        travelCoords = travel.locations.map(location => {
            return {
                lat: Number(location.coord[0]),
                lng: Number(location.coord[1])
            }
        })
        return travelCoords
    })

    lastStart = [
        {
            lat: Number(travels[0].locations[0].coord[0]),
            lng: Number(travels[0].locations[0].coord[1])
        },
        {
            lat: Number(travels[1].locations[0].coord[0]),
            lng: Number(travels[1].locations[0].coord[1])
        }
    ]

    lastStop = [
        {
            lat: Number(travels[0].locations[travels[0].locations.length-1].coord[0]),
            lng: Number(travels[0].locations[travels[0].locations.length-1].coord[1])
        },
        {
            lat: Number(travels[1].locations[travels[1].locations.length-1].coord[0]),
            lng: Number(travels[1].locations[travels[1].locations.length-1].coord[1])
        }
    ]

    const windowSize = useRef([window.innerWidth, window.innerHeight]);

    return (
        <Container>
            <Header />
            <Where title="Dashboard" />
            <main>
                <div className="vehicles">
                    <h2>Veículos</h2>
                    <Input icon={Find} inputWidth="33.2rem" placeholder="Pesquisar" />
                    <div className="vehiclesList">
                        {Data && Data.cars.map(car => (
                            <InfoBoxVehicle key={car.id} title={car.plate} situation={car.situation}  description={car.model} icon={Car} icon2={PinSucess} isActive={car.id === vehicleSelected} onClick={() => handleVehicleSelected(car.id)} />
                        ))}
                    </div>
                    <div className="borderRight" />
                    <div className="borderBottom" />
                </div>
                <div className="vehicleDetails">
                    <div className="detailsTitle">
                        <img src={Car} alt="Car icon" />
                        <div>
                            <h3>{plate}</h3>
                            <p>{model}</p>
                        </div>
                    </div>
                    <div className="detailsBody">
                        <Section classSection="lastTravels" title="Últimas viagens">
                            <h2 className="APIMAPS"><Map paths={lastTravels} pathsColor={theme.COLORS.chart_green} markersInit={lastStart} markersFinal={lastStop} markersInitIcon={Origin} markersFinalIcon={Destiny}/></h2>
                            <div className="travelsFromAToB" >
                                <div className="travelFromAToB">
                                    <div className="origin">
                                        <div className="originRouteSVG">
                                            <img src={Origin} alt="" />
                                            <img src={Route} alt="" />
                                        </div>
                                        <p>{addressesGeo[travels[0].locations[0].id]}</p>
                                    </div>
                                    <div className="destiny">
                                        <img src={Destiny} alt="" />
                                        <p>{addressesGeo[travels[0].locations[travels[0].locations.length-1].id]}</p>
                                    </div>
                                    <div className="borderBottom" />
                                </div>
                                <div className="travelFromAToB">
                                    <div className="origin">
                                        <div className="originRouteSVG">
                                            <img src={Origin} alt="" />
                                            <img src={Route} alt="" />
                                        </div>
                                        <p>{addressesGeo[travels[1].locations[0].id]}</p>
                                    </div>
                                    <div className="destiny">
                                        <img src={Destiny} alt="" />
                                        <p>{addressesGeo[travels[1].locations[travels[0].locations.length-1].id]}</p>
                                    </div>
                                </div>
                            </div>
                        </Section>
                        <Section classSection="report" title="Relatório Semanal">
                            <Legend>
                                <div className="legend">
                                    <div className="circ1" />
                                    <div className="info">
                                        <p>Em curso</p>
                                        <span>46 hr 54 min</span>
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="circ2" />
                                    <div className="info">
                                        <p>Parado</p>
                                        <span>24 hr 07 min</span>
                                    </div>
                                </div>
                                <div className="legend">
                                    <div className="circ3" />
                                    <div className="info">
                                        <p>Desligado</p>
                                        <span>90 hr 00 min</span>
                                    </div>
                                </div>
                            </Legend>
                            <h1>Quilômetros Rodados</h1>
                            <div>
                                <KmChart />
                            </div>
                        </Section>
                        <Section classSection="allTravels" title="Todas as viagens">
                            <Input classInput="input" placeholder="pesquisar" icon={Find} />
                            <Table cellSpacing="0" >
                                <thead>
                                    <tr>
                                        <th>Destino</th>
                                        <th>Data</th>
                                        <th>Horário</th>
                                        <th>Distância</th>
                                        <th>Duração</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {travels && travels.map(travel => (
                                        <tr key={String(travel.locations[travel.locations.length-1].id)}>
                                            <td>{addressesGeo[travel.locations[travel.locations.length-1].id]}</td>
                                            <td>{dateTimeHandler[travel.id-1] && dateTimeHandler[travel.id-1].date}</td>
                                            <td>{dateTimeHandler[travel.id-1] && dateTimeHandler[travel.id-1].time}</td>
                                            <td>{(myPathLength(travelLength[travel.id-1])/1000).toFixed(1)} km</td>
                                            <td>45 min</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Section>
                    </div>
                </div>
            </main>
        </Container>
    )
}