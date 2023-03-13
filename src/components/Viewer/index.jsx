import { Container } from "./styles";
import { Card } from "../../components/Card";
import img1 from "../../assets/stage-5-IMC.png";

import { GithubRepos } from "../../services/Github.service"
import { useEffect, useState } from "react";

export function Viewer({filter=null,...rest}) {
        
    const [projects, setProjects] = useState([]);

    useEffect(() => {
       
        async function fetchRepos() {
            const repositories = await GithubRepos.searchRepos(); 
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

    useEffect(() => {
       
        async function fetchRepos() {
            const repositories = await GithubRepos.filterRepos(filter); 
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
        
    },[filter])
    
    return (
        <Container {...rest}>
            {
                projects && projects.map((project) =>{
                    return(
                        <Card 
                            key={project.name} 
                            uploaded={project.has_pages} 
                            desc={project.description}
                        />
                    ) 
                })
            }   
        </Container>
    );
}