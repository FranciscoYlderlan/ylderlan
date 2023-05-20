import { Container } from "./styles";

export function MenuHamburguer() {
    return (
        <Container>
            <input class="label-check" id="label-check" type="checkbox"/>
            <label for="label-check" class="hamburger-label">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </label>
        </Container>
    )
}