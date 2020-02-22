import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import ComponentExample from "../../components/component-example";
import { ConnectedRouter } from 'connected-react-router'
import browserHistory from "../../store/browser-history";

const Routes = () => {
    return (
        <ConnectedRouter history={browserHistory}>
            <Switch>
                <Redirect from={'/'} exact={true} to={'home'} />
                <Route path={'/home'} component={ComponentExample} />
            </Switch>
        </ConnectedRouter>
    );
};

export default Routes;