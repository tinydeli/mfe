import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

//Material UI css specific
//To prevent css classname collisions that are caused by generated pseudo random short css classnames at productionbuildtime
const generateClassName = createGenerateClassName({
    productionPrefix: 'mar'
});

export default ({ history }) => {
    return <div>
        <StylesProvider generateClassName={generateClassName}>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route exact path="/" component={Landing} />
                </Switch>
            </Router>
        </StylesProvider>
    </div>
};