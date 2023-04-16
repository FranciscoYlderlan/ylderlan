import { Warning } from "../Warning/index.jsx";
import { Container, BoxInput } from "./styles.js";
import { AiFillWarning } from "react-icons/ai";


export function Input ({icon: Icon, errorMessage,...rest}) {
    return (
        <Container>
            <BoxInput>
                {Icon && <Icon size={20}/>}
                <input {...rest}/>
            </BoxInput>
            <Warning icon={AiFillWarning} description={errorMessage}/>
        </Container>
    );
}