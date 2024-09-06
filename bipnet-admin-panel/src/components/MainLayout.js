import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { AiOutlineDashboard } from "react-icons/ai";
import { 
  IoMdPeople, 
  IoMdCart, 
  IoMdBook,
  IoIosInformationCircleOutline 
} from "react-icons/io";
import { FaRegListAlt } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { ImBlog } from "react-icons/im";

import { Button, Layout, Menu, theme } from "antd";

const { Header, Sider, Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo">
          <h2 className="text-white fs-5 text-center py-4 mb-0 fw-bold">
            <span className="sm-logo">B</span>
            <span className="lg-logo">BIPNet</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['']}
          onClick={({ key }) => {
            if(key === 'signout') {
            } else {
              navigate(key);
            }
          }}
          items={[
            {
              key: '',
              icon: <AiOutlineDashboard className="fs-4"/>,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <IoMdPeople className="fs-4"/>,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <IoMdBook className="fs-4"/>,
              label: 'Catalog',
              children: [
                {
                  key: "product",
                  icon: <IoMdCart className="fs-4"/>,
                  label: "Add Product",
                },
                {
                  key: "product-list",
                  icon: <FaRegListAlt className="fs-4"/>,
                  label: "Product List",
                }
              ]
            },
            {
              key: 'orders',
              icon: <GoChecklist className="fs-4"/>,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <ImBlog className="fs-4"/>,
              label: 'Blog',
              children: [
                {
                  key: "add-blog",
                  icon: <FaPlus className="fs-4"/>,
                  label: "Add Blog",
                },
                {
                  key: "blog-list",
                  icon: <FaRegListAlt className="fs-4"/>,
                  label: "Blog List",
                },
                {
                  key: "add-blog-category",
                  icon: <FaPlus className="fs-4"/>,
                  label: "Add Blog Category",
                },
                {
                  key: "category-list",
                  icon: <BiCategory className="fs-4"/>,
                  label: "Category List",
                },
                
              ]
            },
            {
              key: 'enquiries',
              icon: <IoIosInformationCircleOutline className="fs-4"/>,
              label: 'Enquiries',
            }
          ]}
        />
      </Sider>
      <Layout className="site-layout">
        <Header 
          className="d-flex justify-content-between ps-1 pe-5"
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
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
          <div className="d-flex gap-3 align-items-center">
            <div></div>
            <div className="d-flex gap-3 align-items-center">
              <div>
                <img 
                  width={64}
                  height={64}
                  src="images/logo-1.png" 
                  alt="logo-1"/>
              </div>
              <div>
                <h5 className="mb-0">AriellaDP</h5>
                <p className="mb-0">arielladispras@gmail.com</p>
              </div>
            </div>
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer
          }}
        >
          <Outlet/>
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;