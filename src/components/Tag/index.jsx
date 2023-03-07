import { Container } from "./styles";

export function Tag({ title, isActive = false, ...rest }) {
    return (
        <Container isActive = {isActive} {...rest}>
            <strong>{title}</strong>
        </Container>
    );
}