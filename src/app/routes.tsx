import * as React from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom';
import { Route } from 'app/core/route';
import { CreateAccountPage } from 'app/modules/create-account/create-account.page';
import { DashboardPage } from 'app/modules/dashboard/dashboard.page';
import { LoginPage } from 'app/modules/login/login.page';
import { AppPath } from 'app/route-constants';

const history = createBrowserHistory();

//TODO: add guard as a setting for when to redirect to redirectPath

export const Routes: React.FC = () => {
  return (
    <Router history={history}>
      <Route path={AppPath.Login} component={LoginPage} exact redirectPath={AppPath.Dashboard} />
      <Route path={AppPath.CreateAccount} component={CreateAccountPage} exact redirectPath={AppPath.Dashboard} />
      <Route path={AppPath.Dashboard} component={DashboardPage} exact redirectPath={AppPath.Login} />
    </Router>
  );
};
