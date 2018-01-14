//@flow
import * as React from 'react';
import Container from '../Container/Container';
import './Block.less';

type ImageBlockProps = {
    image: string,
    alt: string
}

function ImageBlock(props: ImageBlockProps) {
    return (
        <Container fullWidth>
            <div className="image-block">
                <img src={props.image} alt={props.alt} />
            </div>
        </Container>
    )
}

export default ImageBlock;