
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Container } from "./styles";

export function Profile() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description/>
                <Content/>
            </Main>
        </Container>
    );
}