import { Container } from "./styles";


export function Section({ title, children, classSection, ...rest }){

    return (
        <Container className={classSection}>
            <div className="title">{title}</div>
            <div {...rest}>{children}</div>
        </Container>
    )
}