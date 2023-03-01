import { Container } from "./styles";

export function Window({ isActive, href, description, ...rest }) {
    return (
        <Container {...rest}>
             <img src={href} alt={description} />
        </Container>
    );
}