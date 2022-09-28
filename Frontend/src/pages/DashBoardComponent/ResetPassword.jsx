import * as React from "react";
import { Alert } from '@mui/material';
import { useSelector } from "react-redux";
import Snackbar from '@mui/material/Snackbar';

function ResetPassword() {

    const [open, setOpen] = React.useState(false);
    const [newPassword, setNewPassword] = React.useState("")
    const [AlertMessage, setAlertMessage] = React.useState("")
    const [AlertMessageBg, setAlertMessageBg] = React.useState("")
    const gettingUserDetails = useSelector(state => state.UserDetail)
    const [confirmNewPassword, setConfirmNewPassword] = React.useState("")

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
        if (newPassword === confirmNewPassword) {
            let password = newPassword
            let data = { password }
            let result = await fetch(`http://localhost:5000/auth/updated_password/${gettingUserDetails[0].userId}`, {
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
                setAlertMessage("Password Updated successfully!!!")
                setNewPassword("")
                setConfirmNewPassword("")
                handleClick()
            } else {
                setAlertMessageBg("danger")
                setAlertMessage(output.message)
                setNewPassword("")
                setConfirmNewPassword("")
                handleClick()
            }
        } else {
            setAlertMessageBg("danger")
            setAlertMessage("Password Does't match with each other")
            setNewPassword("")
            setConfirmNewPassword("")
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

            <h2 className="text-center" style={{fontSize:"2rem"}}><u>Reset Password</u></h2>

            {/* <label for="oldPassword" className="form-label mt-3">Old Password</label>
            <input type="password" className="form-control mb-3" id="oldPassword" value={resetPassword} onChange={(e) => setResetPassword(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} /> */}

            <form onSubmit={(e) => submitEditProfileForm(e)}>
                <label for="newPassword" className="form-label">New Password</label>
                <input type="password" className="form-control mb-3" id="newPassword" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />

                <label for="confirmNewPassword" className="form-label">Confirm New Password</label>
                <input type="password" className="form-control mb-3" id="confirmNewPassword" value={confirmNewPassword} onChange={(e) => setConfirmNewPassword(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />

                <div className="text-center mt-5">
                    <button className="btn btn-success ms-auto" type="submit">Save Profile</button>
                </div>
            </form>
        </>
    );
}

export default ResetPassword;
