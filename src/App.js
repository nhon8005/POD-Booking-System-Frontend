import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import './assets/css/sass/style.scss';
import UsersList from './pages/main/Users/userList';
import Sidebar from './layouts/Sidebar';
import Header from './layouts/Header';
import { createContext, useEffect, useState } from 'react'


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
            <Route path="/"  element={<UsersList />} />
            <Route path="/user-list"  element={<UsersList />} />
          </Routes>     
        </div>
      </div>
      </Mycontext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {Mycontext};