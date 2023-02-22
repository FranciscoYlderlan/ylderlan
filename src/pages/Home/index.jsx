
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Container } from "./styles";
import { AiFillHtml5 } from 'react-icons/ai';
import { SiJavascript, SiStyledcomponents, SiTailwindcss } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';

export function Home() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description>
                    <h2>Experiência</h2>
                    <p>
                        Desenvolvo pequenas aplicações <strong>front-end</strong> e 
                        <strong> back-end</strong>. Aspiro diariamente conhecer, 
                        utilizar e aprender sobre as novas ferramentas que surgem 
                        na comunidade buscando sempre evoluir e aprimorar meus 
                        conhecimentos sobre essa vasta área da programação.
                    </p>
                </Description>
                <Content>
                    <h2>Principais Tecnologias</h2>
                    <p>
                        Segue algumas bibliotecas, frameworks, linguagens e ferramentas 
                        cuja as quais já tive contato e pude desenvolver alguma aplicação.
                    </p>
                    <div>
                        <AiFillHtml5 size={110} {...{title: "Html5"}}/>
                        <SiJavascript size={90} {...{title: "Javascript"}}/>
                        <FaReact size={100} {...{title: "React"}}/>
                        <DiCss3 size={110} {...{title: "Css3"}}/>
                        <FaNodeJs size={100} {...{title: "NodeJs"}}/>
                        <SiStyledcomponents size={110} {...{title: "Styled-Components"}}/>
                        <SiTailwindcss size={100} {...{title: "Tailwindcss"}}/>
                    </div>
                </Content>
            </Main>
        </Container>
    );
}