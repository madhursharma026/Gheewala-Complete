import * as React from "react";
import { useSelector } from "react-redux";
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

function Admin2() {

    const navigate = useNavigate();
    const [UserLoading, setUserLoading] = React.useState(false)
    const [AllUsers, setAllUsers] = useState([])
    const [AdminLoading, setAdminLoading] = React.useState(false)
    const [AllAdmin, setAllAdmin] = useState([])
    const [AllProduct, setAllProduct] = useState([])
    const [AllCategory, setAllCategory] = useState([])
    const [AllPendingOrder, setAllPendingOrder] = useState([])
    const [AllDeliveredOrder, setAllDeliveredOrder] = useState([])
    const gettingUserDetails = useSelector(state => state.UserDetail)

    // {
    //     React.useEffect(() => {
    //         if (gettingUserDetails.length === 0) {
    //             navigate("/login")
    //         }
    //     })
    // }

    {
        React.useEffect(() => {
            if (gettingUserDetails.length >= 1) {
            if (gettingUserDetails[0].role === "user") {
                navigate("/")
            }
        }
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/category`).then((result) => {
                result.json().then((resp) => {
                    setAllCategory(resp)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/product`).then((result) => {
                result.json().then((resp) => {
                    setAllProduct(resp)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/order/pending`).then((result) => {
                result.json().then((resp) => {
                    setAllPendingOrder(resp)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/order/delivered`).then((result) => {
                result.json().then((resp) => {
                    setAllDeliveredOrder(resp)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/auth/allUsers`).then((result) => {
                result.json().then((resp) => {
                    setAllUsers(resp)
                    setUserLoading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/auth/allAdmin`).then((result) => {
                result.json().then((resp) => {
                    setAllAdmin(resp)
                    setAdminLoading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    return (
        // <h1 className="text-center">Admin</h1>
        <div style={{ marginTop: '80px' }}>
            <div className="row">
                <div className="col-xl-3 col-xxl-2">
                    <div className="leftSidebarAdmin mt-2" style={{ minHeight: '100vh', height: "100%", background: '#1F2937' }}>
                        <ul class="list-group">
                            <Link to="/admin_page" class="list-group-item text-light p-2" style={{ background: '#1F2937' }}><li style={{ background: "#374151", borderRadius: "10px" }} className="p-2">Home</li></Link>
                            <Link to="/adminControls/category_details" class="list-group-item text-light p-2" style={{ background: '#1F2937' }}><li style={{ background: "#374151", borderRadius: "10px" }} className="p-2">Category Details</li></Link>
                            <Link to="/adminControls/product_details" class="list-group-item text-light p-2" style={{ background: '#1F2937' }}><li style={{ background: '#374151', borderRadius: "10px" }} className="p-2">Product Details</li></Link>
                            <Link to="/adminControls/customer_details" class="list-group-item text-light p-2" style={{ background: '#1F2937' }}><li style={{ background: '#374151', borderRadius: "10px" }} className="p-2">Customer Details</li></Link>
                            <Link to="/adminControls/order_details" class="list-group-item text-light p-2" style={{ background: '#1F2937' }}><li style={{ background: '#374151', borderRadius: "10px" }} className="p-2">Order Details</li></Link>
                        </ul>
                    </div>
                </div>
                <div className="col-xl-8 col-xxl-9 mt-3 mx-xl-0 mx-3">
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{ background: '#424649', color: "white" }}>
                            + Add Task
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/adminControls/add_category">Add Category</Dropdown.Item>
                            <Dropdown.Item href="#/adminControls/add_product">Add Product</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <img src="https://www.mindtools.com/media/Diagrams/Charts-and-Graphs-3.jpg" alt="#ImgNotFound" className="mt-3" style={{ maxHeight: "600px", height: "80%", width: "100%" }} />

                    <div className="row">
                        <div className="col-6 col-xxl-3 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 1px 2px #888888" }}>
                                <div class="card-body">
                                    {/* This is some text within a card body. */}
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="#ImgNotFound" className="w-100 h-100" />
                                        </div>
                                        <div className="col-9">
                                            <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}>Customers</h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Total- <b>{AllUsers.length}</b></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>&emsp;</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xxl-3 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 1px 2px #888888" }}>
                                <div class="card-body">
                                    {/* This is some text within a card body. */}
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="#ImgNotFound" className="w-100 h-100" />
                                        </div>
                                        <div className="col-9">
                                            <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}>Category</h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Total- <b>{AllCategory.length}</b></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>&emsp;</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xxl-3 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 1px 2px #888888" }}>
                                <div class="card-body">
                                    {/* This is some text within a card body. */}
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="#ImgNotFound" className="w-100 h-100" />
                                        </div>
                                        <div className="col-9">
                                            <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}>Product</h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Total- <b>{AllProduct.length}</b></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>&emsp;</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 col-xxl-3 mt-3">
                            <div class="card" style={{ boxShadow: "1px 1px 1px 2px #888888" }}>
                                <div class="card-body">
                                    {/* This is some text within a card body. */}
                                    <div className="row">
                                        <div className="col-3">
                                            <img src="https://cdn-icons-png.flaticon.com/512/32/32441.png" alt="#ImgNotFound" className="w-100 h-100" />
                                        </div>
                                        <div className="col-9">
                                            <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}>Orders</h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Pending- <b>{AllPendingOrder.length}</b></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Delivered- <b>{AllPendingOrder.length}</b></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-xxl-8">
                            <div class="card">
                                <div class="card-body">
                                    <h3 style={{ fontSize: '1.2rem' }}><u>Our Customers</u></h3>
                                    {
                                        UserLoading ?
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        AllUsers.slice(0, 5).map((AllUsers, i) =>
                                                            <tr>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>{AllUsers.name}</td>
                                                                <td>{AllUsers.email}</td>
                                                                <td>{AllUsers.role}</td>
                                                                <td>
                                                                    <Dropdown>
                                                                        <Dropdown.Toggle id="dropdown-basic" style={{ background: "#0DCAF0" }}>
                                                                            Action
                                                                        </Dropdown.Toggle>

                                                                        <Dropdown.Menu>
                                                                            <Dropdown.Item onClick={() => ChangeStatusAdmin(AllUsers.id)}>Admin</Dropdown.Item>
                                                                            <Dropdown.Item onClick={() => ChangeStatusUser(AllUsers.id)}>User</Dropdown.Item>
                                                                            <Dropdown.Item onClick={() => ChangeStatusDelete(AllUsers.id)}>Delete</Dropdown.Item>
                                                                        </Dropdown.Menu>
                                                                    </Dropdown>
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            :
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">UserLoading...</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}><u><b>Orders</b></u></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Pending- <b>{AllPendingOrder.length}</b></h4>
                                            <h4 style={{ color: "9CA3AF", fontSize: "1rem" }}>Delivered- <b>{AllPendingOrder.length}</b></h4>
                                    <img src="https://www150.statcan.gc.ca/edu/power-pouvoir/c-g/c-g05-2-2-eng.png" alt="#ImgNotFound" className="w-100" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-3">
                        <div className="col-xxl-8 order-xxl-1">
                            <div class="card">
                                <div class="card-body">
                                    <h3 style={{ fontSize: '1.2rem' }}><u>Our Team</u></h3>
                                    {
                                        UserLoading ?
                                            <table class="table">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Username</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Role</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        AllAdmin.slice(0, 6).map((AllAdmin, i) =>
                                                            <tr>
                                                                <th scope="row">{i + 1}</th>
                                                                <td>{AllAdmin.name}</td>
                                                                <td>{AllAdmin.email}</td>
                                                                <td>{AllAdmin.role}</td>
                                                                <td>
                                                                    {new Date(AllAdmin.createdAt).toLocaleDateString("es-CL")}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                </tbody>
                                            </table>
                                            :
                                            <div className="spinner-border" role="status">
                                                <span className="visually-hidden">UserLoading...</span>
                                            </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-4">
                            <div className="card">
                                <div className="card-body">
                                    <h4 style={{ color: "9CA3AF", fontSize: "1.5rem" }}><u><b>Products</b></u></h4>
                                    <h4 style={{ color: "9CA3AF", fontSize: "1rem" }} className='pt-2'>Stocks- <b>{AllProduct.length}</b></h4>
                                    <div><img src="https://www150.statcan.gc.ca/edu/power-pouvoir/c-g/c-g05-2-2-eng.png" alt="#ImgNotFound" className="w-100 h-100" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin2;
