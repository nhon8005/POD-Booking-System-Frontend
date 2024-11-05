import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import FloatCardComponent  from "../../../admin/components_admin/cards/FloatCardComponent";
import ProductsTableComponent from "../../../admin/components_admin/tables/ProductsTableComponent";
import LabelFieldComponent from "../../../admin/components_admin/fields/LabelFieldComponent";
import PaginationComponent  from "../../../admin/components_admin/PaginationComponent";
import products from "../../../assets/data/products.json";
import Footer from "../../layouts_admin/Footer_admin";

export default function ProductListPage() {

    const floats = [
        { "title": "Total Products", "digit": 547, "icon": "shopping_bag", "variant": "lg blue" }, 
        { "title": "Total Categories", "digit": 605, "icon": "widgets", "variant": "lg green" },
        { "title": "Total Brands", "digit": 249, "icon": "verified_user", "variant": "lg purple" }
    ]

    return (
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">Product List</h3>
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Products</Link></li>
                                <li className="mc-breadcrumb-item">Product List</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                {floats.map((float, index) => (
                    <Col key={ index } sm={6} lg={4}>
                        <FloatCardComponent 
                            variant={ float.variant }
                            digit={float.digit}
                            title={float.title}
                            icon={ float.icon }
                        />
                    </Col>
                ))}
                <Col xl={12}>
                    <div className="mc-card">
                        <Row>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <LabelFieldComponent
                                    label="Show By"
                                    option={["12 rows", "24 rows", "36 rows"]}
                                    labelDir="label-col"
                                    fieldSize="w-100 h-md mb-4"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <LabelFieldComponent
                                    label="Rating By"
                                    option={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
                                    labelDir="label-col"
                                    fieldSize="w-100 h-md mb-4"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <LabelFieldComponent
                                    label="Coffee Shop"
                                    option={["Highland Coffee", "Seven Days Coffee", "Katinat Coffee"]}
                                    labelDir="label-col"
                                    fieldSize="w-100 h-md mb-4"
                                />
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={3}>
                                <LabelFieldComponent
                                    type="search"
                                    label="Search By"
                                    placeholder="ID / Rating / Coffee Shop"
                                    labelDir="label-col"
                                    fieldSize="mb-4 w-100 h-md"
                                />
                            </Col>
                            <Col xl={12}>
                                <ProductsTableComponent 
                                    thead={ products.thead } 
                                    tbody={ products.tbody } 
                                />
                                <PaginationComponent />
                            </Col>
                        </Row>
                    </div>
                </Col>
            </Row>
            <Footer />
        </div>
    );
}
