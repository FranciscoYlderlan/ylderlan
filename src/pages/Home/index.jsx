
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { IconLink } from "../../components/IconLink";
import { Container, Tools } from "./styles";
import { AiFillHtml5 } from 'react-icons/ai';
import { 
    SiJavascript, 
    SiStyledcomponents, 
    SiTailwindcss, 
    SiTypescript,
    SiJest,
    SiPrisma,
    SiFastify 
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
                    <Tools>
                        <IconLink size={100} title="Html5" icon={AiFillHtml5}
                            href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                        />
                        <IconLink size={90} title="Javascript" icon={SiJavascript}
                            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
                        />
                        <IconLink size={100} title="CSS" icon={DiCss3}
                            href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                        />
                        <IconLink size={90} title="Typescript" icon={SiTypescript}
                            href="https://www.typescriptlang.org/"
                        />
                        <IconLink size={100} title="React" icon={FaReact}
                            href="https://pt-br.reactjs.org/"
                        />
                        <IconLink size={90} title="Jest" icon={SiJest}
                            href="https://jestjs.io/pt-BR/"
                        />
                        <IconLink size={100} title="Styled-Components" icon={SiStyledcomponents}
                            href="https://styled-components.com/"
                        />
                        <IconLink size={100} title="NodeJs" icon={FaNodeJs}
                            href="https://nodejs.org/en/"
                        />
                        <IconLink size={100} title="Tailwindcss" icon={SiTailwindcss}
                            href="https://tailwindcss.com/"
                        />
                        <IconLink size={90} title="Prisma" icon={SiPrisma}
                            href="https://www.prisma.io/"
                        />
                        <IconLink size={100} title="Fastify" icon={SiFastify}
                            href="https://www.fastify.io/"
                        />
                    </Tools>
                </Content>
            </Main>
        </Container>
    );
}