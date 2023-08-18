import { useState } from 'react';
import { Container, View, Tags, AcessLink } from "./styles";
import { CardHover } from '../CardHover';
import { Tag } from '../Tag';
import { tagsTitleGenerator } from '../../providers/utils';
import { Button } from '../Button';
import { GithubRepos } from '../../services/Github.service';
import { BsArrowRightShort } from 'react-icons/bs';

export function Card({src, uploaded=false ,project, ...rest }) {
    const [isShown, setIsShown] = useState(false);

    const [url, setUrl] = useState(GithubRepos.getPageURL(project))

    const[windowWidth, setWindowWidth] = useState(window.innerWidth);

    function checkedOnchangeWindowSize() {
        const width = window.innerWidth;
        setWindowWidth(width);
    }

    window.addEventListener('resize', checkedOnchangeWindowSize);

    const tagsTitles = tagsTitleGenerator({
        description: project.description,
        name: project.name,
        topics: project.topics
    });
    
    return (
        <Container {...rest}>
        
            <CardHover project={project}>
                <View
                    uploaded = {uploaded}
                    onMouseEnter={() => setIsShown(true)}
                    onMouseLeave={() => setIsShown(false)}
                >
                    {
                        uploaded ? <h2>Page</h2> : <h2>Code</h2>
                    }
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
                    {
                        (windowWidth < 1024 && isShown) &&
                        <AcessLink href={url} target='_blank'>
                            <Button title={'Veja mais'} icon={BsArrowRightShort}/>
                        </AcessLink>
                    }
                    
                </View>
            </CardHover>
        </Container>
    );
}