import { Container, Logotipo ,Options } from "./styles";

import LogoImage from "../../assets/logo.svg";

export function Menu(){
    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
                <p> Francisco Ylderlan</p>
            </Logotipo>
            <Options>
                <li>home</li>
                <li>profile</li>
                <li>contactMe</li>
            </Options>
        </Container>
    );
};