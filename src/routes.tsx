import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { HomePage } from './views';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route  
                    exact
                    path='/'
                    component={HomePage}
                />
            </Switch>
        </BrowserRouter>
    </>
)

export default Routes;