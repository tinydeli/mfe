import React, { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Header from './components/Header';
import Progress from './components/Progress';

const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));

import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

//92.65.232.88 ip work
//85.149.29.94 ip home

//Material UI css specific
//To prevent css classname collisions that are caused by generated pseudo random short css classnames at productionbuildtime
const generateClassName = createGenerateClassName({
  productionPrefix: 'con'
});

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn} />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth"> 
                <AuthLazy onSignIn={() => {setIsSignedIn(true); console.log('Bolle hoer')}} />
              </Route>
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};