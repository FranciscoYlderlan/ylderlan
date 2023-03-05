import { Container } from "./styles";

export function Main( { children } ) {
    return (
        <Container 
            initial={{scaleY: 0}}
            transition={{duration: .7, ease: [0.5, 0.71, .9, 1]}}
            animate={{scaleY: "100%"}}
        >
            {children}
        </Container>
    );
}
