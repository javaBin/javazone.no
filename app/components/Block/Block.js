//@flow
import * as React from 'react';
import ImageBlock from './ImageBlock';
import './Block.less';

type BlockProps = {
    header?: string,
    children: React.Node
}

function Block(props: BlockProps) {
    return (
        <div className="block row">
            <div className="col-xs col-sm col-md col-lg-4">
                <div className="box block-header">
                    {props.header}
                </div>
            </div>
            <div className="col-xs col-sm col-md col-lg-8">
                <div className="box block-text">
                     {props.children}
                </div>
            </div>
        </div>
    )
}

export { Block, ImageBlock };