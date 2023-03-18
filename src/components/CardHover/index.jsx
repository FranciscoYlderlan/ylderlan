import { useState } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import * as HoverCard from '@radix-ui/react-hover-card';
import { Tag } from '../Tag';
import { Button } from '../Button';
import { 
            HoverCardContent,
            Container, 
            Tags, 
            Description,
            AcessLink
        } from "./styles";

import { tagsTitleGenerator } from '../../providers/utils'

import { GithubRepos } from '../../services/Github.service';


export function CardHover({children, project, src,...rest }) {
    
    const [url, setUrl] = useState(GithubRepos.getPageURL(project))

    
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
                        <AcessLink href={url} target='_blank'>
                            <Button title={'Veja mais'} icon={AiOutlineArrowRight}/>
                        </AcessLink>
                    </HoverCardContent>
                </HoverCard.Content>
            </Container>
            
        </HoverCard.Portal>
    </HoverCard.Root>
    );
}