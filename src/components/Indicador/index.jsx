import { Container } from "./styles";

import Up from "../../assets/up.svg";
import Down from "../../assets/down.svg";

import theme from "../../styles/theme.js";

export function Indicador({ data, ...rest }) {
    
    let count = 0;
    
    const indicatorData = data.map(dat => {
        count++;
        if (dat.indication === "+") {
            return {...dat, Indication: Up, BackgroundColor: theme.COLORS.green_100, keyCount: count}
        } else {
            return {...dat, Indication: Down, BackgroundColor: theme.COLORS.pink_100, keyCount: count}
        }
        
    })

    return(
        <Container 
            {...rest}
        >
            {
                indicatorData.map((dat) => (
                    <div key={String(dat.keyCount)}>
                        <span>{dat.icon && <img src={dat.icon} />}</span>
                        <div className="info">
                            <div className="counting">
                                <h2>{dat.quantity}</h2>
                                <h3 style={{backgroundColor: dat.BackgroundColor}}><span><img src={dat.Indication} /></span>{dat.variation}</h3>
                            </div>
                            <p>{dat.title}</p>
                        </div>
                    </div>
                ))
            }
        </Container>
    )
}