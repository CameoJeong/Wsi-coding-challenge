import '@/utils/globalStyle.css'

import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Route, Router, Switch } from 'react-router-dom'

import store from '@/features'
import history from '@/utils/history'

import {
  Home,
} from './views'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root'),
)
