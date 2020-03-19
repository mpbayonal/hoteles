/*!

=========================================================
* Material Dashboard React - v1.8.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/material-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { Provider } from 'react-redux'
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import {createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from "redux-thunk";


import mainReducer from './redux/reducers/mainReducer';
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { routerReducer, routerMiddleware } from 'react-router-redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';

// core components
import Admin from "layouts/Admin.js";


import "assets/css/material-dashboard-react.css?v=1.8.0";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";

const initialState = { reservasList: {reservas: [], error:null, loading: false},
    newReserva:{reserva:null, error: null, loading: false},
    activeReserva:{reserva:null, error:null, loading: false},
    deletedReserva: {reserva: null, error:null, loading: false},
};


const hist = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export function configureStore(initialState ) {
    const store = createStore(
        combineReducers({
            mainReducer,
            routing: routerReducer
        }),
        applyMiddleware(sagaMiddleware, logger, routerMiddleware(hist),thunk),
    );
    return store;
}

const store = configureStore(initialState)


ReactDOM.render(
    <Provider store={store}>
  <Router history={hist}>
    <Switch>
      <Route path="/" component={Admin} />
      <Redirect from="/" to="/inicio" />
    </Switch>
  </Router>

    </Provider>,
  document.getElementById("root")
);
