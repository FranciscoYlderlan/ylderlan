import { Container, Logotipo ,Options } from "./styles";
import LogoImage from "../../assets/logo.svg";

import { Link } from 'react-router-dom';

export function Menu(){
    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
                <p>Francisco Ylderlan</p>
            </Logotipo>
            <Options>
                <li><Link to="/">home</Link></li>
                <li><Link to="/profile">profile</Link></li>
                <li><Link to="/contact">contactMe</Link></li>
            </Options>
        </Container>
    );
};