import * as React from "react";
import { Alert } from '@mui/material';
import { Link } from "react-router-dom";
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckoutDone } from "../Redux/UpdatedEcommerceReducer";
import { useEffect } from "react";

const AddToCart = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const gettingUserDetails = useSelector(state => state.UserDetail)
    const BuffaloGheeQty = useSelector(state => state.BuffaloGhee)
    const CowGheeQty = useSelector(state => state.CowGhee)
    const TotalQty = BuffaloGheeQty + CowGheeQty
    const [open, setOpen] = React.useState(false);
    const [AlertMessage, setAlertMessage] = React.useState("")
    const [AlertMessageBg, setAlertMessageBg] = React.useState("")
    const [item, setItem] = React.useState([])
    const [item2, setItem2] = React.useState([])

    function CheckOutDone() {
        dispatch(CheckoutDone())
    }

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
                if (gettingUserDetails[0].role === "admin") {
                    navigate("/admin_page")
                }
            }
        }, [])
    }

    const handleClick = () => {
        setOpen(true);
        setTimeout(() => (CheckOutDone()), 2000);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement('script')
            script.src = src
            script.onload = () => {
                resolve(true)
            }

            script.onerror = () => {
                resolve(false)
            }

            document.body.appendChild(script)
        })
    }

    const displayRazorpay = async (amount) => {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert("You are offline... Failed to load Razorpay SDK")
            return
        }

        const options = {
            key: 'rzp_test_epbuUkrs3QVwte',
            currency: 'INR',
            amount: amount * 100,
            name: gettingUserDetails[0].name,
            description: "Thanks for Purchasing",
            image: 'http://localhost:3000/static/media/logo.feabe944101600d0679d.png',
            handler: function (response) {
                // alert(response.razorpay_payment_id)
                handleClick()
            },
            prefill: {
                name: gettingUserDetails[0].name,
                email: gettingUserDetails[0].email,
                contact: gettingUserDetails[0].phone_muner,
            }
        }

        const paymentOption = new window.Razorpay(options)
        paymentOption.open()
    }

    async function placeOrderSubmit() {
        if (gettingUserDetails.length === 0) {
            navigate("/login")
        } else {
            let userId = gettingUserDetails[0].userId
            if (BuffaloGheeQty >= 1) {
                let productId = (item.id)
                let Qty = BuffaloGheeQty
                let data = { Qty }
                let result = await fetch(`http://localhost:5000/order/place_order/userId=${userId}/productId=${productId}`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                let output = ""
                output = await result.json()
                if (output.Qty === BuffaloGheeQty) {
                    setAlertMessageBg("success")
                    setAlertMessage("Order placed!!!")
                    // handleClick()
                } else {
                    setAlertMessageBg("danger")
                    setAlertMessage(output.message)
                    // handleClick()
                }
            }
            if (CowGheeQty >= 1) {
                let productId = (item2.id)
                let Qty = CowGheeQty
                let data = { Qty }
                let result = await fetch(`http://localhost:5000/order/place_order/userId=${userId}/productId=${productId}`, {
                    method: "POST",
                    body: JSON.stringify(data),
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    }
                })
                let output = ""
                output = await result.json()
                if (output.Qty === CowGheeQty) {
                    setAlertMessageBg("success")
                    setAlertMessage("Order placed!!!")
                    // handleClick()
                } else {
                    setAlertMessageBg("danger")
                    setAlertMessage(output.message)
                    // handleClick()
                }
            }
            displayRazorpay((item.Price * BuffaloGheeQty) + (item2.Price * CowGheeQty))
            // handleClick()
        }
    }

    {
        useEffect(() => {
            fetch(`http://127.0.0.1:5000/product`).then((result) => {
                result.json().then((resp) => {
                    setItem(resp[0])
                    setItem2(resp[1])
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    return (
        <div className="container-xl pt-5 mt-5">
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            {
                (TotalQty >= 1) ?
                    <div className="row pb-5">
                        <div className="col-lg-6 user_details order-2 order-lg-1">
                            <div className="row">
                                <div className="col-2">
                                    <div className="d-flex justify-content-center align-items-center" style={{ color: "white", background: "#198754", borderRadius: "100%", width: "50px", height: "50px" }}>
                                        <h4 className="m-0 p-0 fw-bold">1</h4>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <div className="mb-4">
                                        <h2 className="fw-bold" style={{ fontSize: "2rem" }}>Checkout as a Guest</h2>
                                        <p className="">Already have an account? <Link to="/">Login <i class="fa fa-angle-right"></i></Link></p>
                                    </div>
                                    <div className="">
                                        <div className="mb-2">
                                            <input type="email" class="form-control p-2 w-100" placeholder="Email Address" />
                                        </div>
                                        <input type="checkbox" className="me-1" id="keepMeUpdate" />
                                        <label htmlFor="keepMeUpdate">Keep me up to date on news or offers</label>
                                    </div>
                                    <div className="mt-4 mb-3">
                                        <button type="button" class="btn btn-success w-100">Primary</button>
                                        <h6 className="pt-3"><b>By placing an order, you agree to our <Link to="/">Terms & Conditions</Link></b></h6>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <div className="col-2">
                                    <div className="d-flex justify-content-center align-items-center" style={{ color: "white", background: "#198754", borderRadius: "100%", width: "50px", height: "50px" }}>
                                        <h4 className="m-0 p-0 fw-bold">2</h4>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <h2 className="" style={{ fontSize: "2rem" }}>Shipping Address</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <div className="col-2">
                                    <div className="d-flex justify-content-center align-items-center" style={{ color: "white", background: "#198754", borderRadius: "100%", width: "50px", height: "50px" }}>
                                        <h4 className="m-0 p-0 fw-bold">3</h4>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <h2 className="" style={{ fontSize: "2rem" }}>Delivery Method</h2>
                                </div>
                            </div>
                            <hr />
                            <div className="row my-4">
                                <div className="col-2">
                                    <div className="d-flex justify-content-center align-items-center" style={{ color: "white", background: "#198754", borderRadius: "100%", width: "50px", height: "50px" }}>
                                        <h4 className="m-0 p-0 fw-bold">4</h4>
                                    </div>
                                </div>
                                <div className="col-10">
                                    <h2 className="" style={{ fontSize: "2rem" }}>Payment</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 item_details px-4 order-1 order-lg-2">
                            <div className="container container-lg-fluid">
                                <h3 className="" style={{ fontSize: "28px" }}><b>Cart({TotalQty})</b></h3>
                                {
                                    BuffaloGheeQty >= 1 ?
                                        <div className="row product_details pt-3">
                                            <div className="col-3 col-xl-2" style={{ textAlign: "right" }}>
                                                <img src={`http://localhost:5000/public/${item.ProductImage}`} alt="#ImgNotFound" width="80px" height="80px" />
                                            </div>
                                            <div className="col-9 col-xl-10" style={{ textAlign: "left" }}>
                                                <h6>{item.Title}</h6>
                                                <h6>QTY: {BuffaloGheeQty}</h6>
                                                <h6>${item.Price}</h6>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }
                                {
                                    CowGheeQty >= 1 ?
                                        <div className="row product_details pt-3">
                                            <div className="col-3 col-xl-2" style={{ textAlign: "right" }}>
                                                <img src={`http://localhost:5000/public/${item2.ProductImage}`} alt="#ImgNotFound" width="80px" height="80px" />
                                            </div>
                                            <div className="col-9 col-xl-10" style={{ textAlign: "left" }}>
                                                <h6>{item2.Title}</h6>
                                                <h6>QTY: {CowGheeQty}</h6>
                                                <h6>${item2.Price}</h6>
                                            </div>
                                        </div>
                                        :
                                        <></>
                                }
                                <div className="row py-5 ">
                                    <div className="col-6">
                                        <h6>Subtotal</h6>
                                    </div>
                                    <div className="col-6" style={{ float: "right" }}>
                                        {/* <h6>${650 * TotalQty}</h6> */}
                                        <>
                                            {
                                                (BuffaloGheeQty >= 1 || CowGheeQty >= 1) ?
                                                    <>{(item.Price * BuffaloGheeQty) + (item2.Price * CowGheeQty)}</>
                                                    :
                                                    <>0</>
                                            }
                                        </>
                                    </div>
                                    <div className="col-6">
                                        <h6>Shipping</h6>
                                    </div>
                                    <div className="col-6" style={{ float: "right" }}>
                                        <h6>FREE</h6>
                                    </div>
                                    <div className="col-6">
                                        <h6>Sales tax</h6>
                                    </div>
                                    <div className="col-6" style={{ float: "right" }}>
                                        <h6>-</h6>
                                    </div>
                                    <div className="col-6 pt-4">
                                        <h6>Checkout</h6>
                                    </div>
                                    <div className="col-6 pt-2" style={{ float: "right" }}>
                                        <h6><button type="button" class="btn" onClick={() => placeOrderSubmit()} style={{ background: "#157347", color: "white" }}>Checkout</button></h6>
                                    </div>
                                    <div className="col-6 pt-3">
                                        <h4>Total</h4>
                                    </div>
                                    <div className="col-6 pt-3" style={{ float: "right" }}>
                                        <h4>${650 * TotalQty}</h4>
                                    </div>
                                    <p style={{ fontSize: "14px" }}>
                                        *Remind the reader what's in it for them if they buy your product
                                    </p>
                                    <div>
                                        <h4 className="pt-5 mb-3">
                                            Exphasize Why Your Product Is Remarkable
                                        </h4>
                                        <div className="d-flex justify-content-start align-items-center w-100 gap-5">
                                            <div className="text-center">
                                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                                <h6>Benefit <br /> ONE</h6>
                                            </div>
                                            <div className="text-center">
                                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                                <h6>Benefit <br /> TWO</h6>
                                            </div>
                                            <div className="text-center">
                                                <img src="https://cdn.xxl.thumbs.canstockphoto.com/hand-pressing-a-button-with-the-text-benefits-icon-vector-for-graphic-design-logo-website-social-illustration_csp97010524.jpg" alt="#ImgNotFound" width="50px" height="50px" />
                                                <h6>Benefit <br /> THREE</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    :
                    <div className="my-5">
                        <h1 className="text-center" style={{ fontSize: "32px" }}><b>No Product Found!</b></h1>
                        <div className="text-center">
                            <Link className="btn btn-outline-primary mt-4" to='/'>
                                Go To Home
                            </Link>
                        </div>
                    </div>
            }
        </div>
    );
}

export default AddToCart;
