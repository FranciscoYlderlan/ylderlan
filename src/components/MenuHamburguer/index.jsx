import { useState } from "react";
import { Container, Options } from "./styles";
import { MenuOption } from "../MenuOption";

export function MenuHamburguer({...rest}) {
    
    const[isOpen, setIsOpen] = useState(false);
        

    return (
        <Container {...rest} >
            <input className="label-check" id="label-check" type="checkbox"/>
            <label htmlFor="label-check" className={`hamburger-label ${isOpen && 'open' }`}>
                
                <div className={`line1 ${isOpen? 'open-1': ''}`}></div>
                <div className={`line2  ${isOpen? 'open-2' : ''}`}></div>
                <div className={`line3 ${isOpen? 'open-3' : ''}`}></div>
            </label>
        </Container>
    )
}