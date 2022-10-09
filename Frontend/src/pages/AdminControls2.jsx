import * as React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AdminControls2(props) {

    const navigate = useNavigate();
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
    
    return (
        // <div className="mt-5">
        //     <div className="container-xl pt-5 dashboard_data_before_md_srcn">
        //         <div className="row px-3">
        //             <div className="col-md-4 col-lg-3 dashboard_left_side" style={{ borderRight: "1px solid black" }}>
        //                 <Link to="/adminControls/category_details" className="p-2" style={{ textDecoration: "none", color: "black" }}>
        //                     <h5 className="py-2" style={{ fontSize: "1.25rem" }}>
        //                         <i className="fa fa-user"></i> Category Details
        //                     </h5>
        //                 </Link>
        //                 <Link to="/adminControls/product_details" className="p-2" style={{ textDecoration: "none", color: "black" }}>
        //                     <h5 className="py-2" style={{ fontSize: "1.25rem" }}>
        //                         <i className="fa fa-shopping-cart"></i> Product Details
        //                     </h5>
        //                 </Link>
        //                 <Link to="/adminControls/customer_details" className="p-2" style={{ textDecoration: "none", color: "black" }}>
        //                     <h5 className="py-2" style={{ fontSize: "1.25rem" }}>
        //                         <i class="fa fa-question-circle"></i> Customers Details
        //                     </h5>
        //                 </Link>
        //                 <Link to="/adminControls/order_details" className="p-2" style={{ textDecoration: "none", color: "black" }}>
        //                     <h5 className="py-2" style={{ fontSize: "1.25rem" }}>
        //                         <i class="fa fa-question-circle"></i> Order Details
        //                     </h5>
        //                 </Link>
        //                 <h6>
        //                     You can <span className="text-success">Contact Us</span> and we'll
        //                     reach out to as soon as we can
        //                 </h6>
        //             </div>
        //             <div className="col-md-8 col-lg-9 px-5">{props.x}</div>
        //         </div>
        //     </div>

        //     <div className="container-xl pt-5 dashboard_data_after_md_srcn">
        //         {props.x}
        //     </div>
        //     <br />
        //     <br />
        //     <br />
        //     <br />
        //     <br />
        // </div>
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
                {props.x}
                </div>
            </div>
        </div>
    );
}

export default AdminControls2;
