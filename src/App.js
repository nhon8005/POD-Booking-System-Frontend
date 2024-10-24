import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './assets/css/sass/style.scss';
import UsersList from './pages/main/UserList';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import UserProfile from './pages/main/UserProfile';
import MyAccount from './pages/main/MyAccount';
import EcommercePage from './pages/main/Ecommerce';
import MessagePage from './pages/main/Message';
import ProductListPage from './pages/main/ProductList';
import ProductViewPage from './pages/main/ProductView';
import ProductUploadPage from './pages/main/ProductUpload';
import InvoiceListPage from './pages/main/InvoiceList';
import { createContext, useEffect, useState } from 'react';
import BookingListPage from './pages/main/Booking';
import SettingsPage from './pages/main/Setting';






const Mycontext = createContext();

function App() {

  const [isToggleSidebar, setIsToggleSidebar] = useState(false);
  const [themeMode, setThemeMode] = useState(true);

  useEffect(()=>{
    if(themeMode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('themeMode','light');
    } else {
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('themeMode','dark');
    }
    
  },[themeMode]);

  const values={
    isToggleSidebar,
    setIsToggleSidebar,
    themeMode,
    setThemeMode
  }


  return (
    <BrowserRouter>
    <Mycontext.Provider value={values}>      
      <Header />
      <div className='main d-flex'>
      
        <div className={`sidebarWrapper ${isToggleSidebar===true ? 'toggle' : ''}`}>
          <Sidebar />
          
        </div>
        
        
        <div className={`content ${isToggleSidebar===true ? 'toggle' : ''}`}>        
          <Routes>
            <Route path="/"  element={<EcommercePage />} />
            
            <Route path="/ecommerce"  element={<EcommercePage />} />            
            <Route path="/user-list"  element={<UsersList />} />
            <Route path="/user-profile"  element={<UserProfile />} />
            <Route path="/my-account"  element={<MyAccount />} />
            <Route path="/product-list"  element={<ProductListPage />} />
            <Route path="/product-view"  element={<ProductViewPage />} />
            <Route path="/product-upload"  element={<ProductUploadPage />} />
            <Route path="/invoice-list"  element={<InvoiceListPage />} />
            <Route path="/booking"  element={<BookingListPage />} />
            <Route path="/messages"  element={<MessagePage />} />
            <Route path="/settings"  element={<SettingsPage />} />
          </Routes>     
        </div>
      </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {Mycontext};
