import { Link } from "react-router-dom";

function CardStyle(props) {
    return (
        <>
            <Link to="/" style={{ textDecoration: "none" }}>
                <div class="card w-100 text-center" style={{ border: "0" }}>
                    <div className="text-center">
                        <img src={props.productImg} class="card-img-top" alt="#ImgNotFound" style={{ maxWidth: "400px", maxHeight: "400px" }} />
                    </div>
                    <div class="card-body px-lg-5">
                        <span>
                            <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                            <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                            ({props.ratingQty})
                        </span>
                        <h5 class="card-title text-dark">{props.productName}</h5>
                        <p class="card-text text-dark" style={{ fontSize: "16px" }}>{props.productDesc}</p>
                        <div class="dropdown">
                            <button class="btn dropdown-toggle w-100" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: "white", border: "1px solid black" }}>
                                100 gm | 40 cup ₹899
                            </button>
                            <ul class="dropdown-menu text-center ">
                                <li>
                                    <Link class="dropdown-item" to="/">300gm | 12cups <del className="text-muted">₹2,247</del> ₹2090 <b><span className="text-success">Save 6%</span></b></Link>
                                    <hr />
                                </li>
                                <li>
                                    <Link class="dropdown-item" to="/">500gm | 250cups <del className="text-muted">₹3,295</del> ₹3295 <b><span className="text-success">Save 12%</span></b></Link>
                                </li>
                            </ul>
                        </div>
                        <Link to="/" class="btn mt-3 text-white" style={{ background: "#02CB5A", border: "0" }}>ADD TO CART</Link>
                    </div>
                </div>
            </Link>
        </>
    );
}

export default CardStyle;
