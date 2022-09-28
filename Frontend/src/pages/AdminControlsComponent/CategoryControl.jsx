import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";

function CategoryControl() {

    const navigate = useNavigate()
    const [loading, setloading] = useState(false)
    const [allCategory, setAllCategory] = useState([])
    const gettingUserDetails = useSelector(state => state.UserDetail)

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

    function moveToEditPage(categoryId){
        localStorage.setItem("categoryId", categoryId)
        navigate(`/adminControls/category_details/edit/${categoryId}`)
    }

    return (
        <>
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
                                                <button type="button" class="btn" style={{ background: "#0B5ED7", color:"white" }} onClick={()=>moveToEditPage(`${allCategory.id}`)}>Edit</button>
                                                {/* <Link to={`/adminControls/category_details/edit/${allCategory.id}`} class="btn" style={{ background: "#0B5ED7", color: "white" }}>Edit</Link> */}
                                            </td>
                                            <td>
                                                <button type="button" class="btn" style={{ background: '#FFCA2C' }}>Primary</button>
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

export default CategoryControl;
