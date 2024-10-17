import React from "react";
import { Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

function Header() {
  const { Header } = Layout;
  const cart = useSelector((store) => store.cart);

  return (
    <div className="header-container">
      <Header className="header">
        <div className="logo">
          <img
            src="src/assets/logo.png"
            alt="BooCafe-logo"
            className="logo-image"
          />
        </div>

        <Menu theme="dark" mode="horizontal" className="menu">
          <div className="left-menu">
            <Menu.Item key="1" className="menu-item">
              <Link to='/'>Home</Link>
            </Menu.Item>
            <Menu.Item key="2" className="menu-item">
              Book office
            </Menu.Item>
            <Menu.SubMenu
              key="3"
              title="Order"
              popupClassName="submenu-popup" // Custom popup class name
              className="menu-item"
              icon={<DownOutlined />}
            >
              <Menu.Item key="food" className="submenu-item">
                Food
              </Menu.Item>
              <Menu.Item key="drink" className="submenu-item">
                Drink
              </Menu.Item>
              <Menu.Item key="utilities" className="submenu-item">
                Utilities
              </Menu.Item>
            </Menu.SubMenu>
            <Menu.Item key="4" className="menu-item">
              <Link to='/about-us'>
                About us
              </Link>
            </Menu.Item>
            <Menu.Item key="5" className="menu-item">
              Contact
            </Menu.Item>
            <Menu.Item key="6" className="menu-item">
              <Badge count={cart.length}>
                <ShoppingCartOutlined className="cart-icon" />
              </Badge>
            </Menu.Item>
          </div>

          <div className="right-menu">
            <Menu.Item key="7" className="menu-item">
              <Link to="/login">Login</Link>
            </Menu.Item>
            <Menu.Item key="8" className="menu-item">
              <Link to="/register">Register</Link>
            </Menu.Item>
          </div>
        </Menu>
      </Header>
    </div>
  );
}

export default Header;
