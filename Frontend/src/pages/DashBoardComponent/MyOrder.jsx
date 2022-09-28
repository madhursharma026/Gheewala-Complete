import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function MyOrder() {

    const navigate = useNavigate();
    const [loading, setloading] = useState(false)
    const [allOrders, setAllOrders] = useState([])
    const gettingUserDetails = useSelector(state => state.UserDetail)

    {
        useEffect(() => {
            if (gettingUserDetails.length === 0) {
                navigate("/login")
            } else {
                fetch(`http://localhost:5000/order/user_profile/${gettingUserDetails[0].userId}`).then((result) => {
                    result.json().then((resp) => {
                        setAllOrders(resp)
                        console.log(resp)
                        setloading(true)
                    })
                })
            }
        }, [])
    }

    return (
        <div className="mt-3">
            {
                loading ?
                    <>
                        <div className="row" >
                            <div className="col-6">
                                <h4 style={{fontSize:'1.5rem', fontWeight:"600"}}>My Orders- Total {allOrders.length}</h4>
                            </div>
                            <div className="col-6" style={{ textAlign: 'right' }}>
                                <button type="button" class="btn" style={{background:"#424649", color:"white"}}>TRACK YOUR ORDER</button>
                            </div>
                        </div>
                        {(allOrders.length === 0) ?
                            <div className="text-center mt-5">
                                <h1>Nodata found</h1>
                                <Link to="/" className="btn btn-primary">Continue Shopping</Link>
                            </div>
                            :
                            <table class="table mt-3">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Placed At</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        allOrders.map((allOrders, i) =>
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td>{allOrders.product.Title}</td>
                                                <td>{allOrders.Qty}</td>
                                                <td>{allOrders.DeliveryStatus}</td>
                                                <td>{new Date(allOrders.placed_at).toLocaleDateString("es-CL")}</td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        }
                    </>
                    :
                    <div className="text-center">
                        <div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
            }
        </div>
    )
}

export default MyOrder;
