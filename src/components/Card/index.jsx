import { useState } from 'react';
import { Container, View, Description } from "./styles";

export function Card({src, uploaded=false ,desc, ...rest }) {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <Container {...rest}>
        
            <View
                uploaded = {uploaded}
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            >
                { uploaded 
                    ? 
                    <h2>Web</h2>
                    :
                    <h2>Code</h2>
                }   
            </View>
            {isShown && (
                <Description
                    animate={{opacity: 1}}
                    transition={{
                        duration: .3,
                        delay: 0,
                        ease: [0.5, 0.71, 1, 1],
                    }}
                    initial={{ opacity: 0}}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    {desc}
                </Description>
            )}
        </Container>
    );
}