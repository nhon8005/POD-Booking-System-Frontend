import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../images/logo.webp';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";
import SearchBox from '../SearchBox';
import { MdNightlight } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonIcon from '@mui/icons-material/Person';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';
import { Mycontext } from '../../App';




const Header = () => {


  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpennitifications, setIsOpenNotifications] = useState(false);
  const openMyAcc = Boolean(anchorEl);
  const openNotifications = Boolean(isOpennitifications);

  const context = useContext(Mycontext)

  const handleOpenMyAcc = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorEl(null);
  };
  const handleOpenNotifications = () => {
    setIsOpenNotifications(true);
  };
  const handleCloseNotifications = () => {
    setIsOpenNotifications(false);
  };

  return (
    <>
      {/* Header */}

      <header className="d-flex align-items-center">
        <div className="container-fluid w-100">
          <div className="row d-flex align-items-center w-100">
            {/* Logo */}
            <div className="col-sm-2 part1">
              <Link to={'/'} className="d-flex align-items-center logo">
                <img src= "/images/logo.webp" alt="logo"/>
                <span className="ml-2">BooCafe</span>
              </Link>
            </div>

            {/* Button and SearchBox */}

            <div className="col-sm-3 d-flex align-items-center part2 pl-4">
              <Button className="rounded-circle mr-3" onClick={() => context.
                setIsToggleSidebar(!context.isToggleSidebar)}>
                  {
                      context.isToggleSidebar===false ? <MdMenuOpen /> : <MdOutlineMenu/>
                  }
              </Button>
              <SearchBox />
            </div>

            <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
              <Button className="rounded-circle mr-3" onClick={()=>context.
                setThemeMode(!context.themeMode)}>
                <MdOutlineLightMode />
              </Button>

              <div className='dropdownWrapper position-relative'>
                <Button className="rounded-circle mr-3"
                  onClick={handleOpenNotifications}
                ><FaRegBell /></Button>

                {/* Drop Down Notifications   */}

                <Menu
                  anchorEl={isOpennitifications}
                  className='notifications dropdown_list'
                  id="notifications"
                  open={openNotifications}
                  onClose={handleCloseNotifications}
                  onClick={handleCloseNotifications}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <div className="head pl-3 pb-0">
                    <h4>Notifications</h4>
                  </div>

                  <Divider className="mb-1" />

                  <div className='scroll'>
                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>

                    <MenuItem onClick={handleCloseNotifications}>
                      <div className='d-flex'>
                        <div>
                          <div className='userImg'>
                            <span className='rounded-circle'>
                              <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                            </span>
                          </div>
                        </div>

                        <div className='dropdownInfo'>
                          <h4>
                            <span>
                              <b>VyNgok</b>
                              added to her favorites list
                              <b> Leather belt steve madden</b>
                            </span>
                          </h4>
                          <p className='text-sky mb-0'>few seconds ago</p>
                        </div>
                      </div>
                    </MenuItem>
                  </div>
                </Menu>



              </div>

              {/* My Account */}

              <div className="myAccWrapper">
                <Button className=" myAcc d-flex align-items-center"
                  onClick={handleOpenMyAcc}>
                  <div className="userImg">
                    <span className="rounded-circle">
                      <img src="https://avatars.githubusercontent.com/u/155642553?v=4" />
                    </span>
                  </div>
                  <div className="userInfo">
                    <h4>VyNgok</h4>
                  </div>

                </Button>
                <Menu
                  anchorEl={anchorEl}
                  id="account-menu"
                  open={openMyAcc}
                  onClose={handleCloseMyAcc}
                  onClick={handleCloseMyAcc}
                  transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                  anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >

                  <MenuItem onClick={handleCloseMyAcc}>
                    <ListItemIcon>
                      <PersonIcon fontSize="small" />
                    </ListItemIcon>
                    My Profile
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAcc}>
                    <ListItemIcon>
                      <PrivacyTipIcon fontSize="small" />
                    </ListItemIcon>
                    Reset Password
                  </MenuItem>
                  <MenuItem onClick={handleCloseMyAcc}>
                    <ListItemIcon>
                      <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                  </MenuItem>
                </Menu>
              </div>
            </div>


          </div>
        </div>
      </header>
    </>
  );
}

export default Header;