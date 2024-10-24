import React from "react";
import  LabelFieldComponent from "../fields/LabelFieldComponent";
import { Row, Col, Dropdown } from "react-bootstrap";
import PaginationComponent from "../PaginationComponent";
import ProductsTableComponent from "../tables/ProductsTableComponent";
import products from "../../assets/data/products.json";

export default function ProductsCardComponent() {

    return (
        <div className="mc-card">
            <div className="mc-card-header">
                <h4 className="mc-card-title">Best Selling Products</h4>
                <Dropdown bsPrefix="mc-dropdown">
                    <Dropdown.Toggle bsPrefix="mc-dropdown-toggle">
                        <i className="material-icons">more_horiz</i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end" className="mc-dropdown-paper">
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">edit</i>
                            <span>Edit</span>
                        </button>
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">delete</i>
                            <span>Delete</span>
                        </button>
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">download</i>
                            <span>Download</span>
                        </button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <Row xs={1} sm={2} xl={4}>
                <Col>
                    <LabelFieldComponent
                        label="Show By"
                        option={["12 rows", "24 rows", "36 rows"]}
                        labelDir="label-col"
                        fieldSize="mb-4 w-100 h-md"
                    />
                </Col>
                <Col>
                    <LabelFieldComponent
                        label="Rating"
                        option={["1 star", "2 stars", "3 stars", "4 stars", "5 stars"]}
                        labelDir="label-col"
                        fieldSize="mb-4 w-100 h-md"
                    />
                </Col>
                <Col>
                    <LabelFieldComponent
                        label="Coffee Shop"
                        option={["Highland Coffee", "Seven Days Coffee", "Katinat Coffee"]}
                        labelDir="label-col"
                        fieldSize="mb-4 w-100 h-md"
                    />
                </Col>
                <Col>
                    <LabelFieldComponent
                        type="search"
                        label="Search By"
                        placeholder="ID / Rating / Coffee Shop"
                        labelDir="label-col"
                        fieldSize="mb-4 w-100 h-md"
                    />
                </Col>
            </Row>
            <ProductsTableComponent 
                thead={products.thead} 
                tbody={products.tbody} 
            />
            <PaginationComponent />
        </div>
    );
}
