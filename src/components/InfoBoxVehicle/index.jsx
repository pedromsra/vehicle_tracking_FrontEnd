import { Container } from "./styles";

import theme from "../../styles/theme"

export function InfoBoxVehicle({ icon: Icon, icon2: Icon2, title, fontColorSituation, situation, description, background, indicator: Indicator, isActive = false, opened = false, ...rest }) {
    
    let Background
    let situationFontColor

    if (background) {
        Background = background
    } else {
        if(situation === "Ligado") {
            Background = theme.COLORS.sucess_green_200;
        } else if (situation === "Desligado") {
            Background = theme.COLORS.danger_dark_300;
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
            opened = {opened}
        >
            <div className="car">
                <span>{Icon && <img src={Icon} />}</span>
                <div className="info">
                    <div className="counting">
                        <div className="title">{title}</div>
                        <div className="situation" style={{backgroundColor: Background, color: situationFontColor}}>{Indicator && <span className="indicator"><img src={Indicator} /></span>}{situation}</div>
                    </div>
                    <div className="description" >{description}</div>
                </div>
            </div>
            {Icon2 && <div className="pin">
                <span> <img src={Icon2} /></span>
            </div>}
        </Container>
    )
}