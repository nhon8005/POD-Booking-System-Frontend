
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import LabelFieldComponent from "../../components_admin/fields/LabelFieldComponent";
import UsersTableComponent from "../../components_admin/tables/UsersTableComponents";
import PaginationComponent from "../../components_admin/PaginationComponent";
import Footer from "../../layouts_admin/Footer_admin";
import api from "../../../config/axios";
import { Button } from 'react-bootstrap';




const Users = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await api.get('/account'); // Đường dẫn API để lấy người dùng
            setUsers(response.data);
            setFilteredUsers(response.data); // Khởi tạo filteredUsers
            setLoading(false);
        } catch (error) {
            toast.error("Failed to fetch users");
            setLoading(false);
        }
    };

    const handleSearch = (value) => {
        setSearchTerm(value);
        if (value) {
            const filtered = users.filter(user =>
                account.id.toString().includes(value) ||
                account.name.toLowerCase().includes(value.toLowerCase()) ||
                account.email.toLowerCase().includes(value.toLowerCase())
                
            );
            setFilteredUsers(filtered);
        } else {
            setFilteredUsers(users);
        }
    };

    const handleDelete = async (Id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
        try {
            await api.delete(`user/${Id}`); // Đường dẫn API để xóa người dùng
            toast.success("User deleted successfully");
            fetchUsers(); // Làm mới danh sách người dùng
        } catch (error) {
            toast.error("Failed to delete user");
        }
    }
    };

    return (
        <>
            <div className="mc-main active">
                <Row>
                    <Col xl={12}>
                        <div className="mc-card">
                            <div className="mc-breadcrumb">
                                <h3 className="mc-breadcrumb-title">User List</h3>
                                <ul className="mc-breadcrumb-list">
                                    <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                    <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Users</Link></li>
                                    <li className="mc-breadcrumb-item">User List</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="mc-float-card lg purple">
                            <h3>547</h3>
                            <p>Pending Users</p>
                            <i className="material-icons">pending</i>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="mc-float-card lg green">
                            <h3>605</h3>
                            <p>Approved Users</p>
                            <i className="material-icons">check_circle</i>
                        </div>
                    </Col>
                    <Col xl={4}>
                        <div className="mc-float-card lg red">
                            <h3>249</h3>
                            <p>Blocked Users</p>
                            <i className="material-icons">remove_circle</i>
                        </div>
                    </Col>
                    <Col xl={12}>
                        <div className="mc-card">
                            <div className="mc-card-header">
                                <h4 className="mc-card-title">Registered Users</h4>
                                <Dropdown bsPrefix="mc-dropdown">
                                    <Dropdown.Toggle bsPrefix="mc-dropdown-toggle">
                                        <i className="material-icons">more_horiz</i>
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu align="end" className="mc-dropdown-paper">
                                        <button type='button' className="mc-dropdown-menu"><i className="material-icons">edit</i><span>Edit</span></button>
                                        <button type='button' className="mc-dropdown-menu"><i className="material-icons">delete</i><span>Delete</span></button>
                                        <button type='button' className="mc-dropdown-menu"><i className="material-icons">download</i><span>Download</span></button>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>

                            <Row xs={1} sm={2} xl={4}>
                                <Col>
                                    <LabelFieldComponent
                                        type="search"
                                        label={'Search By'}
                                        placeholder={('id') + ' / ' + ('name') + ' / ' + ('email') + ' / ' + ('number')}
                                        labelDir="label-col"
                                        fieldSize="md-4 w-100 h-md"
                                        onSearch={handleSearch}
                                    />
                                </Col>

                            </Row>
                            <UsersTableComponent
                                thead={["Username", "Email", "Phone", "Role", "Actions"]}
                                tbody={filteredUsers.map(account => ({
                                    key: account.id,
                                    id: account.id,
                                    username: account.username,
                                    email: account.email,
                                    phone: account.phone,
                                    role: account.role,
                                    actions: (
                                        <div>
                                            <Link to={`/admin/user-profile/${account.id}`}>
                                                <Button variant="primary">View</Button>
                                            </Link>
                                            <Button onClick={() => {/* Handle edit logic */}}>Edit</Button>
                                            <Button variant="danger" onClick={() => handleDelete(account.id)}>Delete</Button>
                                        </div>
                                    )
                                }))}
                            />
                            
                            <PaginationComponent />

                        </div>
                    </Col>
                </Row>
                <Footer />
            </div>

        </>

    )
}

export default Users;


