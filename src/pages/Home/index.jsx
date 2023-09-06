
import { Menu } from "../../components/Menu";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import { IconLink } from "../../components/IconLink";
import { Container, Tools } from "./styles";
import { AiFillHtml5 } from 'react-icons/ai';
import { BsFillDatabaseFill } from 'react-icons/bs';

import { 
    SiJavascript, 
    SiStyledcomponents, 
    SiTailwindcss, 
    SiTypescript,
    SiJest,
    SiPrisma,
    SiFastify,
    SiExpo,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiVercel,
} from 'react-icons/si';

import { LiaFigma, LiaSass } from "react-icons/lia";

import { FaReact, FaNodeJs } from 'react-icons/fa';
import { DiCss3 } from 'react-icons/di';


// const IconsTools = [{
//     name:,
//     size:,
//     link:,
//     tooltip:,
// }]

export function Home() {

    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Experiência">
                    <p>
                        Um apaixonado pela programação e em ajudar e contribuir
                        com meus conhecimentos. Desenvolvo aplicações
                        <strong> front-end</strong> e <strong> back-end</strong>. 
                        Aspiro diariamente conhecer, utilizar e aprender sobre 
                        novas ferramentas que surgem na comunidade buscando
                        sempre evoluir e aprimorar meus conhecimentos sobre essa 
                        vasta área da programação.
                    </p>
                </Description>
                <Content title="Principais Tecnologias">
                    <p>
                        Segue algumas bibliotecas, frameworks, linguagens e ferramentas 
                        cuja as quais já tive contato e pude desenvolver alguma aplicação.
                    </p>
                    <Tools>
                        <IconLink size={60} title="Html5" icon={AiFillHtml5}
                            href="https://developer.mozilla.org/en-US/docs/Learn/HTML"
                        />
                        <IconLink size={50} title="CSS" icon={DiCss3}
                            href="https://developer.mozilla.org/en-US/docs/Learn/CSS"
                        />
                        <IconLink size={50} title="Javascript" icon={SiJavascript}
                            href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript"
                        />
                        <IconLink size={50} title="Typescript" icon={SiTypescript}
                            href="https://www.typescriptlang.org/"
                        />
                        <IconLink size={60} title="React" icon={FaReact}
                            href="https://legacy.reactjs.org/docs/getting-started.html"
                        />
                        <IconLink size={60} title="NodeJs" icon={FaNodeJs}
                            href="https://nodejs.org/en/about"
                        />
                        <IconLink size={50} title="Prisma" icon={SiPrisma}
                            href="https://www.prisma.io/"
                        />
                        <IconLink size={60} title="Fastify" icon={SiFastify}
                          href="https://www.fastify.io/"
                        />
                        <IconLink size={60} title="Tailwindcss" icon={SiTailwindcss}
                            href="https://tailwindcss.com/"
                        />
                        <IconLink size={60} title="Styled-Components" icon={SiStyledcomponents}
                            href="https://styled-components.com/"
                        />
                        <IconLink size={50} title="SASS" icon={LiaSass}
                            href="https://sass-lang.com/"
                        />
                        <IconLink size={50} title="Jest" icon={SiJest}
                            href="https://jestjs.io/pt-BR/"
                        />
                        <IconLink size={50} title="Expo Go" icon={SiExpo}
                            href="https://expo.dev/"
                        />
                         <IconLink size={50} title="SQL" icon={BsFillDatabaseFill}
                            href="https://www.w3schools.com/sql/"
                        />
                        <IconLink size={50} title="PostgreSQL" icon={SiPostgresql}
                            href="https://www.postgresql.org/"
                        />
                        <IconLink size={50} title="MySQL" icon={SiMysql}
                            href="https://www.mysql.com/"
                        />
                        <IconLink size={50} title="Docker" icon={SiDocker}
                            href="https://www.docker.com/"
                        />
                        <IconLink size={50} title="Figma" icon={LiaFigma}
                            href="https://www.figma.com/"
                        />
                        <IconLink size={50} title="Vercel" icon={SiVercel}
                            href="https://vercel.com/"
                        />
                    </Tools>
                </Content>
            </Main>
        </Container>
    );
}