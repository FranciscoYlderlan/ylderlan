import { useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { 
        HoverCardContent, 
         Tags, 
         Description,
         ButtonLink
        } from "./styles";



export function CardHover({children, desc, tags, src,...rest }) {
    
    return (
        <HoverCard.Root>
        <HoverCard.Trigger asChild>
            {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
        <HoverCard.Content collisionPadding={{ top: 60, left: 60 }}>
            
            <HoverCardContent>

            </HoverCardContent>
            
            <HoverCard.Arrow className="HoverCardArrow" />
        </HoverCard.Content>
        </HoverCard.Portal>
    </HoverCard.Root>
    );
}