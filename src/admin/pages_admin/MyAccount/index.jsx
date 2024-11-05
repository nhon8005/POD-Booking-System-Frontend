import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Tab, Tabs, Form } from "react-bootstrap";
import LegendFieldComponent from "../../../admin/components_admin/fields/LegendFieldComponent";
import IconFieldComponent from "../../../admin/components_admin/fields/IconFieldComponent";
import LegendTextareaComponent from "../../../admin/components_admin/fields/LegendTextareaComponent";
import ButtonComponent from "../../../admin/components_admin/elements/ButtonComponent";
import FileUploadComponent from "../../../admin/components_admin/FileUploadComponent"; 
import Footer from "../../../admin/layouts_admin/Footer_admin";

export default function MyAccountPage() {

    return (
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">My Account</h3>
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">User</Link></li>
                                <li className="mc-breadcrumb-item">My Account</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={12}>
                    <div className="mc-card">
                        <Tabs defaultActiveKey="profile" id="mc" className="mc-tabs">
                            <Tab eventKey="profile" title= 'Edit Profile' className="mc-tabpane profile">
                                <div className="mc-tab-card">
                                    <h6 className="mc-tab-card-title">Public Information</h6>
                                    <Row>
                                        <Col xl={4}>
                                            <div className="mc-user-avatar-upload">
                                                <div className="mc-user-avatar">
                                                    <img src="/src/assets/01.webp" alt="avatar" />
                                                </div>
                                                <FileUploadComponent icon="cloud_upload" text="Upload" />
                                            </div>
                                        </Col>
                                        <Col xl={8}>
                                            <Row>
                                                <Col xl={6}><LegendFieldComponent type="text" title='fullname' value="Nguyen Ngoc Tuong Vy" className="mb-4"/></Col>
                                                <Col xl={6}><LegendFieldComponent type="text" title='username' value="Vy Ngok" className="mb-4"/></Col>
                                                <Col xl={12}><LegendTextareaComponent title='biography' longText="I consider myself as a creative, professional and a flexible person. I can adapt with any kind of brief and design style" /></Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </div>
                                <div className="mc-tab-card">
                                    <h6 className="mc-tab-card-title">Private Information</h6>
                                    <Row>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" type="text" title='Unique Id' value="#783404edft97e3445" /></Col>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" title='Role' option={["member", "admin", "vendor", "founder"]} /></Col>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" title='Status' option={["approved", "pending", "blocked"]} /></Col>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" type="email" title='Email' value="jiyuong1808@gmail.com" /></Col>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" type="tel" title='Phone' value="+84 706354777" /></Col>
                                        <Col xl={4}><LegendFieldComponent className="mb-4" type="url" title='Website' value="https://mironmahmud.com/" /></Col>
                                        <Col xl={12}><LegendTextareaComponent title='Address' longText="385 Street, Tang Nhon Phu A Ward, Thu Duc City" /></Col>
                                    </Row>
                                </div>
                                <div className="mc-tab-card">
                                    <h6 className="mc-tab-card-title">Social Information</h6>
                                    <Row xs={1} md={2}>
                                        <Col><LegendFieldComponent className="mb-4" type="url" title="facebook" value="https://www.facebook.com/profile.php?id=100072479922734"/></Col>
                                        <Col><LegendFieldComponent className="mb-4" type="url" title="github" value="https://github.com/nhon8005/POD-Booking-System-Frontend"/></Col>
                                        {/* <Col><LegendFieldComponent className="mb-4" type="url" title="linkedin" value="https://example.com/"/></Col>
                                        <Col><LegendFieldComponent className="mb-4" type="url" title="instagram" value="https://example.com/"/></Col>
                                        <Col><LegendFieldComponent className="mb-4" type="url" title="youtube" value="https://example.com/"/></Col>
                                        <Col><LegendFieldComponent className="mb-4" type="url" title="pinterest" value="https://example.com/"/></Col> */}
                                    </Row>
                                </div>
                                <ButtonComponent className="mc-btn primary" icon="verified" text='Save Changes' />
                            </Tab>
                            <Tab eventKey="password" title='Change Password' className="mc-tabpane password">
                                <div className="mc-tab-card">
                                    <h6 className="mc-tab-card-title">Generate Password</h6>
                                    <Row>
                                        <Col xs={12} md={12}><IconFieldComponent icon="lock" type="password" placeholder='current password' classes="w-100 h-lg mb-4" passwordVisible /></Col>
                                        <Col xs={12} md={6}><IconFieldComponent icon="add_moderator" type="password" placeholder='new password' classes="w-100 h-lg mb-4" passwordVisible /></Col>
                                        <Col xs={12} md={6}><IconFieldComponent icon="verified_user" type="password" placeholder='confirm password' classes="w-100 h-lg mb-4" passwordVisible /></Col>
                                    </Row>
                                </div>
                                <ButtonComponent className="mc-btn primary" icon="verified" text='save_changes' />
                            </Tab>
                            <Tab eventKey="settings" title='other_settings' className="mc-tabpane settings">
                                <Row xs={1} md={2}>
                                    <Col>
                                        <div className="mc-tab-card">
                                            <h6 className="mc-tab-card-title">activity_email_settings</h6>
                                            <Form.Check type="switch" id="switch1" label="Someone adds you as a connection" />
                                            <Form.Check type="switch" id="switch2" label="you're sent a direct message" defaultChecked/>
                                            <Form.Check type="switch" id="switch3" label="New membership approval" defaultChecked/>
                                            <Form.Check type="switch" id="switch4" label="Send Copy To Personal Email" defaultChecked/>
                                            <Form.Check type="switch" id="switch5" label="Tips on getting more out of PCT-themes" />
                                        </div>
                                    </Col>
                                    <Col>
                                        <div className="mc-tab-card">
                                            <h6 className="mc-tab-card-title">product_email_settings</h6>
                                            <Form.Check type="checkbox" id="check1" label="Someone adds you as a connection" defaultChecked/>
                                            <Form.Check type="checkbox" id="check2" label="you're sent a direct message" defaultChecked/>
                                            <Form.Check type="checkbox" id="check3" label="New membership approval" defaultChecked/>
                                            <Form.Check type="checkbox" id="check4" label="Send Copy To Personal Email" />
                                            <Form.Check type="checkbox" id="check5" label="Tips on getting more out of PCT-themes" />
                                        </div>
                                    </Col>
                                </Row>
                                <ButtonComponent className="mc-btn primary" icon="verified" text='update_changes' />
                            </Tab>
                        </Tabs>
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}