import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Dropdown } from "react-bootstrap";
import AnchorComponent from "../../../admin/components_admin/elements/AnchorComponent"; 
import LabelFieldComponent from "../../../admin/components_admin/fields/LabelFieldComponent";
import LabelTextareaComponent from "../../../admin/components_admin/fields/LabelTextareaComponent";
import Footer from "../../../admin/layouts_admin/Footer_admin";


export default function ProductUploadPage() {

    const [uploadFile, setUploadFile] = React.useState('image upload');

    return (
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card mb-4">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">Product Upload</h3> 
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Products</Link></li> 
                                <li className="mc-breadcrumb-item">Product Upload</li> 
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className="mc-card-header">
                            <h4 className="mc-card-title">Basic Information</h4> 
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
                        <Row>
                            <Col xl={12}><LabelFieldComponent type="text" label="Title" fieldSize="mb-4 w-100 h-md"/></Col> 
                            <Col xl={12}><LabelTextareaComponent label="Description" fieldSize="mb-4 w-100 h-text-md" /></Col> 
                            <Col xl={6}><LabelFieldComponent type="text" label="Available Seats" fieldSize="mb-4 w-100 h-md" /></Col> 
                            <Col xl={6}><LabelFieldComponent type="text" label="Brand" fieldSize="mb-4 w-100 h-md" /></Col> 
                            <Col xl={6}><LabelFieldComponent type="text" label="Regular Price" fieldSize="mb-4 w-100 h-md" /></Col> 
                            <Col xl={6}><LabelFieldComponent type="text" label="Discount Price" fieldSize="mb-4 w-100 h-md" /></Col> 
                            
                            <Col xl={12}><LabelTextareaComponent label="Tags" fieldSize="w-100 h-text-md" /></Col> 
                        </Row>
                    </div>
                </Col>
                
                <Col xl={12}>
                    <div className="mc-card">
                        <div className="mc-card-header">
                            <h4 className="mc-card-title">Media and Published</h4> {/* Thay thế t('media_and_published') */}
                            <Dropdown bsPrefix="mc-dropdown">
                                <Dropdown.Toggle bsPrefix="mc-dropdown-toggle">
                                    <i className='material-icons'>more_horiz</i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu align="end" className="mc-dropdown-paper">
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>edit</i><span>Edit</span></button> {/* Thay thế t('edit') */}
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>delete</i><span>Delete</span></button> {/* Thay thế t('delete') */}
                                    <button type='button' className='mc-dropdown-menu'><i className='material-icons'>download</i><span>Download</span></button> {/* Thay thế t('download') */}
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <div className="mc-product-upload-media">
                            <div className="mc-product-upload-image"><img src="/src/assets/location/1.png" alt="product" /></div>
                            <div className="mc-product-upload-image"><img src="/src/assets/location/2.png" alt="product" /></div>
                            <div className="mc-product-upload-image"><img src="/src/assets/location/3.png" alt="product" /></div>
                            <div className="mc-product-upload-image"><img src="/src/assets/location/4.png" alt="product" /></div>
                            <div className="mc-product-upload-file">
                                <input type="file" id="product" onChange={(e)=> setUploadFile(e.target.files[0].name)} />
                                <label htmlFor="product">
                                    <i className="material-icons">collections</i>
                                    <span>{ uploadFile }</span>
                                </label>
                            </div>
                        </div>
                        <AnchorComponent 
                            className="mc-btn w-100 primary mt-5" 
                            text="Publish and View"  
                            icon="cloud_upload" 
                            to="#"
                        />
                    </div>
                </Col>
            </Row>
            <Footer/>
        </div>
    )
}
