import React from 'react';
import {Route,Switch,Router,Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import config from './routes'
import Layout from './layout/Layout'

const history = createBrowserHistory()
const basePath = '/myblog'
const App = () => (
  <Router history={history}>
    <Switch>
      <Layout>
        {
          config.map((item,index)=>(
            <Route component={item.component} key={index} exact={!!item.exact} path={`${basePath}${item.path}`}></Route>
          ))
        }
        <Redirect exact={true} strict from={'*'} to={`${basePath}/`} />
      </Layout>
    </Switch>
  </Router>
);

export default App;
