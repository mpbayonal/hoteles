import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NotFoundPage from './containers/NotFoundPage.js';
import LoginPage from './containers/LoginPage';
import ReservaForm from './containers/ReservaForm';
import ReservasLista from './containers/ReservasLista';
import Dashboard from './containers/Inicio';

export default (
  <Route>
    <Route path="login" component={LoginPage}/>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="dashboard" component={Dashboard}/>
      <Route path="form" component={ReservaForm}/>
      <Route path="table" component={ReservasLista}/>
      <Route path="*" component={NotFoundPage}/>
    </Route>
  </Route>
);
