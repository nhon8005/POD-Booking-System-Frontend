import Button from '@mui/material/Button';
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { IoPersonCircle } from "react-icons/io5";
import { FaProductHunt } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoSettingsSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { useContext, useState } from 'react';
import { Mycontext } from '../../App';
import { IoMdLock } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
    const [activeTab, setActiveTab] = useState(null);
    const [isToggleSubmenu, setIsToggleSubmenu] = useState(false);

    const context = useContext(Mycontext);

    const isOpenSubmenu = (index) => {
        if (activeTab === index) {
            setIsToggleSubmenu(!isToggleSubmenu);
        } else {
            setActiveTab(index);
            setIsToggleSubmenu(true);
        }
    };

    return (
        <div className="sidebar">
            <ul>
                <li>
                    <Button className={`w-100 ${activeTab === 0 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(0)}>
                        
                            <span className='icon'><MdDashboard /></span>
                            Dashboard
                            <span className='arrow'><FaAngleRight /></span>
                        
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 0 && isToggleSubmenu ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="/ecommerce">Ecommerce</Link></li>
                            <li><Link to="/analytics">Analytics</Link></li>
                            <li><Link to="/crm">Crm</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(1)}>
                        <span className='icon'><IoPersonCircle /></span>
                        Users
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="/user-list">User List</Link></li>
                            <li><Link to="/user-profile">User Profile</Link></li>
                            <li><Link to="/my-account">My Account</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu ? 'active' : ''}`} onClick={() => isOpenSubmenu(2)}>
                        <span className='icon'><FaProductHunt /></span>
                        Products
                        <span className='arrow'><FaAngleRight /></span>
                    </Button>
                    <div className={`submenuWrapper ${activeTab === 2 && isToggleSubmenu ? 'collapsed' : 'collapse'}`}>
                        <ul className='submenu'>
                            <li><Link to="/product-list">Product List</Link></li>
                            <li><Link to="/product-view">Product View</Link></li>
                            <li><Link to="/product-upload">Product Upload</Link></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <Link to="/invoice-list" className="sidebar-link">
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                            <span className='icon'><FaFileInvoiceDollar /></span>
                            Invoices
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/booking" className="sidebar-link">
                        <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                            <span className='icon'><FaCalendarCheck /></span>
                            Booking
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/messages" className="sidebar-link">
                        <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                            <span className='icon'><MdEmail /></span>
                            Messages
                        </Button>
                    </Link>
                </li>
                <li>
                    <Link to="/settings" className="sidebar-link">
                        <Button className={`w-100 ${activeTab === 5 ? 'active' : ''}`}>
                            <span className='icon'><IoMdSettings /></span>
                            Settings
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
