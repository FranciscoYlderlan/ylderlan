import { Container } from "./styles";
import { Card } from "../../components/Card";
import img1 from "../../assets/stage-5-IMC.png";

import { GithubRepos } from "../../services/Github.service"
import { useEffect, useState } from "react";

export function Viewer({filter,...rest}) {
        
    const [projects, setProjects] = useState([]);

    useEffect(() => {
       
        async function fetchRepos() {
            const repositories = await GithubRepos.searchRepos('franciscoylderlan'); 
            return repositories;
        }

        try {
            fetchRepos().then( response => { 
                if(!response) {
                     alert('Não foi possível carregar a listagem');
                }
                setProjects(response);
            })
        } catch (error) {
            console.log(error);
        }
        
    },[])
    
    return (
        <Container {...rest}>
            {
                projects && projects.map((project) =>{
                    return(
                        <Card key={project.name} src={img1} desc={project.description}/>
                    ) 
                })
            }   
        </Container>
    );
}