import React from 'react'
import Loadable from 'react-loadable'

const config = [
  {
    name:'/',
    path: '/',
    exact: true,
    component:Loadable({
      loader:()=> import('./Home/Home.js'),
      loading:()=><div>加载中</div>
    })
  },
  {
    name: '/hello',
    path: '/hello',
    exact: true,
    component: Loadable({
      loader: () => import('./User/User.js'),
      loading:()=><div>加载中</div>
    })
  }
]

export default config