import * as React from "react";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { Logout, SaveLoginDetails } from "../../Redux/UpdatedEcommerceReducer";

function EditProfile() {

    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const gettingUserDetails = useSelector(state => state.UserDetail)
    const [userName, setUserName] = React.useState(gettingUserDetails[0].name)
    const [userAddress, setUserAddress] = React.useState(gettingUserDetails[0].address)
    const [AlertMessage, setAlertMessage] = React.useState("")
    const [AlertMessageBg, setAlertMessageBg] = React.useState("")

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function submitEditProfileForm(e) {
        e.preventDefault()
        let name = userName
        let address = userAddress
        let data = { name, address }
        let result = await fetch(`http://localhost:5000/auth/updated_profile/${gettingUserDetails[0].userId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg("success")
            setAlertMessage("Profile Updated successfully!!!")
            dispatch(Logout())
            dispatch(SaveLoginDetails(gettingUserDetails[0].userId, gettingUserDetails[0].email, userAddress, userName))
            handleClick()
        } else {
            setAlertMessageBg("danger")
            setAlertMessage(output.message)
            handleClick()
        }
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white bg-${AlertMessageBg}`}>
                    {AlertMessage}
                </Alert>
            </Snackbar>

            <h2 className="text-center" style={{fontSize:"2rem"}}><u>Edit Profile</u></h2>

            <form onSubmit={(e) => submitEditProfileForm(e)}>
                <label for="userEmail" className="form-label mt-3">Your Email</label>
                <input type="email" className="form-control mb-3" id="userEmail" value={gettingUserDetails[0].email} disabled style={{ width: "100%", fontSize: "18px" }} />

                <label for="userName" className="form-label">Your Name</label>
                <input type="text" className="form-control mb-3" id="userName" defaultValue={gettingUserDetails[0].name} onChange={(e) => setUserName(e.target.value)} style={{ width: "100%", fontSize: "18px" }} />

                <label for="userAddress" className="form-label">Your Address</label>
                <textarea className="form-control mb-3" id="userAddress" defaultValue={gettingUserDetails[0].address} onChange={(e) => setUserAddress(e.target.value)} autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />

                <div className="text-center mt-5">
                    <button className="btn btn-success ms-auto" type="submit">Save Profile</button>
                </div>
            </form>
        </>
    );
}

export default EditProfile;
