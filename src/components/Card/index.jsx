import { useState } from 'react';
import { Container, View, Tags } from "./styles";
import { CardHover } from '../CardHover';
import { Tag } from '../Tag';
import { tagsTitleGenerator } from '../../providers/utils';
export function Card({src, uploaded=false ,project, ...rest }) {
    const [isShown, setIsShown] = useState(false);

    const tagsTitles = tagsTitleGenerator({
        description: project.description,
        name: project.name
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
                        uploaded ? <h2>Web</h2> : <h2>Code</h2>
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
                </View>
            </CardHover>
            {/* {isShown && (
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
            )} */}
        </Container>
    );
}