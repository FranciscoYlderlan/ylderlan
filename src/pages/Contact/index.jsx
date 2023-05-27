
import { useRef } from "react";

import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";

import emailjs from '@emailjs/browser';


import { Container, Form, Inputs, ListLinks } from "./styles";

import { MdOutlineEmail } from "react-icons/md"; 
import { 
         BsFillPersonFill, 
         BsLinkedin, 
         BsGithub 
        } from "react-icons/bs"


export function Contact() {

    const form = useRef();

    function sendEmail (e) {
        e.preventDefault();
    
        emailjs.sendForm('email_profile', 'template_rhk9ith', form.current, 'UetXQQtxVgOnjK8_2')
            .then((result) => {
                alert('Obrigado por entrar em contato!');
                console.log(result.text);
            }, (error) => {
                alert('Ocorreu um erro ao tentar enviar email.');
                console.log(error.text);
            }).finally(() => {
                e.target.reset();
            });
    };
    
    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Minhas redes sociais">
                    <p>
                        No momento estou disponível para novos trabalhos
                        entre em contato comigo. Vamos marcar uma reunião!
                    </p>
                    <ListLinks>
                        <li>
                            <TextLink 
                                title={'Linkedin'} 
                                href="https://www.linkedin.com/in/franciscoylderlanoliveira/" 
                                target='_blank'
                                icon={BsLinkedin}
                            />
                        </li>
                        <li>
                            <TextLink 
                                title={'Github'} 
                                href="https://github.com/FranciscoYlderlan" 
                                target='_blank'
                                icon={BsGithub}
                            />
                        </li>
                    </ListLinks>
                </Description>
                <Content title="Fale comigo">
                    <Form ref={form} onSubmit={sendEmail}>
                        <Inputs>
                            <Input
                                type="text"
                                labelPlaceholder="Nome"
                                placeholder="Informe seu nome"
                                icon={BsFillPersonFill}
                                name="from_name"
                                errorMessage="Este campo é obrigatório."
                                required
                            />
                            <Input
                                type="email"
                                labelPlaceholder="Email"
                                placeholder="Informe seu email"
                                icon={MdOutlineEmail}
                                name="email"
                                errorMessage="Informe um email válido/Este campo é obrigatório."
                                required
                            />
                            <TextArea
                                labelPlaceholder="Mensagem"
                                placeholder="Informe sua mensagem"
                                name="message"
                                errorMessage="Este campo é obrigatório."
                                required
                            />
                        </Inputs>
                        <Button type="submit" value="Send" title="Enviar"/>
                    </Form>
                </Content>
            </Main>
        </Container>
    );
}
