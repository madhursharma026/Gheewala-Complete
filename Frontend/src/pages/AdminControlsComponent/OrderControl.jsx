import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function OrderControl() {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [AllOrders, setAllOrders] = useState([])
    const [AlertMessage, setAlertMessage] = useState("");
    const [AlertMessageBg, setAlertMessageBg] = useState("");
    const gettingUserDetails = useSelector(state => state.UserDetail)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    {
        useEffect(() => {
            fetch(`http://localhost:5000/Order`).then((result) => {
                result.json().then((resp) => {
                    setAllOrders(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    async function changeStatusDelivered(orderedProductId){
        setloading(false)
        let DeliveryStatus = "Delivered"
        let data = { DeliveryStatus }
        let result = await fetch(`http://localhost:5000/order/${orderedProductId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/Order`).then((result) => {
                result.json().then((resp) => {
                    setAllOrders(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    async function changeStatusPENDING(orderedProductId){
        setloading(false)
        let DeliveryStatus = "PENDING"
        let data = { DeliveryStatus }
        let result = await fetch(`http://localhost:5000/order/${orderedProductId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/Order`).then((result) => {
                result.json().then((resp) => {
                    setAllOrders(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    async function changeStatusCANCELLED(orderedProductId){
        setloading(false)
        let DeliveryStatus = "CANCELLED"
        let data = { DeliveryStatus }
        let result = await fetch(`http://localhost:5000/order/${orderedProductId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/Order`).then((result) => {
                result.json().then((resp) => {
                    setAllOrders(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    return (
        <>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white`} style={{ background: AlertMessageBg }}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            {loading ?
                <>
                    <div className="mt-3">
                        <h1 style={{ fontSize: "1.5rem" }} className='mb-3 text-center'><u><b>All Order</b></u></h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Product</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (AllOrders).map((AllOrders, i) =>
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{AllOrders.user.name}</td>
                                            <td>{AllOrders.product.Title}</td>
                                            <td>{AllOrders.Qty}</td>
                                            <td>{AllOrders.DeliveryStatus}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" style={{background:"#0DCAF0"}}>
                                                        Action
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={()=>changeStatusDelivered(AllOrders.id)}>Delivered</Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>changeStatusPENDING(AllOrders.id)}>PENDING</Dropdown.Item>
                                                        <Dropdown.Item onClick={()=>changeStatusCANCELLED(AllOrders.id)}>CANCELLED</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </>
            }
        </>
    );
}

export default OrderControl;
