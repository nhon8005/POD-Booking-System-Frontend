import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import  AnchorComponent  from "../../../components/elements/AnchorComponent";
import Footer from "../../../layouts/Footer";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";

export default function UserProfilePage() {

   
    return (   
        
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">User Profile</h3>
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Users</Link></li>
                                <li className="mc-breadcrumb-item">User Profile</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className="mc-card-header">
                            <h4 className="mc-card-title">User Information</h4>
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
                        <div className="mc-user-group">
                            <div className="mc-user-profile">
                                <div className="mc-round-avatar md">
                                    <img src="images/01.webp" alt="avatar" />
                                </div>
                                <div className="mc-duel-text md">
                                    <h3 className="mc-duel-text-title">Vy Ngok</h3>
                                    {/* <p className="mc-duel-text-descrip">@mironcoder</p> */}
                                </div>
                            </div>
                            <div className="mb-4">
                                <h6 className="mc-divide-title mb-4">Communication</h6>
                                <ul className="mc-user-metalist">
                                    <li><i className="material-icons">phone_in_talk</i><span>+84 706354777</span></li>
                                    <li><i className="material-icons">feed</i><span>jiyuong1808@gmail.com</span></li>
                                    {/* <li><i className="material-icons">public</i><span>examplehotash.com</span></li> */}
                                    <li><i className="material-icons">map</i><span>385 Street, Tang Nhon Phu A Ward, Thu Duc City</span></li>
                                </ul>
                            </div>
                            <div className="mb-4">
                                <h6 className="mc-divide-title mb-3">Biography</h6>
                                <p className="mc-user-bio mb-4">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
                            </div>
                            <div>
                                <h6 className="mc-divide-title mb-3">Elsewhere</h6>
                                <nav className="mc-user-social">
                                    <AnchorComponent to="#" className="facebook"><i className="icofont-facebook"><FaFacebookF /></i><span>facebook</span></AnchorComponent>
                                    <AnchorComponent to="#" className="github"><i className="icofont-twitter"><FaGithub /></i><span>github</span></AnchorComponent>
                                    {/* <AnchorComponent to="#" className="linkedin"><i className="icofont-linkedin"></i><span>linkedin</span></AnchorComponent>
                                    <AnchorComponent to="#" className="whatsapp"><i className="icofont-whatsapp"></i><span>whatsapp</span></AnchorComponent>
                                    <AnchorComponent to="#" className="youtube"><i className="icofont-youtube-play"></i><span>youtube</span></AnchorComponent> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </Col>
                {/* <Col xl={7}>
                    <Row>
                        {floats.map((float, index) => (
                            <Col md={4} lg={4} key={ index }>
                                <FloatCardComponent 
                                    variant={ float.variant }
                                    digit={ float.digit }
                                    title={ float.title }
                                    icon={ float.icon }
                                />
                            </Col>
                        ))}
                        <Col xl={12}> 
                            <ActivityCardComponent /> 
                        </Col>
                    </Row>
                </Col> */}
            </Row> 
            <Footer />
        </div>      
    )
}