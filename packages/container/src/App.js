import React, { lazy, Suspense } from 'react';
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
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <Suspense fallback={<Progress />}>
            <Switch>
              <Route path="/auth" component={AuthLazy} />
              <Route path="/" component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};