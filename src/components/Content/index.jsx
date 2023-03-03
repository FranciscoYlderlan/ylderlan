import { Container } from "./styles";
import { motion } from "framer-motion";
export function Content({ title, children }) {
    return (
        <Container 
            animate={{ x: [150, 0], opacity: 1, scale: 1 }}
            transition={{
                duration: 1.2,
                delay: 0.1,
                ease: [0.5, 0.71, 1, 1.2],
            }}
            initial={{ opacity: .5, scale: .7}}
        >
            <h2>{ title }</h2>
            { children }
        </Container>
    );
}