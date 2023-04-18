import { Container } from "./styles.js";

export function MenuOption ({title, pathname, icon: Icon, active = false, ...rest}) {
    return (
        <Container title= {title} pathname={pathname} active = {active ? 1 : 0} {...rest}>
            {Icon && <Icon size={20}/>}
            {title}
        </Container>
    );
}