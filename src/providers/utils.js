
export function sorted(value1, value2,type="incre"){
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
