/* eslint-disable import/default */
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';


import rootReducer from './redux/reducers/mainReducer'
import routes from './routes';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {createStore,applyMiddleware,combineReducers } from 'redux';

require('./favicon.ico');
import './styles.scss';
import 'font-awesome/css/font-awesome.css';

import 'flexboxgrid/css/flexboxgrid.css';

injectTapEventPlugin();


render(
 <Router routes={routes} history={browserHistory} />, document.getElementById('app')
);
