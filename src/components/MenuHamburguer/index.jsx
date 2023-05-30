import { useState, useEffect } from "react";
import { Container, Closed, Open } from "./styles";
import { MenuOption } from "../MenuOption";

export function MenuHamburguer({isOpen, setIsOpen,...rest}) {
    
    const[isActive, setIsActive] = useState(false);
        
    useEffect(() => {
        setIsActive(isOpen);
    },[isOpen])

    return (
        <Container {...rest} >
            
            {
                isActive ?
                <Open>

                    <input id="label-check" type="checkbox"/>
                    <label htmlFor="label-check">
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>

                </Open>
                :
                <Closed>
 
                    <input id="label-check" type="checkbox"/>
                    <label htmlFor="label-check" >
                        <div></div>
                        <div></div>
                        <div></div>
                    </label>
                </Closed>
            }


        </Container>
    )
}