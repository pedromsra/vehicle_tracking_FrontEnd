import { Container } from "./styles";

export function Button({ icon: Icon, title, loading = false, ...rest }) {
    return(
        <Container 
            type="button" 
            disabled={loading}
            {...rest}
        >
            {Icon && <img src={Icon} size = {20} />}
            { loading ? 'Carregando...' : title }
        </Container>
    )
}