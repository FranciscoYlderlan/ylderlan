import { Container, Logotipo ,Options } from "./styles";

export function Menu(){
    return (
        <Container>
            <Logotipo>
                franciscoYlderlan
            </Logotipo>
            <Options>
                <li>home</li>
                <li>profile</li>
                <li>contactMe</li>
            </Options>
        </Container>
    );
};