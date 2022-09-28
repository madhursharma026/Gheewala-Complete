import * as React from "react";
import { useState } from "react";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function EditCategory() {

    const [open, setOpen] = useState(false);
    const categoryId = localStorage.getItem("categoryId")
    const [CategoryTitle, setCategoryTitle] = useState([])
    const [CategoryImage, setCategoryImage] = useState([])
    const [AlertMessage, setAlertMessage] = useState("");
    const [AlertMessageBg, setAlertMessageBg] = useState("");
    const [SingleCategoryDetails, setSingleCategoryDetails] = useState([])

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
        React.useEffect(() => {
            fetch(`http://localhost:5000/Category/single_category/${categoryId}`).then((result) => {
                result.json().then((resp) => {
                    setSingleCategoryDetails(resp)
                    setCategoryTitle(resp[0].Title)
                    setCategoryImage(resp[0].CategoryImage)
                })
            })
        }, [])
    }

    async function submitEditForm(e) {
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("Title", CategoryTitle);
        formdata.append("CategoryImage", CategoryImage);
        // let data = { formdata }
        let result = await fetch(`http://localhost:5000/Category/${categoryId}`, {
            method: "PATCH",
            body: formdata
        })
        let output = ""
        output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Changes Successfully")
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
            <h2 className="text-center" style={{ fontSize: "2rem" }}><u>Edit Category</u> </h2>

            <form onSubmit={(e) => submitEditForm(e)}>
                <label for="CategoryTitle" className="form-label mt-3">Category Title</label>
                <input type="text" className="form-control mb-3" id="CategoryTitle" defaultValue={CategoryTitle} onChange={(e) => setCategoryTitle(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="CategoryImage" className="form-label">Category Image</label>
                <input type="file" className="form-control mb-3" id="CategoryImage" onChange={(e) => setCategoryImage(e.target.files[0])} accept="image/png, image/gif, image/jpeg" style={{ width: "100%", fontSize: "18px" }} />

                <div className="text-center mt-5">
                    <button className="btn btn-success ms-auto" type="submit" style={{ color: "white", background: '#157347' }}>Save Changes</button>
                </div>
            </form>
        </>
    );
}

export default EditCategory;