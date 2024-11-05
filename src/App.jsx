import React, { createContext, useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import HomePage from "./pages/home";
import Layout from "./components/Layout";
import AboutUs from "./pages/about-us";
import AdminPage from "./admin/layouts_admin/Admin_layout"
import UserList from "./admin/pages_admin/UserList";
import UserProfile from "./admin/pages_admin/UserProfile";
import MyAccount from "./admin/pages_admin/MyAccount";
import Ecommerce from "./admin/pages_admin/Ecommerce";
import ProductList from "./admin/pages_admin/ProductList";
import ProductView from "./admin/pages_admin/ProductView";
import ProductUp from "./admin/pages_admin/ProductUpload";
import Invoices from "./admin/pages_admin/Invoice";
import MessagePage from "./admin/pages_admin/Message";
import SettingsPage from "./admin/pages_admin/Settings";
import Booking from "./admin/pages_admin/Booking";

const Mycontext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(() => {
    if (themeMode) {
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode', 'light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode', 'dark');
    }
  }, [themeMode]);

  const values = {
    isToggleSidebar,
    setIsToggleSidebar,
    themeMode,
    setThemeMode,
  };

  const router = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "about-us",
          element: <AboutUs />,
        },
      ],
    },

    {
      path: "login",
      element: <LoginPage />,
    },

    {
      path: "register",
      element: <RegisterPage />,
    },

    {
      path: "admin",
      element: (
        <Mycontext.Provider value={values}>
          <AdminPage />
        </Mycontext.Provider>
      ),
      children: [
        {
          path: "user-list",
          element: <UserList />,
        },

        {
          path: "user-profile",
          element: <UserProfile />,
        },
        
        {
          path: "my-account",
          element: <MyAccount />,
        },

        {
          path: "ecommerce",
          element: <Ecommerce />,
        },

        {
          path: "product-list",
          element: <ProductList />,
        },

        {
          path: "product-view",
          element: <ProductView />,
        },

        {
          path: "product-upload",
          element: <ProductUp />,
        },

        {
          path: "invoice-list",
          element: <Invoices />,
        },

        {
          path: "messages",
          element: <MessagePage />,
        },

        {
          path: "settings",
          element: <SettingsPage />,
        },

        {
          path: "booking",
          element: <Booking />,
        },


      ],
    },

  ]);

  return <RouterProvider router={router} />;
}

export default App;
export { Mycontext };
