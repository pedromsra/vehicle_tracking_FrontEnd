import { Container } from "./styles";

import { InfoBox } from "../../components/InfoBox"

import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";

import theme from "../../styles/theme.js";

export function Indicador({ data, ...rest }) {
    
    let count = 0;
    
    const indicatorData = data.map(dat => {
        count++;
        if (dat.indication === "+") {
            return {...dat, Indication: Up, BackgroundColor: theme.COLORS.green_100, fontColorIndicator: theme.COLORS.sucess_green_100, keyCount: count}
        } else {
            return {...dat, Indication: Down, BackgroundColor: theme.COLORS.pink_100, fontColorIndicator: theme.COLORS.denger_red_100, keyCount: count}
        }
        
    })

    return(
        <Container 
            {...rest}
        >
            {
                indicatorData.map((dat) => (
                    <div className="infoBoxContainer" key={String(dat.keyCount)}>
                        <InfoBox title={dat.quantity} description={dat.title} icon={dat.icon} situation={dat.variation} background={dat.BackgroundColor} fontColorSituation={dat.fontColorIndicator} indicator={dat.Indication} />
                    </div>
                ))
            }
        </Container>
    )
}