

import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import LabelFieldComponent from "../../../components/fields/LabelFieldComponents";
import UsersTableComponent from "../../../components/tables/UsersTableComponents";
import users from "../../../assets/data/users.json";
import PaginationComponent from "../../../components/PaginationComponent";
import Footer from "../../../layouts/Footer";

const Users = () => {
    console.log("Users component rendered");
    return (
        
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
                                    <button type='button' className="mc-dropdown-menu" ><i className="material-icons">edit</i><span>Edit</span></button>
                                    <button type='button' className="mc-dropdown-menu" ><i className="material-icons">delete</i><span>Delete</span></button>
                                    <button type='button' className="mc-dropdown-menu" ><i className="material-icons">download</i><span>Download</span></button>
                                </Dropdown.Menu>
                            </Dropdown>
                            </div>
                        
                            <Row xs={1} sm={2} xl={4}>
                                <Col>
                                    <LabelFieldComponent
                                        label={'Show By'}
                                        option={["12 row", "24 row", "36 row"]}
                                        labelDir="label-col"
                                        fieldSize="md-4 w-100 h-md"
                                    />
                                </Col>
                                <Col>
                                    <LabelFieldComponent
                                        label={'Role By'}
                                        option={["admin", "member", "client","manager","vendor"]}
                                        labelDir="label-col"
                                        fieldSize="md-4 w-100 h-md"
                                    />
                                </Col>
                                <Col>
                                    <LabelFieldComponent
                                        label={'Status By'}
                                        option={["approved", "pending", "blocked"]}
                                        labelDir="label-col"
                                        fieldSize="md-4 w-100 h-md"
                                    />
                                </Col>
                                <Col>
                                    <LabelFieldComponent
                                        type="search"
                                        label={'Search By'}
                                        placeholder={('id') + ' / ' + ('name') + ' / ' + ('email') + ' / ' + ('number')}
                                        labelDir="label-col"
                                        fieldSize="md-4 w-100 h-md"
                                    />
                                </Col>
                            </Row>
                            <UsersTableComponent
                                thead={ users.thead}
                                tbody={ users.tbody }
                            />
                            <PaginationComponent />
                          
                        </div>
                    </Col>
                </Row>
                <Footer/>
            </div>
        
    )
}

export default Users;

{/* <div className="right-content w-100">
<div className="row">
    <div className="col-xl-12">
        <div className="userlistBoxWrapper d-flex">
            <div className="userlistBox">

            </div>
            <div className="userlistBox">

            </div>
            <div className="userlistBox">

            </div>


        </div>
    </div>
</div>
</div> */}