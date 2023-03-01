import { Container } from "./styles";

export function Window({ title, isActive, children, ...rest }) {
    return (
        <Container isActive = {isActive} {...rest}>
             { children }
        </Container>
    );
}