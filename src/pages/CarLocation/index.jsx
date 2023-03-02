import { Container, DateInputs, Travel } from "./styles";

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { DateInput } from "../../components/DateInput";
import { InfoBoxVehicle } from "../../components/InfoBoxVehicle"
import { InfoBoxVehicleDetails } from "../../components/InfoBoxVehicleDetails"

import Find from "../../assets/find.svg";
import Car from "../../assets/Car.svg";
import PinSucess from "../../assets/pinSucess.svg";
import PinAlert from "../../assets/pinAlert.svg";
import Pin from "../../assets/pin.svg";
import Clock from "../../assets/clock.svg";
import Date from "../../assets/date.svg";
import ArrowUpPrimary from "../../assets/arrowUpPrimary.svg"
import ArrowDownPrimary from "../../assets/arrowDownPrimary.svg"

import theme from "../../styles/theme"


export function CarLocation(){
    const data = {
        plate: "RGM8F93",
        model: "Uno Drive 1.0",
        commGPS: "03/01/2022 12:47",
        commServer: "03/01/2022 12:47",
        travels: [
            {
                id: 1,
                start: "03/09/2022 12:47",
                stop: "03/10/2022 12:47",
                duration: "01:00:36",
                parked: "01:00:36",
                distance: "100",
                velocityMin: "50",
                velocityMax: "100",
                locations: [
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: null
                    },
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: "Atingiu o limite de velocidade"
                    },
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: null
                    }
                ]
            },
            {
                id: 2,
                start: "03/11/2022 12:47",
                stop: "03/12/2022 12:47",
                duration: "01:00:36",
                parked: "01:00:36",
                distance: "100",
                velocityMin: "50",
                velocityMax: "100",
                locations: [
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: null
                    },
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: "Atingiu o limite de velocidade"
                    },
                    {
                        location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                        time: "09:40:36",
                        alert: null
                    }
                ]
            }
        ]
    }

    const dateTimeGPS = data.commGPS.split(" ");
    const dateTimeServer = data.commServer.split(" ");
    const dateTimeStart = data.travels.map(trav => trav.start.split(" "));
    const dateTimeStop = data.travels.map(trav => trav.stop.split(" "));

    const dateGPS = dateTimeGPS[0]
    const dateServer = dateTimeServer[0]
    const timeGPS = dateTimeGPS[1]
    const timeServer = dateTimeGPS[1]

    const dateStart = dateTimeStart.map(date => date[0])
    const dateStop = dateTimeStop.map(date => date[0])
    const timeStart = dateTimeStart.map(time => time[1])
    const timeStop = dateTimeStop.map(time => time[1])

    return (
        <Container>
            <Header />
            <Where title="Localização" />
            <main>
                <div className="APIMAPS">INSERIR MAPA DA API GOOGLE MAPS AQUI</div>
                <div className="travels">
                    <h1>Viagens</h1>
                    <div className="carTravelInfo">
                        <div className="carInfo">
                            <div className="carPlate">
                                <img src={Car} alt="car icon" />
                                <h2>{data.plate}</h2>
                                <div className="borderRight" />
                            </div>
                            <h3>{data.model}</h3>
                        </div>
                        <div className="communications">
                            <div className="communication">
                                <p>Última comunicação (GPS)</p>
                                <div>
                                    <div>
                                        <img src={Date} alt="calendar icon" />
                                        <span>{dateGPS}</span>
                                    </div>
                                    <div>
                                        <img src={Clock} alt="clock icon" />
                                        <span>{timeGPS}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="communication">
                                <p>Última comunicação (Servidor)</p>
                                <div>
                                    <div>
                                        <img src={Date} alt="calendar icon" />
                                        <span>{dateServer}</span>
                                    </div>
                                    <div>
                                        <img src={Clock} alt="clock icon" />
                                        <span>{timeServer}</span>
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
                        <Travel isActived>
                            <div className="header">
                                <div className="title">
                                    {data.travels[0].id < 10 ? <h1>Viagem 0{data.travels[0].id}</h1> : <h1>Viagem {data.travels[0].id}</h1>}
                                    <div>
                                        <img className="arrowDown" src={ArrowDownPrimary} alt="" />
                                        <img className="arrowUp" src={ArrowUpPrimary} alt="" />
                                    </div>
                                </div>
                                <div className="pathResume">
                                    <div className="startStop">
                                        <div className="font1">Início do trajeto</div>
                                        <div className="font2">{data.travels[0].locations[0].location}</div>
                                        <div className="font1">{dateStart[0]} às {timeStart[0]}</div>
                                    </div>
                                    <div className="startStop">
                                        <div className="font1">Fim do trajeto</div>
                                        <div className="font2">{data.travels[0].locations[data.travels[0].locations.length-1].location}</div>
                                        <div className="font1">{dateStop[0]} às {timeStop[0]}</div>
                                    </div>
                                </div>
                                <div className="infos">
                                    <div className="info">
                                        <div className="font1">Duração</div>
                                        <div className="font2">{data.travels[0].duration}</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Ocioso</div>
                                        <div className="font2">{data.travels[0].parked}</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Distância</div>
                                        <div className="font2">{data.travels[0].distance} km</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Velocidade</div>
                                        <div className="font2">{data.travels[0].velocityMin} km/h | {data.travels[0].velocityMax} km/h</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pins">
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[0].locations[0].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[0].locations[0].location}</div>
                                    </div>
                                    <div className="pinInfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[0].locations[0].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[0].locations[0].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[0].locations[0].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[0].locations[1].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[0].locations[1].location}</div>
                                    </div>
                                    <div className="pinInfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[0].locations[1].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[0].locations[1].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[0].locations[1].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[0].locations[2].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[0].locations[2].location}</div>
                                    </div>
                                    <div className="pinInfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[0].locations[2].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[0].locations[2].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[0].locations[2].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Travel>
                        <Travel isActived={false}>
                            <div className="header">
                                <div className="title">
                                    {data.travels[0].id < 10 ? <h1>Viagem 0{data.travels[1].id}</h1> : <h1>Viagem {data.travels[1].id}</h1>}
                                    <div>
                                        <img className="arrowDown" src={ArrowDownPrimary} alt="" />
                                        <img className="arrowUp" src={ArrowUpPrimary} alt="" />
                                    </div>
                                </div>
                                <div className="pathResume">
                                    <div className="startStop">
                                        <div className="font1">Início do trajeto</div>
                                        <div className="font2">{data.travels[1].locations[0].location}</div>
                                        <div className="font1">{dateStart[1]} às {timeStart[1]}</div>
                                    </div>
                                    <div className="startStop">
                                        <div className="font1">Fim do trajeto</div>
                                        <div className="font2">{data.travels[1].locations[data.travels[1].locations.length-1].location}</div>
                                        <div className="font1">{dateStop[1]} às {timeStop[1]}</div>
                                    </div>
                                </div>
                                <div className="infos">
                                    <div className="info">
                                        <div className="font1">Duração</div>
                                        <div className="font2">{data.travels[1].duration}</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Ocioso</div>
                                        <div className="font2">{data.travels[1].parked}</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Distância</div>
                                        <div className="font2">{data.travels[1].distance} km</div>
                                    </div>
                                    <div className="info">
                                        <div className="font1">Velocidade</div>
                                        <div className="font2">{data.travels[1].velocityMin} km/h | {data.travels[1].velocityMax} km/h</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pins">
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[1].locations[0].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[1].locations[0].location}</div>
                                    </div>
                                    <div className="pinInfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[1].locations[0].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[1].locations[0].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[1].locations[0].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[1].locations[1].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[1].locations[1].location}</div>
                                    </div>
                                    <div className="pininfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[1].locations[1].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[1].locations[1].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[1].locations[1].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                                <div className="pin">
                                    <div className="pinTitle">
                                        {data.travels[1].locations[2].alert ? <img src={PinAlert} alt="" /> : <img src={Pin} alt="" />}
                                        <div className="font2">{data.travels[1].locations[2].location}</div>
                                    </div>
                                    <div className="pininfos">
                                        <div className="pinInfo">
                                            <div className="font1">Horário</div>
                                            <div className="font3">{data.travels[1].locations[2].time}</div>
                                        </div>
                                        <div className="pinInfo">
                                            <div className="font1">Alertas</div>
                                            {data.travels[1].locations[2].alert ? <div className="font3" style={{color: theme.COLORS.red_200}}>{data.travels[1].locations[2].alert}</div> : <div className="font3">Sem alertas</div> }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Travel>
                    </div>
                </div>
            </main>
        </Container>
    )
}