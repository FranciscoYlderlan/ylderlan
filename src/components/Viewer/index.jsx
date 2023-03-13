import { Container } from "./styles";
import { Window } from "../../components/Window";
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
            {projects.length > 0 
            ?
                projects.map((project) =>{
                       return(
                        <Window key={project.name} src={img1} desc={project.description}/>
                    ) 
                })

            :
                <p>n carregou</p>
            }
        </Container>
    );
}