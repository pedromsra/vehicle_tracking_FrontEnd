import { Container } from "./styles";

import Home from "../../assets/home.svg"
import ArrowRight from "../../assets/arrowRight.svg"

export function Where({ title, ...rest }) {
    return (
        <Container>
            <div className="where">
                <span><img src={Home} alt="icone home" /></span>
                <span><img src={ArrowRight} alt="seta para direita" /></span>
                <p>{title}</p>
            </div>
            <div className="borderBottom" />
        </Container>
    )
}