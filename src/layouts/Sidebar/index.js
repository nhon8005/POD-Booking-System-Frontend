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


    }

    return (
        <>
            <div className="sidebar">
                <ul>
                    <li>
                        <Link to="/">
                            <Button className={`w-100 ${activeTab === 0 ? 'active' : ''}`}>
                                <span className='icon'><MdDashboard /></span>
                                Dashboard
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
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
                        <Link to="/products">
                            <Button className={`w-100 ${activeTab === 2 ? 'active' : ''}`}>
                                <span className='icon'><FaProductHunt /></span>
                                Products
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/invoices">
                            <Button className={`w-100 ${activeTab === 3 ? 'active' : ''}`}>
                                <span className='icon'><FaFileInvoiceDollar /></span>
                                Invoices
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/settings">
                            <Button className={`w-100 ${activeTab === 4 ? 'active' : ''}`}>
                                <span className='icon'><IoSettingsSharp /></span>
                                Settings
                                <span className='arrow'><FaAngleRight /></span>
                            </Button>
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar;