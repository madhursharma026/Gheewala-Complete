import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Alert } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';

function ProductControl() {

    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [open, setOpen] = useState(false);
    const [allProduct, setAllProduct] = useState([])
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
            fetch(`http://localhost:5000/Product`).then((result) => {
                result.json().then((resp) => {
                    setAllProduct(resp)
                    setloading(true)
                    // dispatch(HomepageDataSave(resp))
                })
            })
        }, [])
    }

    function moveToEditPage(productId) {
        localStorage.setItem("productId", productId)
        navigate(`/adminControls/product_details/edit/${productId}`)
    }

    async function deleteProduct(productId) {
        let result = await fetch(`http://localhost:5000/Product/${productId}`, {
            method: "Delete"
        })
        // let output = ""
        // output = await result.json()
        let output = await result.json()
        if (output.affected === 1) {
            setAlertMessageBg('#218838')
            setAlertMessage("Product Deleted Successfully")
            handleClick()
            fetch(`http://localhost:5000/Product`).then((result) => {
                result.json().then((resp) => {
                    setAllProduct(resp)
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
                        <h1 style={{ fontSize: "1.5rem" }} className='mb-3 text-center'><u><b>All Product</b></u> <Link to="/adminControls/add_product" className="btn btn-primary" style={{ marginLeft: "20px" }}>Add Product</Link></h1>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">CategoryId</th>
                                    <th scope="col">Edit Action</th>
                                    <th scope="col">Delete Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    (allProduct).map((allProduct, i) =>
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td><img src={`http://localhost:5000/public/${allProduct.ProductImage}`} alt="#ImgNotFound" style={{ width: "30px", height: "30px", borderRadius: "100%" }} /></td>
                                            <td>{allProduct.Title}</td>
                                            <td>{allProduct.category.Title}</td>
                                            <td>
                                                <button type="button" class="btn" style={{ background: "#0B5ED7", color: "white" }} onClick={() => moveToEditPage(`${allProduct.id}`)}>Edit</button>
                                                {/* <Link to={`/adminControls/category_details/edit/${allProduct.id}`} class="btn" style={{ background: "#0B5ED7", color: "white" }}>Edit</Link> */}
                                            </td>
                                            <td>
                                                <button type="button" class="btn" style={{ background: '#FFCA2C' }} onClick={() => deleteProduct(`${allProduct.id}`)}>Delete</button>
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

export default ProductControl;
