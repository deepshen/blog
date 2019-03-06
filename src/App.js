import React from 'react';
import {Route,Switch,Router} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import config from './routes'
import Layout from './layout/Layout'

const history = createBrowserHistory()

const App = () => (
  <Router history={history}>
    <Switch>
      <Layout>
        {
          config.map((item,index)=>(
            <Route component={item.component} key={index} exact={!!item.exact} path={item.path}></Route>
          ))
        }
      </Layout>
    </Switch>
  </Router>
);

export default App;
