import { Link } from "react-router-dom";

function MyAddress() {
    return (
        <>
        <div className="row">
            <div className="col-6">
                <h4>My Address</h4>
            </div>
            <div className="col-6" style={{ textAlign: 'right' }}>
                <Link class="btn btn-success" to="/add_new_address" role="button">ADD NEW ADDRESS</Link>
            </div>
        </div>
        <h1 className="text-center pt-3">
            No Address Found
        </h1>
        </>
    );
}

export default MyAddress;
