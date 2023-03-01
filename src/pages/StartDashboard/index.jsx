import { Container } from "./styles";

import theme from "../../styles/theme"

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

export function StartDashboard(){
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
                </div>
                <div className="table">
                    <div className="tableContainer">
                        <div className="header">
                            <div className="headerTabs">
                                <div className="Tab1" style={{color: theme.COLORS.secondary, borderBottom: "2px solid "+theme.COLORS.secondary}} >Veículos</div>
                                <div className="Tab2" style={{color: theme.COLORS.light_500, borderBottom: "2px solid "+theme.COLORS.light_100}} >Alertas</div>
                            </div>
                            <Input icon={Find} inputWidth="20.8rem" placeholder="Pesquisar" />
                        </div>
                        <table className="vehicles" cellSpacing="0" >
                            <tbody>

                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr><tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr><tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                                <tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr><tr>
                                    <td><div>Placa<span>Apelido</span></div></td>
                                    <td><div>Categoria<span>Modelo</span></div></td>
                                    <td><a>Mais informações</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="tableContainer" style={{display: "none"}}>
                        <div className="header">
                            <div className="headerTabs">
                                <div className="Tab1" style={{color: theme.COLORS.light_500, borderBottom: "2px solid "+theme.COLORS.light_100}} >Veículos</div>
                                <div className="Tab2" style={{color: theme.COLORS.secondary, borderBottom: "2px solid "+theme.COLORS.secondary}} >Alertas</div>
                            </div>
                            <Input icon={Find} inputWidth="20.8rem" placeholder="Pesquisar" />
                        </div>
                        <div className="alerts" >
                            <div className="todayAlert" >
                                <h3>Hoje</h3>
                                <div className="alertContainer">
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" style={{display: "none"}}/></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" /></button>
                                            </div>
                                        </div>
                                        <div className="alertBody">
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="yesterdayAlert" >
                                <h3>Ontem</h3>
                                <div className="alertContainer">
                                    <div className="alert">
                                            <div className="alertHead">
                                                <div className="titleContainer">
                                                    <img src={Alert} alt="alert icon" />
                                                    <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                                </div>
                                                <div className="arrowContainer">
                                                    <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                    <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                                </div>
                                            </div>
                                            <div className="alertBody" style={{display: "none"}}>
                                                <div className="alertLocal">
                                                    <p>Localização</p>
                                                    <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                                </div>
                                                <div className="alertInfo">
                                                    <div className="alertAt">
                                                        <p>Momento da ocorrencia</p>
                                                        <div className="momentContainer">
                                                            <div className="alertMoment">
                                                                <img src={Date} alt="calendar icon" />
                                                                <span>03/11/2022</span>
                                                            </div>
                                                            <div className="alertMoment">
                                                                <img src={Clock} alt="clock icon" />
                                                                <span>12:47</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="alertVelocity">
                                                        <p>Velocidade</p>
                                                        <span>100 km/h</span>
                                                    </div>
                                                </div>
                                            </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="alert">
                                        <div className="alertHead">
                                            <div className="titleContainer">
                                                <img src={Alert} alt="alert icon" />
                                                <p>O veículo Uno Drive 1.0 RGM8F93 passou do limite de velocidade</p>
                                            </div>
                                            <div className="arrowContainer">
                                                <button><img className="arrow" src={ArrowUp} alt="arrow up" /></button>
                                                <button><img className="arrow" src={ArrowDown} alt="arrow up" style={{display: "none"}}/></button>
                                            </div>
                                        </div>
                                        <div className="alertBody" style={{display: "none"}}>
                                            <div className="alertLocal">
                                                <p>Localização</p>
                                                <span>Rua Rio Beberibe, 186, Emaús, Parnamirim - RN</span>
                                            </div>
                                            <div className="alertInfo">
                                                <div className="alertAt">
                                                    <p>Momento da ocorrencia</p>
                                                    <div className="momentContainer">
                                                        <div className="alertMoment">
                                                            <img src={Date} alt="calendar icon" />
                                                            <span>03/11/2022</span>
                                                        </div>
                                                        <div className="alertMoment">
                                                            <img src={Clock} alt="clock icon" />
                                                            <span>12:47</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="alertVelocity">
                                                    <p>Velocidade</p>
                                                    <span>100 km/h</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}