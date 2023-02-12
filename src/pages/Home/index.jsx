import { Menu } from "../../components/Menu";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Container } from "./styles";

export function Home() {
    return (
        <Container>
            <Menu/>
            <Description/>
            <Content/>
        </Container>
    );
}