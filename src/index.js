/* eslint-disable import/default */

import React from 'react';
import { render } from 'react-dom';

import { Router, browserHistory } from 'react-router';
import {createStore} from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './redux/reducers/mainReducer'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore,applyMiddleware,combineReducers } from 'redux';
require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';
import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();
const store = createStore(
  combineReducers({
    rootReducer,
    routing: routerReducer,
  }),
  applyMiddleware(sagaMiddleware, logger, routerMiddleware(history)),
);

render(
  <Provider store={store}><Router routes={routes} history={browserHistory} /></Provider>, document.getElementById('app')
);
