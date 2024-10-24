import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import FloatCardComponent from "../../../components/cards/FloatCardComponent";
import PaginationComponent from "../../../components/PaginationComponent";
import BookingTableComponent from "../../../components/tables/BookingTableComponent";
import LabelFieldComponent from "../../../components/fields/LabelFieldComponent";
import orders from "../../../assets/data/orderTable.json";
import Footer from "../../../layouts/Footer";

export default function OrderListPage() {

    const floats = [
        { "title": "Pending Bookings", "digit": 547, "icon": "event", "variant": "lg purple" }, 
        { "title": "Confirmed Bookings", "digit": 398, "icon": "check_circle", "variant": "lg blue" },
        { "title": "Completed Bookings", "digit": 605, "icon": "thumb_up", "variant": "lg green" },
        { "title": "Cancelled Booking", "digit": 249, "icon": "remove_circle", "variant": "lg red" }
    ];

    return (
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">Booking List</h3>
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Orders</Link></li>
                                <li className="mc-breadcrumb-item">Booking List</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                {floats.map((float, index) => (
                    <Col key={index} xl={3}>
                        <FloatCardComponent 
                            variant={float.variant}
                            digit={float.digit}
                            title={float.title}
                            icon={float.icon}
                        />
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="mc-card">
                        <div className="mc-card-header">
                            <h4 className="mc-card-title">Booking Information</h4>
                            <Dropdown bsPrefix="mc-dropdown">
                                <Dropdown.Toggle bsPrefix="mc-dropdown-toggle">
                                    <i className='material-icons'>more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="mc-dropdown-paper">
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>edit</i><span>Edit</span></button>
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>delete</i><span>Delete</span></button>
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>download</i><span>Download</span></button>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Row xs={1} sm={4}>
                            <Col>
                                <LabelFieldComponent 
                                    label="Show By"
                                    option={["12 row", "24 row", "36 row"]}
                                    labelDir="label-col"
                                    fieldSize="mb-4 w-100 h-md"
                                /> 
                            </Col>
                            <Col>
                                <LabelFieldComponent 
                                    label="Status By"
                                    option={["Pending", "Shipped", "Received", "Cancelled"]}
                                    labelDir="label-col"
                                    fieldSize="mb-4 w-100 h-md"
                                /> 
                            </Col>
                            <Col>
                                <LabelFieldComponent 
                                    type="date"
                                    label="Issued By"
                                    labelDir="label-col"
                                    fieldSize="mb-4 w-100 h-md"
                                /> 
                            </Col>
                            <Col>
                                <LabelFieldComponent 
                                    type="search"
                                    label="Search By"
                                    labelDir="label-col"
                                    fieldSize="mb-4 w-100 h-md"
                                    placeholder="id / name / email"
                                /> 
                            </Col>
                        </Row>
                        <BookingTableComponent 
                            thead={ orders.thead } 
                            tbody={ orders.tbody } 
                        />
                        <PaginationComponent />
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
