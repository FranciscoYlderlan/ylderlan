import { useState, useEffect } from "react";
import { Container, Closed, Open } from "./styles";
import { MenuOption } from "../MenuOption";

export function MenuHamburguer({isOpen, setIsOpen,...rest}) {
    
    const[isActive, setIsActive] = useState(false);
        
    useEffect(() => {
        // JSON.parse(localStorage.getItem('@ylderlan:isActive'))
        setIsActive(isOpen);
        console.log('atualizei queridinho', isOpen)
    },[isOpen])

    return (
        <Container {...rest} >
            

            {/* <input className="label-check" id="label-check" type="checkbox"/>
            <label htmlFor="label-check" className={`hamburger-label ${isActive ? 'open' : '' }`}>
            <p>{`line1 ${isActive  ? 'open-1': ''}`}</p>                
                <div className={`line1 ${isActive  ? 'open-1': ''}`}></div>
                <div className={`line2  ${isActive ? 'open-2': '' }`}></div>
                <div className={`line3 ${isActive  ? 'open-3': ''}`}></div>
            
            </label> */}

            {
                isActive ?
                <>

                    <input id="label-check" type="checkbox"/>
                    <label htmlFor="label-check" className={`open`}>
                       
                        <div className={`open-1`}></div>
                        <div className={`open-2`}></div>
                        <div className={`open-3`}></div>
                        
                    </label>

                </>
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