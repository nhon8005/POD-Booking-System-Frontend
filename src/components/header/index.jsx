import React from "react"; 
import { Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./index.scss";

function Header() {

  const { Header } = Layout;
  const cart = useSelector((store) => store.cart);




  // Định nghĩa items cho menu
  const menuItems = [
    {
      key: "1",
      label: <Link to="/">Home</Link>,
      
    },
    {
      key: "2",
      label: <Link to="/book">Booking</Link>,
      
    },
    {
      key: "3",
      label: "Order",
      icon: <DownOutlined />,
      
      children: [
        {
          key: "POD",
          label: <Link to="/product">Product</Link>,
        },
        {
          key: "Product",
          label: <Link to="/">Order</Link>,
        },
      ],
    },
    {
      key: "4",
      label: <Link to="/about-us">About us</Link>,
      
    },
    {
      key: "5",
      label: "Contact",
      
    },
    {
      key: "6",
      label: (
        <Link to="/cart">
          <Badge count={cart.length}>
            <ShoppingCartOutlined className="cart-icon" />
          </Badge>
        </Link>
      ),
    },
    {
      key: "7",
      label: <Link to="/login">Login</Link>,
      
    },
    {
      key: "8",
      label: <Link to="/register">Register</Link>,
      
    },
  ];

  return (
    <div className="header-container">
      <Header className="header">
        <div className="logo">
          <img src="src/assets/logo.png" alt="BooCafe-logo" className="logo-image" />
        </div>

        <Menu theme="dark" mode="horizontal" className="menu" items={menuItems} />
      </Header>
    </div>
  );
}

export default Header;
