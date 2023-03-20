import { Container } from "./styles.js";

export function Button({title, icon: Icon, ...rest}) {
    return (
        <Container {...rest}>
            {title}
            {Icon && <Icon size={25}/>}
        </Container>
    );
}