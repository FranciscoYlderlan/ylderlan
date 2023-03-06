import styled from "styled-components";
import { motion } from "framer-motion";
export const Container = styled(motion.main)`
    width: 100%;
    position: relative;

    &::before {
        position: absolute;
        
        content: "";

        background: ${({theme}) => theme.COLORS.DARK_YELLOW};

        
        left: 30%;
        bottom: 5%;
        height: 88vh;
        width: 20%;
        z-index: -1;
        
    }
    button, a, input{
        font-family: 'Poppins', sans-serif;
    }
    button, a, li {
        cursor: pointer;
    }
`;