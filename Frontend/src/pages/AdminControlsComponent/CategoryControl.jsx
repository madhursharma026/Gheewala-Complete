import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function CategoryControl() {

    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(false);
    const [allCategory, setAllCategory] = useState([])
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
            fetch(`http://localhost:5000/Category`).then((result) => {
                result.json().then((resp) => {
                    setAllCategory(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    function moveToEditPage(categoryId) {
        localStorage.setItem("categoryId", categoryId)
        navigate(`/adminControls/category_details/edit/${categoryId}`)
    }

    async function deleteCategory(categoryId) {
        let result = await fetch(`http://localhost:5000/Category/${categoryId}`, {
            method: "Delete"
        })
        // let output = ""
        // output = await result.json()
        let output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Category Deleted Successfully")
            handleClick()
            fetch(`http://localhost:5000/Category`).then((result) => {
                result.json().then((resp) => {
                    setAllCategory(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
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
                        <h1 style={{ fontSize: "1.5rem" }} className='mb-3 text-center'><u><b>All Category</b></u> <Link to="/adminControls/add_category" className="btn btn-primary" style={{ marginLeft: "20px" }}>Add Category</Link></h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Edit Action</th>
                                    <th scope="col">Delete Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (allCategory).map((allCategory, i) =>
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td><img src={`http://localhost:5000/public/${allCategory.CategoryImage}`} alt="#ImgNotFound" style={{ width: "30px", height: "30px", borderRadius: "100%" }} /></td>
                                            <td>{allCategory.Title}</td>
                                            <td>
                                                <button type="button" class="btn" style={{ background: "#0B5ED7", color: "white" }} onClick={() => moveToEditPage(`${allCategory.id}`)}>Edit</button>
                                                {/* <Link to={`/adminControls/category_details/edit/${allCategory.id}`} class="btn" style={{ background: "#0B5ED7", color: "white" }}>Edit</Link> */}
                                            </td>
                                            <td>
                                                <button type="button" class="btn" style={{ background: '#FFCA2C' }} onClick={() => deleteCategory(`${allCategory.id}`)}>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </>
                :
                <div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            }
        </>
    );
}

export default CategoryControl;
