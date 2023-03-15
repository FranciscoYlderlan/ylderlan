import { useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { 
        HoverCardContent,
        Container, 
        Tags, 
         Description,
         ButtonLink
        } from "./styles";



export function CardHover({children, desc, tags, src,...rest }) {
    
    return (
        <HoverCard.Root className="Card">
        <HoverCard.Trigger asChild>
            {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <Container>
                <HoverCard.Content className='CardContent'>
                    <HoverCardContent>

                    </HoverCardContent>
                </HoverCard.Content>
            </Container>
            
        </HoverCard.Portal>
    </HoverCard.Root>
    );
}