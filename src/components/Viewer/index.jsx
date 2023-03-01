import { Container } from "./styles";

export function Viewer({ title, isActive }) {
    return (
        <Container isActive = {isActive}>
            <strong>{title}</strong>
        </Container>
    );
}