import { Container } from "./styles";

import { useState, useEffect } from "react";

import {myAddress} from "../../services/geocode"

import Data from "../../services/Data.json"

import Map from "../../components/MyMapComponent"

import { Header } from "../../components/Header";
import { Where } from "../../components/Where";
import { Input } from "../../components/Input";
import { InfoBoxVehicle } from "../../components/InfoBoxVehicle"
import { InfoBoxVehicleDetails } from "../../components/InfoBoxVehicleDetails"

import Find from "../../assets/find.svg";
import Car from "../../assets/Car.svg";
import PinSucess from "../../assets/pinSucess.svg";


const a1 = await myAddress(-5.791628736303747, -35.20012342206033)
const a2 = await myAddress(-5.823735425059612, -35.23720227934616)
const a3 = await myAddress(-5.8667691703822396, -35.22621595126147)

const a = [a1, a2, a3]

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

export function Locations(){

    const [carSelected, setCarSelected] = useState([Data.cars[0].id])

    function handleCarSelected(counter){
        const alreadySelected = carSelected.includes(counter);
        if(alreadySelected){
            const filteredAlert = carSelected.filter(car => car !== counter);
            setCarSelected(filteredAlert);
        } else {
            setCarSelected(prevState => [...prevState, counter]);
        }
    }

    const carLocationNow = Data.cars.map(car => {
        return {lat: car.localNow[0], lng: car.localNow[1]}
    })

    const center = {lat: carLocationNow[Math.floor(carLocationNow.length/2)].lat, lng: carLocationNow[Math.floor(carLocationNow.length/2)].lng}

    let zoom = Math.abs(carLocationNow[carLocationNow.length-1].lat-carLocationNow[0].lat)*1000
    console.log(center)
    if (zoom < 13) {
        zoom = 15
    } else if (zoom > 20 && zoom < 100) {
        zoom = 13
    } else if (zoom > 100 && zoom < 1000) {
        zoom = 11
    } else if (zoom > 1000) {
        zoom = 6.5
    }

    return (
        <Container>
            <Header />
            <Where title="Localização" />
            <main>
                <div className="APIMAPS"><Map center={center} location={carLocationNow} markIcon={Car} zoom={zoom} /></div>
                <div className="vehicles">
                    <h1>Veículos</h1>
                    <Input icon={Find} placeholder="Pesquisar" classInput="findVehicles" />
                    <div className="vehiclesContainer">
                            {
                                Data && Data.cars.map(car => (<div className="cards" key={String(car.id)}>
                                    <InfoBoxVehicle title={car.plate} situation={car.situation}  description={car.model} icon={Car} icon2={PinSucess} isActive opened={carSelected.includes(String(car.id))} onClick={() => handleCarSelected(car.id)} />
                                    <InfoBoxVehicleDetails id={car.id} data={
                                        {
                                            location: a[car.id-1],
                                            commGPS: car.commGPS,
                                            commServer: car.commServer,
                                            batery: car.batery,
                                            bateryBackup: car.bBackup,
                                            velocity: car.velocityNow,
                                            hourMeter: car.hourMeter,
                                            odometer: car.odometer,
                                            satellite: car.satellite
                                        }
                                    } isActive={carSelected.includes(String(car.id))} /></div>
                                ))
                            }
                    </div>
                </div>
            </main>
        </Container>
    )
}