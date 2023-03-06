import { Container, Logotipo ,Options } from "./styles";
import LogoImage from "../../assets/logo.svg";
import { TextLink } from "../TextLink";

export function Menu(){
    return (
        <Container>
            <Logotipo>
                <img src={LogoImage} alt="Logo Habits" />
                <p>Francisco Ylderlan</p>
            </Logotipo>
            <Options>
                <li><TextLink title="home" to="/"/></li>
                <li><TextLink title="profile" to="/profile"/></li>
                <li><TextLink title="contactMe" to="/contact"/></li>
            </Options>
        </Container>
    );
};