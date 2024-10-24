import React from "react";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import EcommerceCardComponent from "../../../components/cards/EcommerceCardComponent";
import SalesCardComponent from "../../../components/cards/SalesCardComponent";
import ProductsCardComponent from "../../../components/cards/ProductsCardComponent";
import RevenueCardComponent from "../../../components/cards/RevenueCardComponent";
import ClientsCardComponent from "../../../components/cards/ClientsCardComponent";
import ActivityCardComponent from "../../../components/cards/ActivityCardComponent";
import OrdersCardComponent from "../../../components/cards/OrdersCardComponent";
import heros from "../../../assets/data/heros.json";
import Footer from "../../../layouts/Footer";

export default function EcommercePage() {


    return (
        <div className="mc-main active">
            <Row>
                <Col xl={12}>
                    <div className="mc-card">
                        <div className='mc-breadcrumb'>
                            <h3 className="mc-breadcrumb-title">Ecommerce</h3>
                            <ul className="mc-breadcrumb-list">
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Home</Link></li>
                                <li className="mc-breadcrumb-item"><Link to='#' className="mc-breadcrumb-link">Dash Board</Link></li>
                                <li className="mc-breadcrumb-item">Ecommerce</li>
                            </ul>
                        </div>
                    </div>
                </Col>
                <Col xs={12} xl={8}>
                    <Row xs={1} sm={2}>
                        {heros.map((hero, index) => (
                            <Col key={index}>
                                <EcommerceCardComponent
                                    icon={hero.icon}
                                    trend={hero.trend}
                                    title={hero.title}
                                    variant={hero.variant}
                                    number={hero.number}
                                    percent={hero.percent} 
                                />
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col xs={12} xl={4}> <SalesCardComponent /> </Col>
                <Col xl={12}> <ProductsCardComponent /> </Col>
                <Col xl={12}> <RevenueCardComponent /> </Col>
                {/* <Col xl={4}> <OrdersCardComponent /> </Col> */}
                <Col xl={12}> <ClientsCardComponent /> </Col>
                {/* <Col xl={6}> <ActivityCardComponent /> </Col> */}
            </Row>
            <Footer />
        </div>
    );
}
