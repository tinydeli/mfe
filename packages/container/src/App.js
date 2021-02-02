import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from './components/MarketingApp';
import Header from './components/Header';

//92.65.232.88 ip work
//85.149.29.94 ip home

export default () => {
    return (
    <BrowserRouter>
        <div>
            <Header />
            <MarketingApp />
        </div>
    </BrowserRouter>
    );
};