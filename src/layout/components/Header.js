import React,{PureComponent} from 'react'
import {Layout,Avatar,Menu,Icon,Row,Col} from 'antd'
import {Link} from 'react-router-dom'
import './header.less'

const {Header} = Layout
const {Item} = Menu
const basePath = '/myblog'
class HeaderCom extends PureComponent{
  render(){
    return (
      <Header className='header-box'>
        <Row>
          <Col span={4}>
            <Avatar size='large' icon='user' />
          </Col>
          <Col span={20}>
            <Menu mode='horizontal'>
              <Item key='mail'>
                <Link to={`${basePath}/`}>
                  <Icon type='mail' />
                  首页
                </Link>
              </Item>
              <Item>
                <Link to={`${basePath}/hello`}>
                  <Icon type='user' />
                  hello
                </Link>
              </Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default HeaderCom