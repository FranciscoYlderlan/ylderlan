
const dictThemes = [
    'styled-components',
    'tailwindcss',
    'typescript',
    'javascript',
    'frontend',
    '@keyframes',
    'backend',
    'express',
    'fastify',
    'android',
    '@media',
    'clamp',
    'axios',
    'react',
    'knex',
    'html',
    'css',
    'ios',
    'dom',
    'spa',
    'es6'
];


function sorted(value1, value2,type="incre"){
    if (type == "incre"){
        if(value1 < value2) 
            return 1; 
        if(value1 > value2)  
            return -1; 
        return 0;
    }
    if(value1 > value2) 
        return 1; 
    if(value1 < value2)  
        return -1; 
    return 0;
}


function tagsTitleGenerator(description){
    let tags = [];
    
    dictThemes.map(theme => 
        description.toLowerCase().includes(theme) ? tags = [...tags, theme] : false
    );
    
    return tags
}

export {
    sorted,
    tagsTitleGenerator
}