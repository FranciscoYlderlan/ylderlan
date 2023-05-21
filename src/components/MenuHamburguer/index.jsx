import { useState } from "react";
import { Container, Options } from "./styles";
import { MenuOption } from "../MenuOption";

export function MenuHamburguer({...rest}) {
    
    const[isOpen, setIsOpen] = useState(false);
    
    const[counter, setCounter] = useState(0);
    
    const [selected, setSelected] = useState(location.pathname);

    function handleHamburgerClick() {
        setCounter(counter + 1);
        if(counter%2 == 0) {
            localStorage.setItem('@ylderlan:isActive',!isOpen)
            setIsOpen(!isOpen);
        }
    }


    return (
        <Container {...rest}  onClick ={handleHamburgerClick} >
            <input className="label-check" id="label-check" type="checkbox"/>
            <label htmlFor="label-check" className={`hamburger-label ${isOpen && 'open' }`}>
                
                <div className={`line1 ${isOpen? 'open-1': ''}`}></div>
                <div className={`line2  ${isOpen? 'open-2' : ''}`}></div>
                <div className={`line3 ${isOpen? 'open-3' : ''}`}></div>
            </label>
            {
            isOpen && <Options>
                <li>
                    <MenuOption 
                        title="home"
                        pathname='/'
                        to="/" 
                        onClick={(e) => handleSelected(e)}
                        active = {selected == '/'}
                    />
                </li>
                <li>
                    <MenuOption 
                        title="profile"
                        pathname="/profile" 
                        to="/profile"
                        onClick={(e) => handleSelected(e)}
                        active = {selected == '/profile'}
                    />
                </li>
                <li>
                    <MenuOption 
                        title="contactMe" 
                        pathname="/contact"
                        to="/contact"
                        onClick={(e) => handleSelected(e)}
                        active = {selected == '/contact'}
                    />
                </li>
            </Options>
            }
        </Container>
    )
}