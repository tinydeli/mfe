import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//Boot function for library
const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
};

//If dev and standalone
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root');
    if(devRoot) {
        mount(devRoot)
    }
}

//export mount function
export {mount};