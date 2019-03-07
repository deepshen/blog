import React,{PureComponent} from 'react'
import './article.less'
const img = require('../../assets/img1.jpg')
export default class ArticleItem extends PureComponent{

  render(){
    return (
      <div className='article-item'>
        <div>
          <h2>我就是个title而已</h2>
          <p>需求是个什么鬼阿什顿卡上的卡就啊是的空间啊好受点啊可视电话阿卡上的卡上的喀什阿三开的贺卡收到阿斯顿奥神队啊</p>
          <div>
            2019-12-12 09:24
          </div>
        </div>
        <div>
          <img src={img} alt="img"/>
        </div>
      </div>
    )
  }
}