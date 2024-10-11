import { Badge, Layout, Menu } from "antd";
import React from "react";
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import "./index.scss";
import { Link } from "react-router-dom";

function Header() {
  const { Header } = Layout;
  const cart = useSelector((store) => store.cart);

  return (
    <div className="header-container"> 
      <Header className="header">
        <div className="logo">
          <img src="src/assets/logo.png" alt="BooCafe-logo" className="logo-image" />
        </div>

        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]} className="menu">
          <div className="left-menu">
            <Menu.Item key="1" className="menu-item">Home</Menu.Item>
            <Menu.Item key="2" className="menu-item">About</Menu.Item>
            <Menu.Item key="3" className="menu-item">Contact</Menu.Item>
            <Menu.Item key="4" className="menu-item">
              <Badge count={cart.length}>
                <ShoppingCartOutlined className="cart-icon" />
              </Badge>
            </Menu.Item>
          </div>
          
          <div className="right-menu">
            <Menu.Item key="5" className="menu-item">
              <Link to='/login'>
                Login
              </Link>
            </Menu.Item>
            <Menu.Item key="6" className="menu-item">
              <Link to='/register'>
                 Register
              </Link>
            </Menu.Item>
          </div>
        </Menu>
      </Header>
    </div>
  );
}

export default Header;
