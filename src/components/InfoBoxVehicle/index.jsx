import { Container } from "./styles";

import theme from "../../styles/theme"

export function InfoBoxVehicle({ icon: Icon, icon2: Icon2, title, fontColorSituation, situation, description, background, indicator: Indicator, isActive = false, ...rest }) {
    
    let Background
    let situationFontColor

    if (background) {
        Background = background
    } else {
        if(situation === "Ligado") {
            Background = theme.COLORS.sucess_green_200;
        } else if (situation === "Desligado") {
            Background = theme.COLORS.danger_dark_200;
        } else {
            Background = theme.COLORS.secondary;
        }
    }

    if(fontColorSituation){
        situationFontColor = fontColorSituation
    } else {
        situationFontColor = theme.COLORS.light_100;
    }

    return(
        <Container 
            {...rest}
            isActive = {isActive}
        >
            <div className="car">
                <span>{Icon && <img src={Icon} />}</span>
                <div className="info">
                    <div className="counting">
                        <h2>{title}</h2>
                        <h3 style={{backgroundColor: Background, color: situationFontColor}}>{Indicator && <span className="indicator"><img src={Indicator} /></span>}{situation}</h3>
                    </div>
                    <p>{description}</p>
                </div>
            </div>
            {Icon2 && <div className="pin">
                <span> <img src={Icon2} /></span>
            </div>}
        </Container>
    )
}