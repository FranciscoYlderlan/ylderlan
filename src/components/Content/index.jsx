import { Container } from "./styles";
import { motion } from "framer-motion";
export function Content({ title, children }) {
    return (
        <Container 
            animate={{ y: [150, 0], opacity: 1, scale: 1, filter:"blur(0)"}}
            transition={{
                duration: 1.2,
                delay: 0.1,
                // ease: [0.5, 0.71, 1, 1.2],
                type:"tween"
            }}
            initial={{ opacity: .3, scale: .7, filter:"blur(12px)" }}
        >
            <h2>{ title }</h2>
            { children }
        </Container>
    );
}