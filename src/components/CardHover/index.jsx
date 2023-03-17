import { useState } from 'react';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Tag } from '../Tag';
import { 
        HoverCardContent,
        Container, 
        Tags, 
         Description,
         ButtonLink
        } from "./styles";

import { tagsTitleGenerator } from '../../providers/utils'


export function CardHover({children, desc, src,...rest }) {
    
    const tagsTitles = tagsTitleGenerator(desc);
    
    return (
        <HoverCard.Root className="Card">
        <HoverCard.Trigger asChild>
            {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <Container>
                <HoverCard.Content className='CardContent'>
                    <HoverCardContent>
                        <Tags>
                            {
                                tagsTitles &&
                                tagsTitles.map(( tagTitle ) => {
                                    return (
                                        <Tag key={tagTitle} title={tagTitle} />
                                    )
                                })
                            }
                        </Tags>
                    </HoverCardContent>
                </HoverCard.Content>
            </Container>
            
        </HoverCard.Portal>
    </HoverCard.Root>
    );
}