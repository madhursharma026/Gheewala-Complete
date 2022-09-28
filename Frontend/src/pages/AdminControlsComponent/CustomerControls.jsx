import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function CustomerControls() {

    const [open, setOpen] = useState(false);
    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [AllUsers, setAllUsers] = useState([])
    const [AlertMessage, setAlertMessage] = useState("");
    const [AlertMessageBg, setAlertMessageBg] = useState("");
    const gettingUserDetails = useSelector(state => state.UserDetail)

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    {
        useEffect(() => {
            fetch(`http://localhost:5000/auth`).then((result) => {
                result.json().then((resp) => {
                    setAllUsers(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    async function ChangeStatusAdmin(userId) {
        setloading(false)
        let role = "admin"
        let data = { role }
        let result = await fetch(`http://localhost:5000/auth/change_user_role/${userId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/auth`).then((result) => {
                result.json().then((resp) => {
                    setAllUsers(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    async function ChangeStatusUser(userId) {
        setloading(false)
        let role = "user"
        let data = { role }
        let result = await fetch(`http://localhost:5000/auth/change_user_role/${userId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/auth`).then((result) => {
                result.json().then((resp) => {
                    setAllUsers(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    async function ChangeStatusDelete(userId) {
        setloading(false)
        let role = "delete"
        let data = { role }
        let result = await fetch(`http://localhost:5000/auth/change_user_role/${userId}`, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Status Changed Successfully")
            fetch(`http://localhost:5000/auth`).then((result) => {
                result.json().then((resp) => {
                    setAllUsers(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            handleClick()
        }
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white`} style={{ background: AlertMessageBg }}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            {loading ?
                <>
                    <div className="mt-3">
                        <h1 style={{ fontSize: "1.5rem" }} className='mb-3 text-center'><u><b>All Order</b></u></h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Username</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (AllUsers).map((AllUsers, i) =>
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{AllUsers.name}</td>
                                            <td>{AllUsers.email}</td>
                                            <td>{AllUsers.role}</td>
                                            <td>
                                                <Dropdown>
                                                    <Dropdown.Toggle id="dropdown-basic" style={{ background: "#0DCAF0" }}>
                                                        Action
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item onClick={() => ChangeStatusAdmin(AllUsers.id)}>Admin</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => ChangeStatusUser(AllUsers.id)}>User</Dropdown.Item>
                                                        <Dropdown.Item onClick={() => ChangeStatusDelete(AllUsers.id)}>Delete</Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </>
            }
        </>
    );
}

export default CustomerControls;
