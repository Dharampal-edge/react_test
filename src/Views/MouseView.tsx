import React, { useRef } from 'react';
import HoverView from './HoverView';
import hoverFile from '../CommonFile'

const MouseView = (props: any) => {
    const hoverRef = useRef(null);
    const isHover = hoverFile(hoverRef);
    const { ...divProps } = props;
    return (
        <>
            <h2 ref={hoverRef} {...divProps} style={{ color: isHover ? 'blue' : 'green', width: '141px' }}>{props.textHover ? 'Inside' : 'Outside'}</h2>
        </>
    )
}

export default HoverView(MouseView);