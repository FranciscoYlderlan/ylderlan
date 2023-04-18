import { Container, Logotipo ,Options } from "./styles";
import LogoImage from "../../assets/logo.svg";
import { MenuOption } from "../MenuOption";
import { useState, useEffect } from "react";
import { useLocation } from 'react-router-dom'


export function Menu(){
    
    const location = useLocation();

    const [selected, setSelected] = useState(location.pathname);

    function handleSelected(e) {
        localStorage.setItem('@ylderlan:optionSelected', e.target.pathname);
        setSelected(e.target.pathname);
    }


    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
                <p>Francisco Ylderlan</p>
            </Logotipo>
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
        </Container>
    );
};