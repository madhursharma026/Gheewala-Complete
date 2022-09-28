import { Link } from "react-router-dom";

function NewAddress() {
    return (
        <>
            <div className="row">
                <div className="col-6">
                    <h4><i className="fa fa-map-marker"></i> My Address</h4>
                </div>
                <div className="col-6" style={{ textAlign: 'right' }}>
                    <button type="button" class="btn btn-dark mx-2">Cancel</button>
                    <button type="button" class="btn btn-success mx-2">Save</button>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">First Name</label>
                        <input type="text" class="form-control" placeholder="First Name" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Last Name</label>
                        <input type="text" class="form-control" placeholder="Last Name" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Company</label>
                        <input type="text" class="form-control" placeholder="Company" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Address 1</label>
                        <input type="text" class="form-control" placeholder="Address 1" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Address 2</label>
                        <input type="text" class="form-control" placeholder="Address 2" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">City</label>
                        <input type="text" class="form-control" placeholder="City" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Country</label>
                        <input type="text" class="form-control" value="India" placeholder="Country" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Zip Code</label>
                        <input type="text" class="form-control" placeholder="123456" />
                    </div>
                </div>
                <div className="col-4">
                    <div class="mb-3">
                        <label class="form-label">Phone</label>
                        <input type="text" class="form-control" placeholder="9876543210" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default NewAddress;
