import { Container } from "./styles";

export function Content({ title, children }) {
    return (
        <Container>
            <h2>{ title }</h2>
            { children }
        </Container>
    );
}