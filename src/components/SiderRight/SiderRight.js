import React,{PureComponent} from 'react'
import './sider.less'

const img = require('../../assets/img1.jpg')
export default class SiderRight extends PureComponent{

  render(){
    return (
      <div className='sider-right'>
        <div className='photo'>
          <img src={img} alt="img"/>
          <h2>wind feng</h2>
        </div>
        <div className='introduce'>
          <h2>个人介绍</h2>
          <p>本是青灯不归客</p>
          <p>却因浊酒留风尘</p>
          <p>星光不问赶路人</p>
          <p>岁月不负有心人</p>
        </div>
      </div>
    )
  }
}