import React, { useEffect, useState } from "react";
import { Layout, Menu, Badge } from "antd";
import { ShoppingCartOutlined, DownOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../actions"; // Adjust the import path as needed
import "./index.scss";

function Header() {
  const { Header } = Layout;
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user); // Get user data from the store
  const dispatch = useDispatch();
  const [name, setUsername] = useState(null);
  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = window.scrollY;

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // Assuming the username is stored in localStorage for simplicity
      const storedUsername = localStorage.getItem("name");
      setUsername(storedUsername);
    }

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false);
      } else {
        // Scrolling up
        setIsVisible(true);
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout()); // Dispatch the logout action
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    setUsername(null);
    window.location.href = "/"; // Chuyển hướng về trang homepage
  };

  // Define items for the menu
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
  ];

  if (name) {
    menuItems.push(
      {
        key: "7",
        label: `Hello, ${name}`,
      },
      {
        key: "8",
        label: <span onClick={handleLogout}>Logout</span>,
      }
    );
  } else {
    menuItems.push(
      {
        key: "7",
        label: <Link to="/login">Login</Link>,
      },
      {
        key: "8",
        label: <Link to="/register">Register</Link>,
      }
    );
  }

  return (
    <div className={`header-container ${isVisible ? "visible" : "hidden"}`}>
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