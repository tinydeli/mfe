import { mount } from 'modMarketing/MarketingIndex';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const containerRef = useRef(null);
    const history = useHistory();

    useEffect( () => {
        const {onParentNavigate} = mount(containerRef.current, {
            initialPath: history.location.pathname,
            onNavigate: ({pathname: nextPathname}) => {
                // console.log('Container noticed navigation in marketing to: ',location.pathname);
                console.log(nextPathname);
                //synch memoryrouter from module with browserrouter from container

                //to prevet infinite event flow, check current path name (must be diff from next)
                const {pathname} = history.location;

                if(pathname!=nextPathname) {
                    history.push(nextPathname);
                }
            },
        });

        history.listen(onParentNavigate);
    }, []); //[] means only execute function once when it is rendered to screen

    return <div ref={containerRef} />
};