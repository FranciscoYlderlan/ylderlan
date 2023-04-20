import { Container } from "./styles";

export function Content({ title, children }) {
    return (
        <Container 
            animate={{ y: [50, 0], opacity: 1, scale: 1, filter:"blur(0)"}}
            transition={{
                duration: 1.2,
                delay: 0.1,
                type:"tween"
            }}
            initial={{ opacity: .3, scale: .5, filter:"blur(1.2rem)" }}
        >
            <h2>{ title }</h2>
            { children }
        </Container>
    );
}