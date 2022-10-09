import * as React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

function Admin() {

  const navigate = useNavigate();
  const gettingUserDetails = useSelector(state => state.UserDetail)

  // {
  //   React.useEffect(() => {
  //     if (gettingUserDetails.length === 0) {
  //       navigate("/login")
  //     }
  //   })
  // }

  {
    React.useEffect(() => {
      if (gettingUserDetails[0].role === "user") {
        navigate("/")
      }
    }, [])
  }
  

  return (
    // <h1 className="text-center" style={{ marginTop: '100px' }}>Admin</h1>
    <div className="admin-screen">
      <div>
        <h1 className="text-center" style={{ fontSize: "2rem" }}><b><u>Admin Controls</u></b></h1><br />
        <Link to="/adminControls/category_details" className="btn btn-primary w-100 mb-2">Category Details</Link><br />
        <Link to="/adminControls/product_details" className="btn btn-primary w-100 mb-2">Product Details</Link><br />
        <Link to="/adminControls/customer_details" className="btn btn-primary w-100 mb-2">Customers Details</Link><br />
        <Link to="/adminControls/order_details" className="btn btn-primary w-100 mb-2">Order Details</Link><br />
      </div>
    </div>
  );
}

export default Admin;
