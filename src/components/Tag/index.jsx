import { Container } from "./styles";

export function Tag({ title, isActive }) {
    return (
        <Container isActive = {isActive}>
            <strong>{title}</strong>
        </Container>
    );
}