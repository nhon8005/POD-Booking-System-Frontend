import React, { useState, useEffect } from "react";
import Modal from 'react-bootstrap/Modal';
import AnchorComponent from "../elements/AnchorComponent";
import ButtonComponent from "../elements/ButtonComponent";

export default function ProductsTableComponent({ thead, tbody }) {

    const [alertModal, setAlertModal] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => { 
        setData(tbody); 
    }, [tbody]);

    const handleCheckbox = (event) => {
        const { name, checked } = event.target;

        if (name === "allCheck") {
            const checkData = data.map((item) => ({
                ...item, isChecked: checked
            }));
            setData(checkData);
        } else {
            const checkData = data.map((item) =>
                item.name === name ? { ...item, isChecked: checked } : item
            );
            setData(checkData);
        }
    };

    return (
        <div className="mc-table-responsive">
            <table className="mc-table product">
                <thead className="mc-table-head primary">
                    <tr>
                        <th>
                            <div className="mc-table-check">
                                <input
                                    type="checkbox"
                                    name="allCheck"
                                    checked={data.filter((item) => !item.isChecked).length < 1}
                                    onChange={handleCheckbox}
                                />
                                <p>UID</p>
                            </div>
                        </th>
                        {thead.map((item, index) => (
                            <th key={index}>{item}</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="mc-table-body even">
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td title={index + 1}>
                                <div className="mc-table-check">
                                    <input
                                        type="checkbox"
                                        name={'check' + index}
                                        checked={ item.isChecked }
                                        onChange={handleCheckbox}
                                    />
                                    <p>#{index + 1}</p>
                                </div>
                            </td>
                            <td>
                                <div className="mc-table-product md">
                                    {/* <img src={item.image} alt="product" /> */}
                                    <div className="mc-table-group">
                                        <h6>{item.coffee}</h6>
                                        {/* <p>{item.describe}</p> */}
                                    </div>
                                </div>
                            </td>
                            {/* <td>{item.category}</td> */}
                            <td>{item.location}</td>
                            <td>
                                <div className="mc-table-price">
                                    <del>{item.price.previous}</del>
                                    <p>{item.price.present}</p>
                                </div>
                            </td>
                            <td>{item.seats}</td>
                            <td>
                                <div className="mc-table-rating">
                                    <i className="material-icons">star</i>
                                    <h3>{item.rating.percent}</h3>
                                    <p>({item.rating.number})</p>
                                </div>
                            </td>
                            <td>{item.bookings}</td>
                            <td>{item.Revenue}</td>
                            <td>
                                <div className="mc-table-action">
                                    <AnchorComponent to="/product-view" title="View" className="material-icons view">
                                    visibility
                                    </AnchorComponent>
                                    <AnchorComponent to="/product-upload" title="Edit" className="material-icons edit">
                                        edit
                                    </AnchorComponent>
                                    <ButtonComponent type="button" title="Delete" className="material-icons delete" onClick={() => setAlertModal(true)}>
                                        delete
                                    </ButtonComponent>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={alertModal} onHide={() => setAlertModal(false)}>
                <div className="mc-alert-modal">
                    <i className="material-icons">new_releases</i>
                    <h3>Are you sure?</h3>
                    <p>Do you want to delete this product?</p>
                    <Modal.Footer>
                        <ButtonComponent type="button" className="btn btn-secondary" onClick={() => setAlertModal(false)}>
                            Close
                        </ButtonComponent>
                        <ButtonComponent type="button" className="btn btn-danger" onClick={() => setAlertModal(false)}>
                            Delete
                        </ButtonComponent>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
}
