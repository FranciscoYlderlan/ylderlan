
import { useState } from "react";
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { Button } from "../../components/Button";
import { TextLink } from "../../components/TextLink";
import { Container, ListLinks } from "./styles";


import { MdOutlineEmail } from "react-icons/md"; 
import { 
         BsFillPersonFill, 
         BsDiscord, 
         BsLinkedin, 
         BsGithub 
        } from "react-icons/bs"






export function Contact() {
    const standardMail = {
        name: '',
        email: '',
        subject: 'StaticForms - Contact Form',
        honeypot: '', // if any value received in this field, form submission will be ignored.
        message: '',
        replyTo: '@', // this will set replyTo of email to email address entered in the form
        accessKey: '1cd2bec0-2204-4068-aab9-8529a3321afc' // get your access key from https://www.staticforms.xyz
    }
    const [mail, setMail] = useState(standardMail);
        
    const handleChange = e => setMail({ ...mail, [e.target.name]: e.target.value });
    
    const handleSubmit = async e => {
        
        e.preventDefault();
        
        try {
            const res = await fetch('https://api.staticforms.xyz/submit', {
                method: 'POST',
                body: JSON.stringify(mail),
                headers: { 'Content-Type': 'application/json' }
            });
    
            const json = await res.json();
        
            if (json.success) {
                alert('Obrigado por entrar em contato!');
            } else {
                alert(json.message);
            }
        } catch (error) {
            console.log('An error occurred', error);
            alert('Um error ocorreu ao tentar enviar sua mensagem.');
        }finally{
            setMail(standardMail);
        } 
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
                        <li>
                            <TextLink 
                                title={'Discord'} 
                                href="https://discord.com/invite/ylderlan#6442" 
                                target='_blank'
                                icon={BsDiscord}
                            />
                        </li>
                    </ListLinks>
                </Description>
                <Content title="Fale comigo">
                    <form 
                        action="https://api.staticforms.xyz/submit" 
                        method="post"
                        onSubmit={handleSubmit}
                    >
                        <Input 
                            type="text" 
                            placeholder="Informe seu nome" 
                            icon={BsFillPersonFill}
                            name="name"
                            value={mail.name}
                            onChange={handleChange} 
                            required
                        />
                        <Input 
                            type="email" 
                            placeholder="Informe seu email" 
                            icon={MdOutlineEmail}
                            name="email"
                            value={mail.email}
                            onChange={handleChange} 
                            required
                        />
                        <TextArea 
                            placeholder="Informe sua mensagem" 
                            name="message"
                            value={mail.message}
                            onChange={handleChange}
                            required
                        />
                        <Button type="submit" title="Enviar"/>
                    </form>
                </Content>
            </Main>
        </Container>
    );
}