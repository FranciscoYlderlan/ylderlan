
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
                <Description>
                    <h2>Experiências</h2>
                    <p>
                        Os projetos aqui demonstrados, em sua maioria, foram 
                        desenvolvidos utilizando linguagem <strong> Javascript</strong>. 
                        Em <strong>front-ends</strong>, também utilizo da biblioteca 
                        <strong> React </strong>, além de <strong> API's </strong> 
                        dependendo do escopo do projeto.
                    </p>
                    <p>
                        No desenvolvimento de <strong>back-ends</strong> utilizo a ferramenta de 
                        denvolvimento <strong>NodeJS</strong>. Para manipulação
                        do banco de dados geralmente uso <strong>Knex</strong> como
                        query builder.
                    </p>
                </Description>
                <Content>
                    <h2>Projetos Pessoais</h2>
                    <p>
                        Meus projetos públicos concluídos ou em 
                        desenvolvimento lançados no meu perfil 
                        do Github.
                    </p>
                </Content>
            </Main>
        </Container>
    );
}