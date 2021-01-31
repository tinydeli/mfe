import { mount } from 'modMarketing/MarketingIndex';
import React, { useRef, useEffect } from 'react';

export default () => {
    const containerRef = useRef(null);

    useEffect( () => {
        mount(containerRef.current)
    });

    return <div id="anus" ref={containerRef} />
};