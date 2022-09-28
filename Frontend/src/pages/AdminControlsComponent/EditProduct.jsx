import * as React from "react";
import { useState } from "react";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function EditProduct() {

    // const [open, setOpen] = useState(false);
    // const categoryId = localStorage.getItem("categoryId")
    // const [CategoryTitle, setCategoryTitle] = useState([])
    // const [CategoryImage, setCategoryImage] = useState([])
    // const [AlertMessage, setAlertMessage] = useState("");
    // const [AlertMessageBg, setAlertMessageBg] = useState("");
    // const [SingleCategoryDetails, setSingleCategoryDetails] = useState([])

    const [open, setOpen] = useState(false);
    const productId = localStorage.getItem("productId")
    const [Inventory, setInventory] = useState("")
    const [Title, setTitle] = useState("")
    const [ProductImage, setProductImage] = useState("")
    const [LongDescription, setLongDescription] = useState("")
    const [ShortDescription, setShortDescription] = useState("")
    const [ProductCategoryId, setProductCategoryId] = useState("")
    const [AlertMessage, setAlertMessage] = useState("");
    const [AlertMessageBg, setAlertMessageBg] = useState("");
    const [allProduct, setAllProduct] = useState([])
    const [SingleProductDetails , setSingleProductDetails ] = useState([])

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
            fetch(`http://localhost:5000/Product/single_product/${productId}`).then((result) => {
                result.json().then((resp) => {
                    setSingleProductDetails(resp)
                    // setCategoryTitle(resp[0].Title)
                    // setCategoryImage(resp[0].CategoryImage)
                    setInventory(resp[0].Inventory)
                    setTitle(resp[0].Title)
                    setProductImage(resp[0].ProductImage)
                    setLongDescription(resp[0].LongDescription)
                    setShortDescription(resp[0].ShortDescription)
                    setProductCategoryId(resp[0].category.Title)
                })
            })
        }, [])
    }

    async function submitEditForm(e) {
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("Inventory", Inventory);
        formdata.append("Title", Title);
        formdata.append("ProductImage", ProductImage);
        formdata.append("LongDescription", LongDescription);
        formdata.append("ShortDescription", ShortDescription);

        // let data = { formdata }
        let result = await fetch(`http://localhost:5000/Product/${productId}`, {
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
            <h2 className="text-center" style={{ fontSize: "2rem" }}><u>Edit Product</u> </h2>

            <form onSubmit={(e) => submitEditForm(e)}>
                <label for="Title" className="form-label mt-3">Title</label>
                <input type="text" className="form-control" id="Title" defaultValue={Title} onChange={(e) => setTitle(e.target.value)} style={{ width: "100%", fontSize: "18px" }} />

                <label for="ProductImage" className="form-label mt-3">Product Image</label>
                <input type="file" className="form-control" id="ProductImage" onChange={(e) => setProductImage(e.target.files[0])} accept="image/png, image/gif, image/jpeg" style={{ width: "100%", fontSize: "18px" }} />

                <label for="ShortDescription" className="form-label mt-3">Short Description</label>
                <input type="text" className="form-control" id="ShortDescription" defaultValue={ShortDescription} onChange={(e) => setShortDescription(e.target.value)} style={{ width: "100%", fontSize: "18px" }} />

                <label for="Inventory" className="form-label mt-3">Inventory</label>
                <input type="text" className="form-control" id="Inventory" defaultValue={Inventory} onChange={(e) => setInventory(e.target.value)} style={{ width: "100%", fontSize: "18px" }} />

                <label for="LongDescription" className="form-label mt-3">Long Description</label>
                <textarea className="form-control" id="LongDescription" defaultValue={LongDescription} onChange={(e) => setLongDescription(e.target.value)} style={{ width: "100%", fontSize: "18px" }} />

                <label for="SelectCategory" className="form-label mt-3">Select Category</label>
                <select class="form-select" id="SelectCategory" disabled onChange={(e) => setProductCategoryId(e.target.value)} defaultValue={ProductCategoryId}>
                    <option value="">{ProductCategoryId}</option>
                    {/* {
                        (allCategory).map((allCategory, i) =>
                            <option value={`${allCategory.id}`}>{allCategory.Title}</option>
                        )} */}
                </select>

                <div className="text-center mt-5">
                    <button className="btn btn-success ms-auto" type="submit" style={{ color: "white", background: '#157347' }}>Save Changes</button>
                </div>
            </form>
        </>
    );
}

export default EditProduct;