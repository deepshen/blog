import React,{PureComponent} from 'react'
import {Layout,Avatar,Menu,Icon,Row,Col} from 'antd'
import './header.less'

const {Header} = Layout
const {Item} = Menu
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
                <Icon type='mail' />
                mail
              </Item>
              <Item>
                <Icon type='user' />
                用户
              </Item>
            </Menu>
          </Col>
        </Row>
      </Header>
    )
  }
}

export default HeaderCom