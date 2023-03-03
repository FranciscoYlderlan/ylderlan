import { useState } from 'react';
import { Container, ScreenShot, Description } from "./styles";

export function Window({src, desc, ...rest }) {
    const [isShown, setIsShown] = useState(false);
    
    return (
        <Container {...rest}>
            <ScreenShot 
                src={src} 
                alt={desc} 
                onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}
            />

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