import { Container } from "./styles";

import Clock from "../../assets/clock.svg";
import Date from "../../assets/date.svg";
import ArrowRight from "../../assets/arrowRightPrimary.svg"

export function InfoBoxVehicleDetails({ data, isActive = false, ...rest }) {
    
    const dateTimeGPS = data.commGPS.split(" ");
    const dateTimeServer = data.commServer.split(" ");

    const dateGPS = dateTimeGPS[0]
    const dateServer = dateTimeServer[0]
    const timeGPS = dateTimeGPS[1]
    const timeServer = dateTimeGPS[1]

    const odometer = [data.odometer.slice(0,(Number(data.odometer.length) - 3)), data.odometer.slice(-3,data.odometer.length)].join(".")

    return(
        <Container 
            {...rest}
            isActive = {isActive}
        >
            <div>
                <div className="location">
                    <p>Última localização</p>
                    <span>{data.location}</span>
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
                <div className="infos">
                    <div className="batery" >
                        <p>Bateria</p>
                        <span>{data.batery}v</span>
                    </div>
                    <div className="backup" >
                        <p>Bateria backup</p>
                        <span>{data.bateryBackup}v</span>
                    </div>
                    <div className="velocity" >
                        <p>Velocidade</p>
                        <span>{data.velocity} km/h</span>
                    </div>
                    <div className="hourM" >
                        <p>Horímetro</p>
                        <span>{data.hourMeter}</span>
                    </div>
                    <div className="odometer" >
                        <p>Hodômetro</p>
                        <span>{odometer} km</span>
                    </div>
                    <div className="satellite" >
                        <p>Satélite</p>
                        <span>{data.satellite}</span>
                    </div>
                </div>
            </div>
            <div className="travelHistory">
                <a href="">Histórico de viagens</a>
                <img src={ArrowRight} alt="arrow to right icon" />
            </div>
            <a className="sendCommand" href="">Enviar comando</a>
        </Container>
    )
}