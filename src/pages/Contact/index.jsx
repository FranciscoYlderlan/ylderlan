
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { MdOutlineEmail } from "react-icons/md"; 
import { BsFillPersonFill } from "react-icons/bs"

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
                        <Input 
                            type="email" 
                            placeholder="Informe seu email" 
                            icon={MdOutlineEmail} 
                            required
                        />
                        <Input 
                            type="text" 
                            placeholder="Informe seu nome" 
                            icon={BsFillPersonFill} 
                            required
                        />
                        <TextArea placeholder="Informe sua mensagem" required/>
                        <Button title="Enviar"/>
                    </form>
                </Content>
            </Main>
        </Container>
    );
}