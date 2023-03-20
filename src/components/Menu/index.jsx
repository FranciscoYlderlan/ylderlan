import { Container, Logotipo ,Options } from "./styles";
import LogoImage from "../../assets/logo.svg";
import { MenuOption } from "../MenuOption";
import { useState, useEffect, useRef } from "react";

export function Menu(){
    
    const [selected, setSelected] = useState(localStorage.getItem('@ylderlan:optionSelected'));

    function handleSelected(e) {
        localStorage.setItem('@ylderlan:optionSelected', e.target.title);
        setSelected(e.target.title);
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
                        to="/" 
                        onClick={(e) => handleSelected(e)}
                        active = {selected == 'home'}
                    />
                </li>
                <li>
                    <MenuOption 
                        title="profile" 
                        to="/profile"
                        onClick={(e) => handleSelected(e)}
                        active = {selected == 'profile'}
                    />
                </li>
                <li>
                    <MenuOption 
                        title="contactMe" 
                        to="/contact"
                        onClick={(e) => handleSelected(e)}
                        active = {selected == 'contactMe'}
                    />
                </li>
            </Options>
        </Container>
    );
};