import { motion } from 'framer-motion';
import { useState } from 'react';
import { BsArrowRightShort } from 'react-icons/bs';
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

    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    function checkedOnchangeWindowSize() {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    window.addEventListener('resize', checkedOnchangeWindowSize);
    
    const tagsTitles = tagsTitleGenerator({
        description: project.description,
        name: project.name
    });
    
    return (
        (windowWidth >= 1024) ?
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
                                tagsTitles.map(( tagTitle, index ) => {
                                    return (
                                        <Tag 
                                            animate={{opacity: 1}}
                                            transition={{
                                                duration: .3,
                                                delay: index * .2,
                                                ease: [0.4, .5, .7, 1],
                                            }}
                                            initial={{ opacity: 0}}                 
                                            key={tagTitle} 
                                            title={tagTitle} 
                                            isActive
                                        />
                                    )
                                })
                            }
                        </Tags>
                        <AcessLink href={url} target='_blank'>
                            <Button title={'Veja mais'} icon={BsArrowRightShort}/>
                        </AcessLink>
                    </HoverCardContent>
                </HoverCard.Content>
            </Container>
            
        </HoverCard.Portal>
    </HoverCard.Root>
    :
    <>
        {children}
    </>
    );
}