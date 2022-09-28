import { Link } from "react-router-dom";

function ProductCardStyle({
  productImg,
  ratingQty,
  productName,
  productCategory,
  productDescription,
  Attribute,
  OriginalPrice,
  DiscountedPrice,
  number,
}) {
  return (
    <>
      {/* <Link to={`/product_page/${number}`} style={{ textDecoration: "none" }}> */}
      <div className="w-100 text-center product_card text-white">
        <div className="text-center flex justify-center">
          <img
            src={productImg}
            className="h-60 w-60 md:h-96 md:w-96 mt-10"
            alt="#ImgNotFound"
          />
        </div>
        <div className="card-body px-lg-5">
          <span className="position-relative">
            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
            <i className="fa fa-star" style={{ color: "#EEC200" }}></i>
            <i className="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>(
            {ratingQty})
          </span>
          <div className="my-4">
            <h5 className="card-title text-xl sm:text-3xl font-semibold">
              {productName}
            </h5>
            <p className="card-text px-5" style={{ fontSize: "16px" }}>
              {productDescription}
            </p>
          </div>
          <div className="dropdown-center text-white">
            <button
              className="dropdown-toggle rounded-full py-2 px-3"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              style={{ background: "#28341E " }}
            >
              {Attribute[0]} | &nbsp;
              <del>₹{OriginalPrice[0]}</del> &nbsp; ₹{DiscountedPrice[0]} &nbsp;
              <b>
                <span className="text-white">
                  Save{" "}
                  {`${
                    100 -
                    Math.floor((DiscountedPrice[0] * 100) / OriginalPrice[0])
                  }%`}
                </span>
              </b>
            </button>
            <ul className="dropdown-menu  text-center">
              <li>
                <Link className="dropdown-item" to="/">
                  {Attribute[1]}{" "}
                  <del className="text-muted">₹{OriginalPrice[1]}</del> ₹
                  {DiscountedPrice[1]} &nbsp;
                  <b>
                    <span className="text-success">
                      Save{" "}
                      {`${
                        100 -
                        Math.floor(
                          (DiscountedPrice[1] * 100) / OriginalPrice[1]
                        )
                      }%`}
                    </span>
                  </b>
                </Link>
                <hr />
              </li>
              <li>
                <Link className="dropdown-item" to="/">
                  {Attribute[2]}{" "}
                  <del className="text-muted">₹{OriginalPrice[2]}</del> ₹
                  {DiscountedPrice[2]} &nbsp;
                  <b>
                    <span className="text-success">
                      Save{" "}
                      {`${
                        100 -
                        Math.floor(
                          (DiscountedPrice[2] * 100) / OriginalPrice[2]
                        )
                      }%`}
                    </span>
                  </b>
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/">
            <button className="mt-3 primary-button">Add to cart</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductCardStyle;
