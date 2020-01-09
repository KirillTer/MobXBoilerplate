import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { createBrowserHistory } from "history";
import { Router } from "react-router-dom";
import Layout from './pages/main-layout/layout';

export const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <Layout />
  </Router>,
document.getElementById('root'));
