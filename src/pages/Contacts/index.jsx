
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Container } from "./styles";

export function Contacts() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description>
                    <h2>Minhas redes sociais</h2>
                    <p>
                        No momento estou disponível para novos trabalhos
                        entre em contato comigo. Vamos marcar uma reunião!
                    </p>
                </Description>
                <Content>
                    <form>
                        <h2>Fale comigo</h2>
                        <div className="col-2">
                            <Input placeholder="Informe seu nome"/>
                            <Input placeholder="Informe seu email"/>
                        </div>
                        <div className="wrapper-mensagem">
                            <TextArea placeholder="Informe sua mensagem"/>
                        </div>
                    </form>
                </Content>
            </Main>
        </Container>
    );
}