import React, { useState } from 'react';

const HoverView = (WrappedComponent: any) => {
    const WithHover = () => {
        const [howervalue, setHowervalue] = useState(false);
        return <WrappedComponent
            textHover={howervalue}
            onMouseOver={() => setHowervalue(true)}
            onMouseLeave={() => setHowervalue(false)} />
    }
    return WithHover;
}

export default HoverView;

