import { Link } from "react-router-dom";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";
import RelatedProductCard from "./RelatedProductCard/RelatedProductCard";
import ReviewAndRating from "./ReviewAndRating/ReviewAndRating";
import { BuffaloGheeincrement } from "../Redux/EcommerceReducer";
import { BuffaloGheedecrement } from "../Redux/EcommerceReducer";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import product1 from "../content/images/product1.png";

function RelatedProducts() {
  const dispatch = useDispatch();
  const BuffaloGhee = useSelector((state) => state.BuffaloGhee);

  return (
    <div className="px-10 md:px-28 bg-[#6F8D56] py-4 text-white">
      <div className="row mt-24">
        <div className="col-lg-6 pr-lg-5">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner text-center">
              <div class="carousel-item active">
                <div className="px-5">
                  <img
                    src={product1}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={product1}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={product1}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={product1}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={product1}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button
              class="carousel-control-next"
              type="button"
              data-bs-target="#carouselExampleControls"
              data-bs-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-lg-6 px-3 pt-3">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Pure Desi Cow Ghee
          </h3>
          <div className="row py-1">
            <div className="col">
              <Link to="/" className="text-[#ffe74d] hover:text-[#ffe74d]">
                Pure Buffalo Ghee
              </Link>
              &nbsp;
            </div>
            <div className="col" style={{ textAlign: "right" }}>
              <span>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>
                <span className="ms-1">(15)</span>
              </span>
            </div>
          </div>
          <p className="pt-2 text-white text-lg font-medium">
            Delicious ghee ethically prepared from enzyme-rich yoghurt of pure
            breed Desi Cows
          </p>
          <div className="mt-2">
            <h6 className="m-0 text-[#28341E]">Buying Options</h6>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 my-3 md:my-5 text-[#28341E]">
              <div className="flex flex-col bg-[#28341E] text-[#ffe74d] p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className="text-center">1 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 1600</span>
                  </h6>
                  <h6 className=" text-center">₹ 1250</h6>
                </div>
              </div>
              <div className="flex flex-col bg-white p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className=" text-center">1 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 1600</span>
                  </h6>
                  <h6 className=" text-center">₹ 1250</h6>
                </div>
              </div>
              <div className="flex flex-col bg-white p-2 rounded-sm justify-center items-center text-xl font-medium cursor-pointer">
                <div>
                  <h6 className=" text-center">5 Kg</h6>
                </div>
                <div className="flex gap-4 mt-2">
                  <h6 className=" text-center">
                    <span className="ml-2 line-through">₹ 7500</span>
                  </h6>
                  <h6 className=" text-center">₹ 5400</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-5" style={{ maxWidth: "600px" }}>
            <div className="d-flex flex-col md:flex-row justify-content-start mb-3">
              <h5 className="fw-bold m-0 text-2xl md:text-3xl mb-4 pr-3 text-left">
                &nbsp;₹ 650
              </h5>
              <div className="d-flex mb-4 align-items-center justify-content-start gap-3 ms-auto">
                {BuffaloGhee >= 1 ? (
                  <>
                    <div
                      className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        background: "black",
                      }}
                      onClick={() => dispatch(BuffaloGheedecrement())}
                    >
                      <i class="fa fa-minus"></i>
                    </div>
                  </>
                ) : (
                  <>
                    <div
                      className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        background: "black",
                      }}
                    >
                      <i class="fa fa-minus"></i>
                    </div>
                  </>
                )}
                <input
                  type="text"
                  defaultValue="1"
                  value={BuffaloGhee}
                  className="w-25  rounded border ps-2"
                />
                <div
                  className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer"
                  style={{
                    width: "2rem",
                    height: "2rem",
                    background: "black",
                  }}
                  onClick={() => dispatch(BuffaloGheeincrement())}
                >
                  <i class="fa fa-plus"></i>
                </div>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-start gap-3">
              <div className="col-6 col-xl-5">
                <button className="m-1.5 primary-button">Add To Cart</button>
              </div>
              <div className="col-6 col-xl-5">
                <button className="m-1.5 primary-button">Buy Now</button>
              </div>
              <div
                className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer border"
                style={{ width: "2rem", height: "2rem" }}
              >
                <i class="fa fa-heart text-[#FFD644]"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;
