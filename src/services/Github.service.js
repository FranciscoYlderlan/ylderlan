import * as utils from "../providers/utils.js"

export class GithubRepos {
    

    static async searchRepos(sort='',direction='') {
        const endpoint = `https://api.github.com/users/franciscoylderlan/repos?sort=${sort}&direction=${direction}`
        const result = await fetch(endpoint,
        {
            headers:{
                'Authorization': 'Bearer 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'
            }
        });
        const repos_infos = await result.json();
        let formatted_repos_infos = []; 
        Object.values(repos_infos).map(
            ({name, description, html_url,created_at, homepage, has_pages}) => (
            formatted_repos_infos = [{
                name,
                description,
                html_url,
                created_at,
                homepage,
                has_pages
            }, ... formatted_repos_infos]
        ));
        return formatted_repos_infos;
    }

    static async filterRepos(option = ["all"]){
        
        let sort = '';
        let direction = '';
        
        if(option.includes("new") || option.includes("old")){
            sort = 'true';
            if(option.includes("new")){
                direction='asc';
            }else{
                direction='desc';
            }
        }
        
        let aux = await GithubRepos.searchRepos(sort,direction);

        if(option.includes("all")) return aux;  

        if(option.includes("code"))
            aux = aux.filter(repos => !utils.isUplouded(repos));
        
        if(option.includes("page"))
            aux = aux.filter(repos => utils.isUplouded(repos));
        
        // if(option.includes("new"))
        //     aux = aux.sort((repos1, repos2) => 
        //     utils.sorted(Date.parse(repos1.created_at),Date.parse(repos2.created_at)));
        
        // if(option.includes("old"))
        //     aux = aux.sort((repos1, repos2) => 
        //     utils.sorted(Date.parse(repos1.created_at),Date.parse(repos2.created_at), "decre"));
        
        return aux
          
    }

    static getPageURL(repository){
        const {name, html_url, homepage, has_pages} = repository;     
        const existHomePage = (homepage && homepage !== "");
 
        if(has_pages || existHomePage){
            
            if(existHomePage) return homepage.includes("https://")? homepage :`https://${homepage}/`; 
            
            return `https://franciscoylderlan.github.io/${name}/`;
        }
        return html_url;
    }
    

}


