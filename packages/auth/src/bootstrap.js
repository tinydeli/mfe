import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

//Boot function for library
const mount = (el, { onNavigate, defaultHistory, initialPath, onSignIn }) => {
    const history = defaultHistory || createMemoryHistory({
        initialEntries: [initialPath]
    }); //if provided defaulthistory use is el create
    console.log('Mount Auth');

    if (onNavigate) {
        console.log('onNavigate :' + onNavigate);
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );

    //return callbackfunctions to container ap for 2 way com
    return {
        onParentNavigate( {pathname: nextPathname} ) {
            console.log('onParentNavigate');
            const { pathname } = history.location;
            console.log('abys:',nextPathname);
            if( pathname != nextPathname ) {
                history.push(nextPathname);
                console.log('Container just navigated');
            }
        }
    };
};

//If dev and standalone
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot, { defaultHistory: createBrowserHistory() })
    }
}

//export mount function
export { mount };