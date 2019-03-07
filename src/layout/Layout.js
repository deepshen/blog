import React,{PureComponent} from 'react'
import {Layout} from 'antd'
import Header from './components/Header'
import './layout.less'
import SiderRight from '../components/SiderRight/SiderRight'

const {Footer,Sider,Content} = Layout
class LayoutCom extends PureComponent{


  render(){
    return (
      <Layout style={{backgroundColor:'#fff'}}>
        <Header />
        <Layout style={{width:'1200px',margin:'0 auto',backgroundColor:'#fff'}}>
          <Content>
            {this.props.children}
          </Content>
          <Sider width={400} style={{backgroundColor:'#fff'}}>
            <SiderRight />
          </Sider>
        </Layout>
        <Footer style={{textAlign:'center',backgroundColor:'#f2f2f2'}}>Footer</Footer>
      </Layout>
    )
  }
}

export default LayoutCom