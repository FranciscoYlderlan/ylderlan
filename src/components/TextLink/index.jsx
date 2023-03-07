import { Container } from "./styles.js";

export function TextLink ({title, isActive ,icon: Icon, ...rest}) {
    return (
        <Container title= {title} isActive = {isActive} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}