import { Container, Logotipo, Logo ,Options } from "./styles";

export function Menu(){
    return (
        <Container>
            <Logotipo>
                <Logo/>
            </Logotipo>
            <Options>
                <li>home</li>
                <li>profile</li>
                <li>contactMe</li>
            </Options>
        </Container>
    );
};