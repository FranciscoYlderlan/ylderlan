import { Warning } from "../Warning/index.jsx";
import { AiFillWarning } from "react-icons/ai";
import { Container, BoxTextArea } from "./styles";

export function TextArea({errorMessage="", labelPlaceholder,...rest}) {
    return (
        <Container >
            <BoxTextArea {...rest}/>
            <label>{labelPlaceholder}</label>
            <Warning icon={AiFillWarning} description={errorMessage}/>
        </Container>
        
    );
};