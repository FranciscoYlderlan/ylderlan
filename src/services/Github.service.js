
export class GithubRepos {
    
    static async searchRepos(username) {
        const endpoint = `https://api.github.com/users/${username}/repos`
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
    static getPageURL(repository){
        const {name, html_url, homepage, has_pages} = repository;     
        if(has_pages){
            const existHomePage = homepage && homepage !== ""; 
            
            if(existHomePage) return homepage.includes("https://")? homepage :`https://${homepage}/`; 
            
            return `https://${username}.github.io/${name}/`;
        }
        return html_url;
    }
    

}


