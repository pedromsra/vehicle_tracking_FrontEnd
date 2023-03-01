import { Container } from "./styles";

export function InfoBox({ icon: Icon, title, fontColorSituation, situation, description, background, indicator: Indicator, ...rest }) {
    
    return(
        <Container 
            {...rest}
        >
            <span>{Icon && <img src={Icon} />}</span>
            <div className="info">
                <div className="counting">
                    <h2>{title}</h2>
                    <h3 style={{backgroundColor: background, color: fontColorSituation}}><span className="indicator">{Indicator && <img src={Indicator} />}</span>{situation}</h3>
                </div>
                <p>{description}</p>
            </div>
        </Container>
    )
}