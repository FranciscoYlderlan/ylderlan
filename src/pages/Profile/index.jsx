
import { Viewer } from "../../components/Viewer";

import { Menu } from "../../components/Menu";
import { Tag } from "../../components/Tag";
import { Main } from "../../components/Main";
import { Description } from "../../components/Description";
import { Content } from "../../components/Content";


import { useEffect, useState } from "react";

import { Container, Tags } from "./styles";


export function Profile() {
    
    const [option, setOption] = useState(['all']);

    function handleSelectionOptions(selectedOption){

        if(option.includes(selectedOption)){
            setOption(prevState => prevState.filter( option => !option.includes(selectedOption)));
        }else{
            setOption(prevState => [...prevState, selectedOption]);
        }

        if(option.length == 1) {
            setOption(prevState => prevState.filter(option => !option.includes('all')));
        }

        if(selectedOption == 'all') {
            setOption(['all']);
        }

        if(selectedOption == 'page') {
            setOption(prevState => prevState.filter( option => !option.includes('code')))
        }

        if(selectedOption == 'code') {
            setOption(prevState => prevState.filter( option => !option.includes('page')))
        }

        if(selectedOption == 'new') {
            setOption(prevState => prevState.filter( option => !option.includes('old')))
        }

        if(selectedOption == 'old') {
            setOption(prevState => prevState.filter( option => !option.includes('new')))
        }
    }
    useEffect(() => {
        if(option.length == 0) {
            setOption(['all']);
        }
    },[option])

    return (
        <Container>
            <Menu/>
            <Main>
                <Description title="Produções">
                    <p>
                        Os projetos aqui demonstrados, em sua maioria, foram 
                        desenvolvidos utilizando <strong>Javascript</strong> e 
                        <strong> Typescript</strong>. Em <strong>front-ends</strong>, 
                        também utilizo da biblioteca <strong>React</strong> e/ou 
                        <strong> React Native</strong>, além de variadas <strong>API's </strong> 
                        e <strong>bibliotecas</strong>, dependendo do escopo de cada projeto.
                    </p>
                    <p>
                        No desenvolvimento de <strong>back-ends </strong> 
                        utilizo a ferramenta de gerenciamento de ambiente 
                        <strong> NodeJS </strong> para configuração 
                        instalação de pacotes. 

                    </p>
                </Description>
                <Content title="Projetos Pessoais">
                    <p>
                        Meus projetos públicos concluídos ou em 
                        desenvolvimento acessados diretamente do meu repositório 
                        do Github.
                    </p>   
                    <Tags>
                        <Tag 
                            isActive={option.includes('all')}
                            title='Todos' 
                            onClick={() => handleSelectionOptions('all')}
                        />
                        <Tag 
                            isActive={option.includes('new')}
                            title='Novos'
                            onClick={() => handleSelectionOptions('new')}
                        />
                        <Tag 
                            isActive={option.includes('old')}
                            title='Antigos'
                            onClick={() => handleSelectionOptions('old')}
                        />
                        <Tag 
                            isActive={option.includes('page')}
                            title='Páginas' 
                            onClick={() => handleSelectionOptions('page')}
                        />
                        <Tag 
                            isActive={option.includes('code')}
                            title='Códigos' 
                            onClick={() => handleSelectionOptions('code')}
                        />
                    </Tags>

                    <Viewer filter={option}/>
            
                </Content>
            </Main>
        </Container>
    );
}