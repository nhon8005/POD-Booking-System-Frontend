import React from "react";
import { Dropdown } from "react-bootstrap";
import OrdersChartComponent from "../charts/OrdersChartComponent";

export default function OrdersCardComponent() {

    const orders = [
        { name: "Pending", value: 547, color: "purple", icon: "pending" },
        { name: "Shipped", value: 398, color: "blue", icon: "add_circle" },
        { name: "Received", value: 605, color: "green", icon: "check_circle" },
        { name: "Cancelled", value: 249, color: "red", icon: "cancel" },
        { name: "Refunded", value: 176, color: "yellow", icon: "error" }
    ];

    return (
        <div className="mc-card">
            <div className="mc-card-header">
                <h4 className="mc-card-title">Orders Overview</h4>
                <Dropdown bsPrefix="mc-dropdown">
                    <Dropdown.Toggle bsPrefix="mc-dropdown-toggle">
                        <i className="material-icons">more_horiz</i>
                    </Dropdown.Toggle>
                    <Dropdown.Menu align="end" className="mc-dropdown-paper">
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">history</i>
                            <span>Last Day</span>
                        </button>
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">history</i>
                            <span>Last Week</span>
                        </button>
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">history</i>
                            <span>Last Month</span>
                        </button>
                        <button type="button" className="mc-dropdown-menu">
                            <i className="material-icons">history</i>
                            <span>Last Year</span>
                        </button>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

            <OrdersChartComponent chart={orders} />

            <ul className="mc-order-card-list">
                {orders.map((order, index) => (
                    <li key={index} className="mc-order-card-item">
                        <i className={`material-icons ${order.color}`}>{order.icon}</i>
                        <p>{order.name}</p>
                        <h5>{order.value.toLocaleString()}</h5>
                    </li>
                ))}
            </ul>
        </div>
    );
}
