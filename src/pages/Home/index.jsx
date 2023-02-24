
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { Container } from "./styles";
import { AiFillHtml5 } from 'react-icons/ai';
import { 
    SiJavascript, 
    SiStyledcomponents, 
    SiTailwindcss, 
    SiTypescript,
    SiJest 
} from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';

export function Home() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Experiência">
                    <p>
                        Desenvolvo pequenas aplicações <strong>front-end</strong> e 
                        <strong> back-end</strong>. Aspiro diariamente conhecer, 
                        utilizar e aprender sobre as novas ferramentas que surgem 
                        na comunidade buscando sempre evoluir e aprimorar meus 
                        conhecimentos sobre essa vasta área da programação.
                    </p>
                </Description>
                <Content title="Principais Tecnologias">
                    <p>
                        Segue algumas bibliotecas, frameworks, linguagens e ferramentas 
                        cuja as quais já tive contato e pude desenvolver alguma aplicação.
                    </p>
                    <div>
                        <AiFillHtml5 size={100} {...{title: "Html5"}}/>
                        <SiJavascript size={90} {...{title: "Javascript"}}/>
                        <DiCss3 size={100} {...{title: "Css3"}}/>
                        <SiTypescript size={90} {...{title: "Typescript"}}/>
                        <FaReact size={100} {...{title: "React"}}/>
                        <SiJest size={90} {...{title: "Jest"}}/>
                        <SiStyledcomponents size={100} {...{title: "Styled-Components"}}/>
                        <FaNodeJs size={100} {...{title: "NodeJs"}}/>
                        <SiTailwindcss size={100} {...{title: "Tailwindcss"}}/>
                        
                        
                    </div>
                </Content>
            </Main>
        </Container>
    );
}