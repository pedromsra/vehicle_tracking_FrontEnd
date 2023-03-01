import { Container } from "./styles";

export function Input({ icon: Icon, classInput, inputWidth, ...rest }) {
    return (
        <Container className={classInput} style={{width: inputWidth}}>
            <span>{Icon && <img src={Icon} size = {20} />}</span>
            <input  {...rest} />
        </Container>
    )
}