import Geocode from "react-geocode";

Geocode.setApiKey("AIzaSyBq0hGuUOIkahRznQojlHs2V_kCLaobxJ0");
Geocode.setLanguage("pt-br");
Geocode.setLocationType("APPROXIMATE");
Geocode.enableDebug();

export async function myAddress(lat, lng){
    const latitude = String(lat);
    const longitude = String(lng)
    const myadress = await Geocode.fromLatLng(latitude, longitude).then(
        (response) => {
            const address = response.results[0].formatted_address;
            return address
        },
        (error) => {
            console.error("Endereço não encontrado");
            return "Rua, Nº - Bairro, Cidade - UF"
        }
    );

    const adresstemp = myadress.split(",")
    

    return adresstemp[0]+","+adresstemp[1]+","+adresstemp[2]
}