import { Container } from "./styles";

export function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            <span>{Icon && <img src={Icon} size = {20} />}</span>
            <input {...rest} />
        </Container>
    )
}