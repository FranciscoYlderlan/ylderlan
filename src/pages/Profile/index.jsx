
import { Viewer } from "../../components/Viewer";
import { Window } from "../../components/Window";
import { Menu } from "../../components/Menu";
import { Tag } from "../../components/Tag";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";
import img1 from "../../assets/stage-5-IMC.png";
import img2 from "../../assets/stage-6-git-favorites.png";
import img3 from "../../assets/stage-6-spa-universe.png";
import img4 from "../../assets/stage5-jogo-da-adivinhacao.png";

import { Container, Tags } from "./styles";


export function Profile() {
    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Produções">
                    <p>
                        Os projetos aqui demonstrados, em sua maioria, foram 
                        desenvolvidos utilizando linguagem<strong> Javascript</strong>. 
                        Em <strong>front-ends</strong>, também utilizo da biblioteca 
                        <strong> React</strong>, além de variadas <strong>API's</strong> dependendo 
                        do escopo do projeto.
                    </p>
                    <p>
                        No desenvolvimento de <strong>back-ends </strong> 
                        utilizo a ferramenta de denvolvimento <strong>NodeJS </strong>
                        para instalação e gerenciamento de pacotes. 
                        {/* Para manipulação do banco de dados geralmente uso
                        <strong> Knex</strong> como query builder ou mesmo 
                        <strong> Prisma</strong> como ORM. */}
                    </p>
                </Description>
                <Content title="Projetos Pessoais">
                    <p>
                        Meus projetos públicos concluídos ou em 
                        desenvolvimento lançados no meu perfil 
                        do Github.
                    </p>
                    <Tags>
                        <Tag title='Todos'/>
                        <Tag title='Novos'/>
                        <Tag title='Antigos'/>
                        <Tag title='Páginas' isActive/>
                        <Tag title='Códigos'/>
                    </Tags>
                    <Viewer>
                        <Window src={img1} desc="Descrição pra cacete 
                        Descrição pra cacete Descrição pra cacete Descrição pra cacete Descrição pra cacete
                        Descrição pra cacete Descrição pra cacete Descrição pra cacete Descrição pra cacete"/>
                        <Window src={img2}/>
                        <Window src={img3}/>
                        <Window src={img4}/>
                        <Window src={img1}/>
                    </Viewer>
                </Content>
            </Main>
        </Container>
    );
}