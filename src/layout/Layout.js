import React,{PureComponent} from 'react'
import {Layout} from 'antd'
import Header from './components/Header'
import './layout.less'

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
          <Sider width={400} style={{backgroundColor:'#fff'}}>Sider</Sider>
        </Layout>
        <Footer style={{textAlign:'center',backgroundColor:'#f2f2f2'}}>Footer</Footer>
      </Layout>
    )
  }
}

export default LayoutCom