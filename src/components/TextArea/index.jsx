import { Warning } from "../Warning/index.jsx";
import { AiFillWarning } from "react-icons/ai";
import { Container, BoxTextArea } from "./styles";

export function TextArea({errorMessage="",...rest}) {
    return (
        <Container >
            <BoxTextArea {...rest}>

            </BoxTextArea>
            <Warning icon={AiFillWarning} description={errorMessage}/>
        </Container>
        
    );
};