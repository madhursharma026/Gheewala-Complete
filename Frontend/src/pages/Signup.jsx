import * as React from "react";
import { Alert } from '@mui/material';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import Snackbar from '@mui/material/Snackbar';
import { useNavigate } from "react-router-dom";
import headerLogo from '../content/images/logo.png'

function Signup() {

  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const [gettingName, setGettingName] = React.useState("")
  const [AlertMessage, setAlertMessage] = React.useState("")
  const [gettingEmail, setGettingEmail] = React.useState("");
  const [gettingAddress, setGettingAddress] = React.useState("");
  const [AlertMessageBg, setAlertMessageBg] = React.useState("")
  const [gettingPassword, setGettingPassword] = React.useState("");
  const gettingUserDetails = useSelector(state => state.UserDetail)
  const [gettingConfirmPassword, setGettingConfirmPassword] = React.useState("");

  {
    React.useEffect(() => {
      if (gettingUserDetails.length !== 0) {
        if (gettingUserDetails[0].role === "admin") {
          navigate("/admin_page")
        } else {
          navigate("/")
        }
      }
    })
  }


  const handleClick = () => {
    setOpen(true);
  };


  const handleClickSuccess = () => {
    setOpen(true);
    setTimeout(() => (navigate('/login')), 2000);
  };

  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  async function submitSignupForm(e) {
    e.preventDefault()
    if (gettingPassword === gettingConfirmPassword) {
      let email = gettingEmail
      let password = gettingPassword
      let address = gettingAddress
      let name = gettingName
      let data = { email, password, address, name }
      let result = await fetch(`http://127.0.0.1:5000/auth/signup`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        }
      })
      let output = ""
      output = await result.json()
      if (output.email === gettingEmail) {
        setAlertMessageBg("success")
        setAlertMessage("User signup successfully!!!")
        setGettingEmail("")
        setGettingPassword("")
        setGettingConfirmPassword("")
        setGettingName("")
        setGettingAddress("")
        handleClickSuccess()
      } else {
        setAlertMessageBg("danger")
        setAlertMessage(output.message)
        handleClick()
      }
    } else {
      setAlertMessageBg("danger")
      setAlertMessage("Password Doesn't match with each other")
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
      <div className="login-screen">
        <div>
          <div>
            <h2 className="fw-semibold text-center mb-5" style={{ fontSize: "30px" }}><u>Signup</u></h2>
            <form onSubmit={(e) => submitSignupForm(e)}>
              <label for="fullname" className="form-label">Full Name</label>
              <input type="text" className="form-control mb-3" id="fullname" autoFocus value={gettingName} onChange={(e) => setGettingName(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />
              <label for="email_address" className="form-label">Email address</label>
              <input type="email" className="form-control mb-3" id="email_address" value={gettingEmail} onChange={(e) => setGettingEmail(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />
              <label for="new_password" className="form-label">Password</label>
              <input type="password" className="form-control mb-3" id="new_password" value={gettingPassword} onChange={(e) => setGettingPassword(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />
              <label for="confirm_new_password" className="form-label">Confirm Password</label>
              <input type="password" className="form-control mb-3" id="confirm_new_password" value={gettingConfirmPassword} onChange={(e) => setGettingConfirmPassword(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />
              <label for="address" className="form-label">Address</label>
              <textarea className="form-control mb-3" id="address" value={gettingAddress} onChange={(e) => setGettingAddress(e.target.value)} required autoComplete='off' style={{ width: "100%", fontSize: "18px" }} />
              {/* <button type="submit" class="btn btn-primary w-100 mt-3">Continue</button> */}
              <button type="submit" class="btn w-100 mt-3" style={{ background: "#0B5ED7", color: "white" }}>Continue</button>
            </form>
            <div className="text-center mt-3">
              <Link to="/login" className="ms-auto">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
