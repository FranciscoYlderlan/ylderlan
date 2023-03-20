import { Container } from "./styles.js";

export function TextLink ({title, icon: Icon, ...rest}) {
    return (
        <Container title= {title} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}