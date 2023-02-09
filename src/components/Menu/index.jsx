import { Container, Logotipo ,Options } from "./styles";

import LogoImage from "../../assets/logo.svg";

export function Menu(){
    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
            </Logotipo>
            <Options>
                <li>home</li>
                <li>profile</li>
                <li>contactMe</li>
            </Options>
        </Container>
    );
};