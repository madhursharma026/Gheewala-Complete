import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function MyProfile() {

    const gettingUserDetails = useSelector(state => state.UserDetail)

    return (
        <div className="mt-3">
            <h2 style={{fontSize:"2rem"}} className='my-2'><i className="fa fa-user"></i> {gettingUserDetails[0].name}</h2>
            <hr />
            <h5 style={{fontSize:"1.5rem"}} className="my-2">Email: {gettingUserDetails[0].email}</h5>
            <br />
            <div className="row">
                <div className="col-6">
                    <h5 style={{fontSize:"1.5rem"}}>My Password</h5>
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    {/* <button type="button" class="btn btn-dark">Reset Password</button> */}
                    <Link to="/reset_password" className="btn btn-dark ms-auto">Reset Password</Link>
                </div>
            </div>
            <div className="text-center mt-5">
                <Link to="/edit_profile" className="btn btn-primary ms-auto">Edit Profile</Link>
            </div>
        </div>
    );
}

export default MyProfile;
