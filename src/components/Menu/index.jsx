import { Container, Logotipo, Options } from "./styles";
import LogoImage from "../../assets/logo.svg";
import { MenuOption } from "../MenuOption";
import { MenuHamburguer } from "../MenuHamburguer";

import { useState, useRef, useEffect } from 'react';

import { useLocation } from 'react-router-dom'

export function Menu(){
    
    const location = useLocation();

    const [selected, setSelected] = useState(location.pathname);
    
    const[isOpen, setIsOpen] = useState(false);
    
    const[counter, setCounter] = useState(0);
    
    
    function handleSelected(e) {
        // e.preventDefault();
        localStorage.setItem('@ylderlan:optionSelected', e.target.pathname);
        setSelected(e.target.pathname);
    }
    

    function handleHamburgerClick() {
        setCounter(counter + 1);
        if(counter%2 == 0) {
            localStorage.setItem('@ylderlan:isActive',!isOpen)
            setIsOpen(!isOpen);
            
        }
    }

    useEffect(() => {
        setIsOpen(JSON.parse(localStorage.getItem('@ylderlan:isActive')));
    },[])

    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
                <span>Francisco Ylderlan</span>
                <MenuHamburguer onClick={handleHamburgerClick}/>
 
            </Logotipo>
            {isOpen && 
                <Options>
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
    );
};

