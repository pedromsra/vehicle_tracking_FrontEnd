import { Container, DateInputs, Travel } from "./styles";

import Map from "../../components/MyMapComponent"

import {useParams} from "react-router-dom";

import { useState } from "react";

import Data from "../../services/Data.json"

import { myPathLength } from "../../services/distancy";

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { DateInput } from "../../components/DateInput";

import Car from "../../assets/Car.svg";
import PinAlert from "../../assets/pinAlert.svg";
import Pin from "../../assets/pin.svg";
import Clock from "../../assets/clock.svg";
import Date from "../../assets/date.svg";
import ArrowUpPrimary from "../../assets/arrowUpPrimary.svg"
import ArrowDownPrimary from "../../assets/arrowDownPrimary.svg"

import theme from "../../styles/theme"

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

export function CarLocation(){
    let travelLength
    let travelCoords
    let pathSelected = []
    let pathS = []

    const params = useParams();
    const [travelSelected, setTravelSelected] = useState([Data.cars[params.id-1].travels[0].id])

    function handleTravelSelected(counter){
        const alreadySelected = travelSelected.includes(counter);
        if(alreadySelected){
            const filteredTravel = travelSelected.filter(travel => travel !== counter);
            setTravelSelected(filteredTravel);
        } else {
            setTravelSelected(prevState => [...prevState, counter]);
        }
    }
    
    travelSelected.forEach(travel => {
        pathS = Data.cars[params.id-1].travels[Number(travel)-1].locations.map(location => {
            return {
                lat: Number(location.coord[0]),
                lng: Number(location.coord[1])
            }
        })
        pathSelected.push(pathS)
    })

    const timeStampGPS = {date: Data.cars[params.id-1].commGPS.split(" ")[0], time: Data.cars[params.id-1].commGPS.split(" ")[1]}
    const timeStampServer = {date: Data.cars[params.id-1].commServer.split(" ")[0], time: Data.cars[params.id-1].commServer.split(" ")[1]}
    
    travelLength = Data.cars[params.id-1].travels.map(travel => {
        travelCoords = travel.locations.map(location => {
            return {
                lat: Number(location.coord[0]),
                lng: Number(location.coord[1])
            }
        })
        return travelCoords
    })

    return (
        <Container>
            
            <Header />
            <Where title="Localização" />
            <main>
                <div className="APIMAPS"><Map paths={pathSelected} /></div>
                <div className="travels">
                    <h1>Viagens</h1>
                    <div className="carTravelInfo">
                        <div className="carInfo">
                            <div className="carPlate">
                                <img src={Car} alt="car icon" />
                                <h2>{Data.cars[params.id-1].plate}</h2>
                                <div className="borderRight" />
                            </div>
                            <h3>{Data.cars[params.id-1].model}</h3>
                        </div>
                        <div className="communications">
                            <div className="communication">
                                <p>Última comunicação (GPS)</p>
                                <div>
                                    <div>
                                        <img src={Date} alt="calendar icon" />
                                        <span>{timeStampGPS.date}</span>
                                    </div>
                                    <div>
                                        <img src={Clock} alt="clock icon" />
                                        <span>{timeStampGPS.time}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="communication">
                                <p>Última comunicação (Servidor)</p>
                                <div>
                                    <div>
                                        <img src={Date} alt="calendar icon" />
                                        <span>{timeStampServer.date}</span>
                                    </div>
                                    <div>
                                        <img src={Clock} alt="clock icon" />
                                        <span>{timeStampServer.time}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="subSection">Período</div>
                    <DateInputs >
                        <DateInput classInput="dateInput" defaultValue="03/11/2022 08:00" inputWidth="15.7rem" />
                        <p>a</p>
                        <DateInput classInput="dateInput" defaultValue="03/11/2022 08:00" inputWidth="15.7rem" />
                    </DateInputs>
                    <div className="travelsContainer">
                        {
                            Data && Data.cars[params.id-1].travels.map(travel => (
                                <Travel key={String(travel.id)} isActived={travelSelected.includes(String(travel.id))}>
                                    <div className="header">
                                        <div className="title">
                                            {travel.id < 10 ? <h1>Viagem 0{travel.id}</h1> : <h1>Viagem {travel.id}</h1>}
                                            <div>
                                                <img className="arrowDown" src={ArrowDownPrimary} alt="" onClick={()=>handleTravelSelected(travel.id)} />
                                                <img className="arrowUp" src={ArrowUpPrimary} alt="" onClick={()=>handleTravelSelected(travel.id)} />
                                            </div>
                                        </div>
                                        <div className="pathResume">
                                            <div className="startStop">
                                                <div className="font1">Início do trajeto</div>
                                                <div className="font2">{addressesGeo[travel.locations[0].id]}</div>
                                                <div className="font1">{travel.locations[0].timestamp.split(" ")[0]} às {travel.locations[0].timestamp.split(" ")[1]}</div>
                                            </div>
                                            <div className="startStop">
                                                <div className="font1">Fim do trajeto</div>
                                                <div className="font2">{addressesGeo[travel.locations[travel.locations.length-1].id]}</div>
                                                <div className="font1">{travel.locations[travel.locations.length-1].timestamp.split(" ")[0]} às {travel.locations[travel.locations.length-1].timestamp.split(" ")[1]}</div>
                                            </div>
                                        </div>
                                        <div className="infos">
                                            <div className="info">
                                                <div className="font1">Duração</div>
                                                <div className="font2">01:00:36</div>
                                            </div>
                                            <div className="info">
                                                <div className="font1">Ocioso</div>
                                                <div className="font2">00:20:45</div>
                                            </div>
                                            <div className="info">
                                                <div className="font1">Distância</div>
                                                <div className="font2">{(myPathLength(travelLength[travel.id-1])/1000).toFixed(1)} km</div>
                                            </div>
                                            <div className="info">
                                                <div className="font1">Velocidade</div>
                                                <div className="font2">50 km/h | 100 km/h</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pins">
                                        {
                                            travel.locations && travel.locations.map(location => (
                                                <div className="pin" key={location.id}>
                                                    <div className="pinTitle">
                                                        {location.velocity >= 100 ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                                        <div className="font2">{addressesGeo[location.id]}</div>
                                                    </div>
                                                    <div className="pinInfos">
                                                        <div className="pinInfo">
                                                            <div className="font1">Horário</div>
                                                            <div className="font3">{location.timestamp.split(" ")[1]}</div>
                                                        </div>
                                                        <div className="pinInfo">
                                                            <div className="font1">Alertas</div>
                                                            {location.velocity >= 100 ? <div className="font3" style={{color: theme.COLORS.red_200}}>Atingiu o limite de velocidade</div> : <div className="font3">Sem alertas</div> }
                                                        </div>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </div>
                                </Travel>
                            )) 
                        }
                    </div>
                </div>
            </main>
        </Container>
    )
}