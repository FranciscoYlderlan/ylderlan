import * as utils from "../providers/utils.js"

export class GithubRepos {
    

    static async searchRepos() {
        const endpoint = `https://api.github.com/users/franciscoylderlan/repos`
        const result = await fetch(endpoint);
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

    static async filterRepos(option = "all"){
        
        let aux = await GithubRepos.searchRepos();

        if(option == "code")
            return aux.filter(repos => !repos.has_pages);
        if(option == "page")
            return aux.filter(repos => repos.has_pages);
        if(option == "old")
            return aux.sort((repos1, repos2) => 
            utils.sorted(Date.parse(repos1.created_at),Date.parse(repos2.created_at), "decre"));
        if(option == "new")
            return aux.sort((repos1, repos2) => 
            utils.sorted(Date.parse(repos1.created_at),Date.parse(repos2.created_at)));
        return aux;    
    }

    static getPageURL(repository){
        const {name, html_url, homepage, has_pages} = repository;     
        if(has_pages){
            const existHomePage = homepage && homepage !== ""; 
            
            if(existHomePage) return homepage.includes("https://")? homepage :`https://${homepage}/`; 
            
            return `https://franciscoylderlan.github.io/${name}/`;
        }
        return html_url;
    }
    

}


