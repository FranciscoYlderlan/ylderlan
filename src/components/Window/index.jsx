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
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    {desc}
                </Description>
            )}
        </Container>
    );
}