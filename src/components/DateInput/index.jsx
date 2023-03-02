import { Container } from "./styles";

import Date from "../../assets/date.svg";

export function DateInput({ classInput, inputWidth, ...rest }) {
    return (
        <Container className={classInput} style={{width: inputWidth}}>
            <input  {...rest} />
            <span><img src={Date} size = {20} /></span>
        </Container>
    )
}