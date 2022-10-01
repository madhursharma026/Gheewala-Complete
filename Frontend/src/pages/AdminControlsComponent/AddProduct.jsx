import * as React from "react";
import { useState } from "react";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import { useEffect } from "react";

function AddProduct() {

    const [open, setOpen] = useState(false);
    const [Inventory, setInventory] = useState("")
    const [Title, setTitle] = useState("")
    const [Price, setPrice] = useState("")
    const [ProductImage, setProductImage] = useState("")
    const [LongDescription, setLongDescription] = useState("")
    const [ShortDescription, setShortDescription] = useState("")
    const [ProductCategoryId, setProductCategoryId] = useState("")
    const [AlertMessage, setAlertMessage] = useState("");
    const [AlertMessageBg, setAlertMessageBg] = useState("");
    const [allCategory, setAllCategory] = useState([])

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    async function submitAddProduct(e) {
        e.preventDefault()
        let formdata = new FormData();
        formdata.append("Inventory", Inventory);
        formdata.append("Title", Title);
        formdata.append("Price", Price);
        formdata.append("ProductImage", ProductImage);
        formdata.append("LongDescription", LongDescription);
        formdata.append("ShortDescription", ShortDescription);

        // let data = { formdata }
        let result = await fetch(`http://localhost:5000/Product/add_product/categoryId=${ProductCategoryId}`, {
            method: "POST",
            body: formdata
        })
        let output = ""
        output = await result.json()
        if (output.Title === Title) {
            setAlertMessageBg('#218838')
            setAlertMessage("Product Added Successfully")
            setInventory("")
            setTitle("")
            setPrice("")
            setProductImage("")
            setLongDescription("")
            setShortDescription("")
            handleClick()
        } else {
            setAlertMessageBg('#C82333')
            setAlertMessage("Something Went Wrong")
            setInventory("")
            setTitle("")
            setPrice("")
            setProductImage("")
            setLongDescription("")
            setShortDescription("")
            handleClick()
        }
    }

    {
        useEffect(() => {
            fetch(`http://localhost:5000/Category`).then((result) => {
                result.json().then((resp) => {
                    setAllCategory(resp)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    return (
        <>
            <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
                <Alert onClose={handleClose} className={`text-white`} style={{ background: AlertMessageBg }}>
                    {AlertMessage}
                </Alert>
            </Snackbar>
            <h2 className="text-center" style={{ fontSize: "2rem" }}><u>Add Product</u> </h2>

            <form onSubmit={(e) => submitAddProduct(e)}>
                <label for="Title" className="form-label mt-3">Title</label>
                <input type="text" className="form-control" id="Title" value={Title} onChange={(e) => setTitle(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="Price" className="form-label mt-3">Price</label>
                <input type="number" className="form-control" id="Price" value={Price} onChange={(e) => setPrice(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="ProductImage" className="form-label mt-3">Product Image</label>
                <input type="file" className="form-control" id="ProductImage" onChange={(e) => setProductImage(e.target.files[0])} accept="image/png, image/gif, image/jpeg" required style={{ width: "100%", fontSize: "18px" }} />

                <label for="ShortDescription" className="form-label mt-3">Short Description</label>
                <input type="text" className="form-control" id="ShortDescription" value={ShortDescription} onChange={(e) => setShortDescription(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="Inventory" className="form-label mt-3">Inventory</label>
                <input type="text" className="form-control" id="Inventory" value={Inventory} onChange={(e) => setInventory(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="LongDescription" className="form-label mt-3">Long Description</label>
                <textarea className="form-control" id="LongDescription" value={LongDescription} onChange={(e) => setLongDescription(e.target.value)} required style={{ width: "100%", fontSize: "18px" }} />

                <label for="SelectCategory" className="form-label mt-3">Select Category</label>
                <select class="form-select" id="SelectCategory" onChange={(e)=>setProductCategoryId(e.target.value)} required>
                    <option value="">Select Category</option>
                    {
                        (allCategory).map((allCategory, i) =>
                            <option value={`${allCategory.id}`}>{allCategory.Title}</option>
                        )}
                </select>

                <div className="text-center mt-5">
                    <button className="btn btn-success ms-auto" type="submit" style={{ color: "white", background: '#157347' }}>Submit</button>
                </div>
            </form>
        </>
    );
}

export default AddProduct;