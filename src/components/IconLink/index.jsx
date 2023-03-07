import { Container } from "./styles.js";

export function IconLink ({size, title, icon: Icon, ...rest}) {
    return (
        <Container {...rest} target="_blank">
            {Icon && <Icon size={size} {...{"title": title}}/>}
        </Container>
    );
}