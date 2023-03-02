import { Container } from "./styles";

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { Input } from "../../components/Input";
import { InfoBoxVehicle } from "../../components/InfoBoxVehicle"
import { InfoBoxVehicleDetails } from "../../components/InfoBoxVehicleDetails"

import Find from "../../assets/find.svg";
import Car from "../../assets/Car.svg";
import PinSucess from "../../assets/pinSucess.svg";


export function Locations(){
    return (
        <Container>
            <Header />
            <Where title="Localização" />
            <main>
                <div className="APIMAPS">INSERIR MAPA DA API GOOGLE MAPS AQUI</div>
                <div className="vehicles">
                    <h1>Veículos</h1>
                    <Input icon={Find} placeholder="Pesquisar" classInput="findVehicles" />
                    <div className="vehiclesContainer">
                        <div>
                            <InfoBoxVehicle title="RGM8F93" situation="Ligado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive opened />
                            <InfoBoxVehicleDetails data={
                                {
                                    location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                                    commGPS: "03/11/2022 12:47",
                                    commServer: "03/11/2022 12:47",
                                    batery: "12.9",
                                    bateryBackup: "3.9",
                                    velocity: "60",
                                    hourMeter: "11:21:45",
                                    odometer: "345234",
                                    satellite: "20"
                                }
                            } isActive />
                        </div>
                        <div>
                            <InfoBoxVehicle title="RGM8F93" situation="Parado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive  />
                            <InfoBoxVehicleDetails data={
                                {
                                    location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                                    commGPS: "03/11/2022 12:47",
                                    commServer: "03/11/2022 12:47",
                                    batery: "12.9",
                                    bateryBackup: "3.9",
                                    velocity: "60",
                                    hourMeter: "11:21:45",
                                    odometer: "345234",
                                    satellite: "20"
                                }
                            } />
                        </div>
                        <div>
                            <InfoBoxVehicle title="RGM8F93" situation="Ligado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive  />
                            <InfoBoxVehicleDetails data={
                                {
                                    location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                                    commGPS: "03/11/2022 12:47",
                                    commServer: "03/11/2022 12:47",
                                    batery: "12.9",
                                    bateryBackup: "3.9",
                                    velocity: "60",
                                    hourMeter: "11:21:45",
                                    odometer: "345234",
                                    satellite: "20"
                                }
                            } />
                        </div>
                        <div>
                            <InfoBoxVehicle title="RGM8F93" situation="Ligado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive  />
                            <InfoBoxVehicleDetails data={
                                {
                                    location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                                    commGPS: "03/11/2022 12:47",
                                    commServer: "03/11/2022 12:47",
                                    batery: "12.9",
                                    bateryBackup: "3.9",
                                    velocity: "60",
                                    hourMeter: "11:21:45",
                                    odometer: "345234",
                                    satellite: "20"
                                }
                            } />
                        </div>
                        <div>
                            <InfoBoxVehicle title="RGM8F93" situation="Desligado"  description="Uno Drive 1.0" icon={Car} icon2={PinSucess} isActive  />
                            <InfoBoxVehicleDetails data={
                                {
                                    location: "Rua Rio Beberibe, 186, Emaús, Parnamirim - RN",
                                    commGPS: "03/11/2022 12:47",
                                    commServer: "03/11/2022 12:47",
                                    batery: "12.9",
                                    bateryBackup: "3.9",
                                    velocity: "60",
                                    hourMeter: "11:21:45",
                                    odometer: "345234",
                                    satellite: "20"
                                }
                            } />
                        </div>
                    </div>
                </div>
            </main>
        </Container>
    )
}