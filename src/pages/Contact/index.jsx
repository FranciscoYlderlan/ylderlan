
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Container } from "./styles";

export function Contact() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Minhas redes sociais">
                    <p>
                        No momento estou disponível para novos trabalhos
                        entre em contato comigo. Vamos marcar uma reunião!
                    </p>
                </Description>
                <Content title="Fale comigo">
                    <form>
                        <Input placeholder="Informe seu nome"/>
                        <Input placeholder="Informe seu email"/>
                        <TextArea placeholder="Informe sua mensagem"/>
                    </form>
                </Content>
            </Main>
        </Container>
    );
}