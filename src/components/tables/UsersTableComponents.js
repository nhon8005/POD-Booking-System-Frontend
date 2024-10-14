import React, { useState, useEffect } from "react";
import { Modal, Form } from "react-bootstrap";
import ButtonComponent from '../../elements/ButtonComponent';
import AnchorComponent from '../../elements/AnchorComponent';



export default function UsersTableComponent({ thead, tbody }) {

    const [data, setData] = useState([]);
    const [userData, setUserData] = useState("");
    const [editModal, setEditModal] = useState(false);
    const [blockModal, setBlockModal] = useState(false);

    useEffect(() => { setData(tbody); }, [tbody]);

    const handleCheckbox = (event) => {
        const { name, checked } = event.target;

        if (name === "allCheck") {
            const checkData = data?.map((item) => {
                return { ...item, isChecked: checked };
            });
            setData(checkData);
        } else {
            const checkData = data?.map((item) => 
                item.name === name ? { ...item, isChecked: checked } : item
            );
            setData(checkData);
        }
    }

    return (
        <div className="mc-table-responsive">
            <table className="mc-table">
                <thead className="mc-table-head primary">
                    <tr>
                        <th>
                            <div className="mc-table-check">
                                <input 
                                    type="checkbox" 
                                    name="allCheck"
                                    checked={ data?.filter((item) => item.isChecked !== true).length < 1 } 
                                    onChange={ handleCheckbox } 
                                />
                                <p>uid</p>
                            </div>
                        </th>
                        {thead.map((item, index) => (
                            <th key={ index }>{ item }</th>
                        ))}
                    </tr>
                </thead>
                <tbody className="mc-table-body even">
                    {data?.map((item, index) => (
                        <tr key={ index }> 
                            <td title="id">
                                <div className="mc-table-check">
                                    <input 
                                        type="checkbox" 
                                        name={item.name} 
                                        checked={ item?.isChecked || false }
                                        onChange={ handleCheckbox } 
                                    />
                                    <p>#{ index + 1 }</p>
                                </div>
                            </td>
                            <td title={ item.name }>
                                <div className="mc-table-profile">
                                    <img src={ item.src } alt={ item.alt } />
                                    <p>{ item.name }</p>
                                </div>
                            </td>
                            <td title={ item.role }>
                                <div className="mc-table-icon role">
                                    { item.role.text === "vendor" && <i className="material-icons yellow">{ item.role.icon }</i> }
                                    { item.role.text === "member" && <i className="material-icons green">{ item.role.icon }</i> }
                                    { item.role.text === "admin" && <i className="material-icons purple">{ item.role.icon }</i> }
                                    { item.role.text === "founder" && <i className="material-icons blue">{ item.role.icon }</i> }
                                    <span>{ item.role.text }</span>
                                </div>
                            </td>
                            <td title={ item.email }>{ item.email }</td>
                            <td title={ item.password }>{ item.password }</td>
                            <td title={ item.phone }>{ item.phone }</td>
                            <td title={ item.status }>
                                { item.status === "approved" && <p className="mc-table-badge green">{ item.status }</p> }
                                { item.status === "pending" && <p className="mc-table-badge purple">{ item.status }</p> }
                                { item.status === "blocked" && <p className="mc-table-badge red">{ item.status }</p> }
                            </td>
                            <td title={ item.created }>{ item.created }</td>
                            <td>
                                <div className="mc-table-action">
                                    <AnchorComponent to="/user-profile" title="View" className="material-icons view" icon="visibility" ></AnchorComponent>
                                    <ButtonComponent title="Edit" className="material-icons edit" icon="edit" onClick={() => { setEditModal(true); setUserData(item); }}></ButtonComponent>
                                    <ButtonComponent title="Block" className="material-icons block" icon="block" onClick={() => setBlockModal(true)}></ButtonComponent>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <Modal show={ editModal } onHide={() => { setEditModal(false); setUserData(""); }}>
                <div className="mc-user-modal">
                    <img src={ userData.src } alt={ userData?.alt } />
                    <h4>{ userData?.name }</h4>
                    <p>{ userData?.email }</p>
                    <Form.Group className="form-group inline mb-4">
                        <Form.Label>Role</Form.Label>
                        <Form.Select>
                            <option value="founder">Founder</option>
                            <option value="admin">Admin</option>
                            <option value="member">Member</option>
                            <option value="client">Client</option>
                            <option value="vendor">Vendor</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="form-group inline">
                        <Form.Label>Status</Form.Label>
                        <Form.Select>
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                            <option value="blocked">Blocked</option>
                        </Form.Select>
                    </Form.Group>
                    <Modal.Footer>
                        <ButtonComponent type="button" className="btn btn-secondary" onClick={() => setEditModal(false)}>Close</ButtonComponent>
                        <ButtonComponent type="button" className="btn btn-success" onClick={() => setEditModal(false)}>Save Changes</ButtonComponent>
                    </Modal.Footer>
                </div>
            </Modal>
            
            <Modal show={ blockModal } onHide={() => setBlockModal(false)}>
                <div className="mc-alert-modal">
                    <i className="material-icons">new_releases</i>
                    <h3>Are you sure?</h3>
                    <p>Want to block this user's account?</p>
                    <Modal.Footer>
                        <ButtonComponent type="button" className="btn btn-secondary" onClick={() => setBlockModal(false)}>Close</ButtonComponent>
                        <ButtonComponent type="button" className="btn btn-danger" onClick={() => setBlockModal(false)}>Block</ButtonComponent>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    )
}
