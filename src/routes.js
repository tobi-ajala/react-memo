import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'toastr/package/toastr.css';
import './styles/styles.css';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Main}/>
  </Route>
);
