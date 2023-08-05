import React, {useState} from "react";
import {
 MenuFoldOutlined,
 MenuUnfoldOutlined,
 UploadOutlined,
 UserOutlined,
 VideoCameraOutlined
} from "@ant-design/icons";
import {Layout, Menu, Button, theme} from "antd";

const {Header, Sider, Footer, Content} = Layout;
const SideBar = () => {
 const [collapsed, setCollapsed] = useState(false);
 const {
  token: {colorBgContainer}
 } = theme.useToken();
 return (
     <Layout
         style={
             {
                 height: 100,
                 width:100
             }
         }
     >
   <Sider trigger={null} collapsible collapsed={collapsed}>
    <div className="demo-logo-vertical" />
    <Menu
     theme="dark"
     mode="inline"
     defaultSelectedKeys={["1"]}
     items={[
      {
       key: "1",
       icon: <UserOutlined />,
       label: "nav 1"
      },
      {
       key: "2",
       icon: <VideoCameraOutlined />,
       label: "nav 2"
      },
      {
       key: "3",
       icon: <UploadOutlined />,
       label: "nav 3"
      }
     ]}
    />
   </Sider>
   <Layout>
    <Header
     style={{
      padding: 0,
      background: colorBgContainer
    
     }}
    >
     <Button
      type="text"
      icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      onClick={() => setCollapsed(!collapsed)}
      style={{
       fontSize: "16px",
       width: 64,
       height: 64
      }}
     />
    </Header>
    <Content
     style={{
      margin: "24px 16px",
      padding: 24,
      minHeight: 280,
      background: colorBgContainer
     }}
    >
     <h2>Here is the central Page</h2>
    </Content>
    <Footer
     style={{
      textAlign: "center"
     }}
    >
     Ant Design ©2023 Created by Ant UED
    </Footer>
   </Layout>
  </Layout>
 );
};
export default SideBar;
