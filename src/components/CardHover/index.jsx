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


export function CardHover({children, project, src,...rest }) {
    
    const tagsTitles = tagsTitleGenerator({
        description: project.description,
        name: project.name
    });
    
    return (
        <HoverCard.Root className="Card">
        <HoverCard.Trigger asChild>
            {children}
        </HoverCard.Trigger>
        <HoverCard.Portal>
            <Container>
                <HoverCard.Content className='CardContent'>
                    <HoverCardContent>
                        <h3>{project.name}</h3>
                        <Description>
                            {project.description}
                        </Description>
                        <Tags>
                            {
                                tagsTitles &&
                                tagsTitles.map(( tagTitle ) => {
                                    return (
                                        <Tag key={tagTitle} title={tagTitle} isActive/>
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