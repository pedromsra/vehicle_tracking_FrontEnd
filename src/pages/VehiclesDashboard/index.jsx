import { Container, Table, Legend } from "./styles";

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { Input } from "../../components/Input";
import { InfoBoxVehicle } from "../../components/InfoBoxVehicle"
import { Section } from "../../components/Section";
import KmChart from "../../components/DistributedChart";

import Find from "../../assets/find.svg";
import Car from "../../assets/Car.svg";
import PinSucess from "../../assets/pinSucess.svg";
import PinStoped from "../../assets/pinStoped.svg";
import Origin from "../../assets/origin.svg";
import Destiny from "../../assets/destiny.svg";
import Route from "../../assets/route.svg";


export function VehiclesDashboard(){
    return (
        <Container>
            <Header />
            <Where title="Dashboard" />
            <main>
                <div className="vehicles">
                    <h2>Veículos</h2>
                    <Input icon={Find} inputWidth="33.2rem" placeholder="Pesquisar" />
                    <div className="vehiclesList">
                        <InfoBoxVehicle title="RGM8F93" situation="Ligado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive />
                        <InfoBoxVehicle title="HEX4934" situation="Parado"  description="Uno Drive 1.0" icon={Car} icon2={PinStoped} />
                    </div>
                    <div className="borderRight" />
                </div>
                <div className="vehicleDetails">
                    <div className="detailsTitle">
                        <img src={Car} alt="Car icon" />
                        <div>
                            <h3>RGM8F93</h3>
                            <p>Uno Drive 1.0</p>
                        </div>
                    </div>
                    <div className="detailsBody">
                        <Section classSection="lastTravels" title="Últimas viagens">
                            <h2 className="APIMAPS">INSERIR MAPA DA API GOOGLE MAPS AQUI</h2>
                            <div className="travelsFromAToB" >
                                <div className="travelFromAToB">
                                    <div className="origin">
                                        <div className="originRouteSVG">
                                            <img src={Origin} alt="" />
                                            <img src={Route} alt="" />
                                        </div>
                                        <p>R. Rio Beberibe, 30a - Emaús, Parnamirim - RN, 59149-240</p>
                                    </div>
                                    <div className="destiny">
                                        <img src={Destiny} alt="" />
                                        <p>Av. Bela Parnamirim, 933 - Monte Castelo, Parnamirim - RN, 59146-280</p>
                                    </div>
                                    <div className="borderBottom" />
                                </div>
                                <div className="travelFromAToB">
                                    <div className="origin">
                                        <div className="originRouteSVG">
                                            <img src={Origin} alt="" />
                                            <img src={Route} alt="" />
                                        </div>
                                        <p>R. Rio Beberibe, 30a - Emaús, Parnamirim - RN, 59149-240</p>
                                    </div>
                                    <div className="destiny">
                                        <img src={Destiny} alt="" />
                                        <p>Av. Bela Parnamirim, 933 - Monte Castelo, Parnamirim - RN, 59146-280</p>
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
                            <Input classInput="input" placeholder="pesquisar" inputWidth="33.2rem" icon={Find} />
                            <Table cellSpacing="0" >
                                <thead>
                                    <tr>
                                        <th>Destino</th>
                                        <th>Data</th>
                                        <th>Horário</th>
                                        <th>Distância</th>
                                        <th>Duração</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Av. Bela Parnamirim, 933 - Monte Castelo, Parnamirim - RN, 59146-280</td>
                                        <td>10/01/23</td>
                                        <td>13:59</td>
                                        <td>4,3 km</td>
                                        <td>7 min</td>
                                        <td><a href="">Abrir no mapa</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Section>
                    </div>
                </div>
            </main>
        </Container>
    )
}