import * as React from "react";
import cow from "../content/images/cow.png";
import curd from "../content/images/curd.png";
import bilona from "../content/images/bilona.png";
import { Link, useNavigate } from "react-router-dom";
import product1 from "../content/images/product1.png";
import { useSelector, useDispatch } from "react-redux";
import ship from "../content/images/ready to ship.png";
import packaging from "../content/images/packaging.png";
import ReviewAndRating from "./ReviewAndRating/ReviewAndRating";
import gheewala from "../content/images/arrived at gheewala.png";
import { BuffaloGheeincrement, CowGheedecrement, CowGheeincrement } from "../Redux/UpdatedEcommerceReducer";
import { BuffaloGheedecrement } from "../Redux/UpdatedEcommerceReducer";
import RelatedProductCard from "./RelatedProductCard/RelatedProductCard";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";

function NewProductPageTwo() {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const CowGhee = useSelector(state => state.CowGhee)
  const BuffaloGhee = useSelector((state) => state.BuffaloGhee);
  const gettingUserDetails = useSelector(state => state.UserDetail)
  const [item, setItem] = React.useState([])
  const [item2, setItem2] = React.useState([])

  {
      React.useEffect(() => {
          if (gettingUserDetails.length === 0) {
              navigate("/login")
          }
      })
  }

  {
    React.useEffect(() => {
      if (gettingUserDetails[0].role === "admin") {
        navigate("/admin_page")
      }
    }, [])
  }

  {
    React.useEffect(() => {
      fetch(`http://127.0.0.1:5000/product`).then((result) => {
        result.json().then((resp) => {
          setItem(resp[1])
          setItem2(resp[0])
          // dispatch(HomepageDataSave(resp))
        })
      })
    }, [])
  }


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
                    src={`http://localhost:5000/public/${item2.ProductImage}`}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={`http://localhost:5000/public/${item2.ProductImage}`}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={`http://localhost:5000/public/${item2.ProductImage}`}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={`http://localhost:5000/public/${item2.ProductImage}`}
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item">
                <div className="px-5">
                  <img
                    src={`http://localhost:5000/public/${item2.ProductImage}`}
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
          {item2.Title}
          </h3>
          <div className="row py-1">
            <div className="col">
              <Link to="/" className="text-[#ffe74d] hover:text-[#ffe74d]">
              {item2.Title}
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
          {item2.ShortDescription}
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
                &nbsp;₹ {item2.Price}
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
                  style={{color:"black"}}
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
                {/* <button className="m-1.5 primary-button">Add To Cart</button> */}
                <button type="button" className="m-1.5 primary-button" onClick={() => dispatch(BuffaloGheeincrement())}>Add to Cart</button>
              </div>
              <div className="col-6 col-xl-5">
                {/* <button className="m-1.5 primary-button">Buy Now</button> */}
                <button className="m-1.5 primary-button" onClick={() => (dispatch(BuffaloGheeincrement()), navigate("/add_to_cart"))}>Buy Now</button>
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
      <div className="mx-xl-5 believe_car_before_md_scrn pt-5">
        <div className="d-flex justify-content-center align-items-center flex-column text-white uppercase">
          <h2 className="text-center text-2xl md:text-4xl mt-8">
            <b>Why Choose Us</b>
          </h2>
          <p className="mt-2 mb-5 text-base text-center leading-6 capitalize ">
            Why Ghee Wala’s Buffalo Ghee
          </p>
        </div>
        <BelieveCardBeforeMDScrn
          data={[
            "Free from artificial colourings",
            "preservatives and Chemical Free",
            "Directly Sourced From Farmers",
            "Made from pure breed buffalos 100% Pure Ghee",
            "Tested in Certified Labs",
            "Carefully produced and packed",
          ]}
        />
      </div>
      <div className="text-center text-white px-5">
        <h2 className="text-center text-2xl md:text-5xl mt-14 md:mt-20">
          <b>FRESHNESS JOURNEY</b>
        </h2>
        <p className="mt-2 mb-5 text-base text-center leading-6 capitalize px-4">
          Our Transparent Making Process,{" "}
          <span className="font-bold">from Cow to Kitchen</span>
        </p>
        <div className="row position-relative">
          <div className="md:col-4 col-md-2 position-relative">
            <div className="d-flex justfy-content-center align-items-center flex-column">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 1
              </span>
              <img
                src={cow}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">Cow</h6>
              <div className="step-arrow">
                <svg
                  className="hidden md:block mt-3"
                  fill="white"
                  clip-rule="evenodd"
                  width="30"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-4 col-md-2">
            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 2
              </span>
              <img
                src={curd}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">Curd</h6>
              <div className="step-arrow">
                <svg
                  className="hidden md:block mt-3"
                  fill="white"
                  clip-rule="evenodd"
                  width="30"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-4 col-md-2">
            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 3
              </span>
              <img
                src={bilona}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">Bilona </h6>
              <div className="step-arrow">
                <svg
                  className="hidden md:block mt-3"
                  fill="white"
                  clip-rule="evenodd"
                  width="30"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-4 col-md-2">
            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 4
              </span>
              <img
                src={gheewala}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">
                {" "}
                Arrived at Gheewala
              </h6>
              <div className="step-arrow">
                <svg
                  className="hidden md:block mt-3"
                  fill="white"
                  clip-rule="evenodd"
                  width="30"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-4 col-md-2">
            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 5
              </span>
              <img
                src={packaging}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">
                Packaging
              </h6>
              <div className="step-arrow">
                <svg
                  className="hidden md:block mt-3"
                  fill="white"
                  clip-rule="evenodd"
                  width="30"
                  fill-rule="evenodd"
                  stroke-linejoin="round"
                  stroke-miterlimit="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                    fill-rule="nonzero"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="md:col-4 col-md-2">
            <div className="d-flex justfy-content-center align-items-center flex-column position-relative">
              <span className="text-xl font-semibold uppercase mb-3 mt-3">
                Step 6
              </span>
              <img
                src={ship}
                alt="#ImgNotFound"
                className="md:h-32 md:w-32"
                width="130px"
                height="130px"
              />
              <h6 className="text-xl font-semibold uppercase mt-3">
                Ready to Ship
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="videoSection text-white uppercase">
        <h2 className="text-center text-2xl md:text-4xl mt-14">
          <b>the making of ghee</b>
        </h2>
        <p className="mt-2 text-base text-center leading-6 capitalize text-white">
          What makes our ghee so special?
        </p>
        <div className="flex justify-center mt-14">
          <iframe
            className="md:w-[70%] w-full aspect-video border-gray-50 border-8 rounded-sm"
            src="https://www.youtube.com/embed/LkBE8IFeFiM"
            title="video"
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="text-center my-5">
        <h2 className="text-center text-2xl md:text-4xl mt-14 md:mt-20 mb-10 uppercase">
          <b>Know Your Ghee</b>
        </h2>
        <p className="mb-5">
        {item2.LongDescription}
        </p>
      </div>
      <div className="text-center my-5">
        <h2 className="text-center text-2xl md:text-4xl mt-14 md:mt-20 mb-10 uppercase">
          <b>Product Specification</b>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-16">
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="#ImgNotFound" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="#ImgNotFound" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="#ImgNotFound" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={cow} className="h-36 w-36" alt="#ImgNotFound" />
            <h6 className="mt-3 text-xl md:text-2xl ">Desi Cow Ghee</h6>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h2 className="text-center text-2xl md:text-4xl mt-14 md:mt-20 mb-10 uppercase">
          <b>Benefits of Pure Desi Cow Ghee</b>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-16">
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt=""
            />
            <h6 className="mt-4 text-xl md:text-2xl font-semibold md:font-bold capitalize">
              Anti-cancer properties
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              An acid known as conjugated linoleic acid which is found to fight
              cancer is available in ghee that comes from grass-fed cows. The
              acid is also thought to burn fat and decrease its formation. It’s
              a very important benefit tied with regular consumption of 100%
              pure ghee.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt=""
            />
            <h6 className="mt-4 font-semibold md:font-bold text-xl md:text-2xl ">
              Natural moisturizer
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              Ghee has essential fatty acids that help in hydrating the skin. As
              a natural moisturizer, it supports healthy and glowing skin in all
              weathers. Regular consumption of 100% pure ghee and its
              application on the skin provides anti-aging benefits to the skin
              and can enhance skin health.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt="#ImgNotFound"
            />
            <h6 className="mt-4 font-semibold md:font-bold text-xl md:text-2xl ">
              Increases taste of food
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              Ghee is an excellent taste enhancer. It goes down quite well with
              nearly all the foods and adds new tastes, making the process of
              eating food enjoyable.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt="#ImgNotFound"
            />
            <h6 className="mt-4 font-semibold md:font-bold text-xl md:text-2xl ">
              Improve reproductive health
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              The healthy fats available in ghee are thought to help the
              formation of the hormone responsible for fertility. Women of
              reproductive age are advised to take pure ghee regularly to
              regulate hormones in their bodies. In men, pure quality ghee can
              improve sperm quality.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt="#ImgNotFound"
            />
            <h6 className="mt-4 font-semibold md:font-bold text-xl md:text-2xl ">
              Stimulates lactation
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              Ghee provides a number of benefits for newborn mothers. It
              rehydrates the body, aids in better digestion, helps in bowel
              movements, provides essential nourishing, and also helps in the
              formation of healthy breast milk. As mentioned above, it can
              prevent excess weight gain.
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              className="h-60 md:h-72 w-60 md:w-72"
              alt="#ImgNotFound"
            />
            <h6 className="mt-4 font-semibold md:font-bold text-xl md:text-2xl ">
              Good for lactose tolerant people
            </h6>
            <p className="mt-3 px-3 text-left ml-2 md:ml-3">
              This is yet another important benefit associated with the
              consumption of 100% natural ghee. Because it is lactose-free, if
              you are lactose intolerant, you can safely consume ghee.
            </p>
          </div>
        </div>
      </div>
      <div className="text-center my-5">
        <h2 className="text-center text-2xl md:text-4xl mt-14 mb-10 uppercase">
          <b>Certifications</b>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10 md:my-16">
          <div className="flex flex-col justify-center items-center">
            <img src={curd} className="h-36 w-36" alt="" />
            <h6 className="mt-4 text-xl md:text-2xl font-semibold md:font-bold capitalize">
              The Experience
            </h6>
            <p className="mt-3 px-3 text-center">
              Lorem ipsum dolor sit amet. Id voluptatem facere aut eius quod est
              atque eligendi. Et sint quia qui enim consectetur et alias odio
              aut fugiat soluta a illo doloribus est perspiciatis voluptas aut
              incidunt sapiente. Ea quia perspiciatis et quia nihil ut fugiat
              modi eos tempora delectus itaque.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={curd} className="h-36 w-36" alt="#ImgNotFound" />
            <h6 className="mt-4 text-xl md:text-2xl font-semibold md:font-bold capitalize">
              How to Check Ghee Purity
            </h6>
            <p className="mt-3 px-3 text-center">
              Lorem ipsum dolor sit amet. Id voluptatem facere aut eius quod est
              atque eligendi. Et sint quia qui enim consectetur et alias odio
              aut fugiat soluta a illo doloribus est perspiciatis voluptas aut
              incidunt sapiente. Ea quia perspiciatis et quia nihil ut fugiat
              modi eos tempora delectus itaque.
            </p>
          </div>
        </div>
      </div>
      <div className="pb-5 px-1 px-lg-3">
        <h2 className="text-center text-2xl md:text-4xl mt-14 md:mt-20 mb-10 md:mb-20 ">
          <b>EXPERIENCE</b>
        </h2>
        <div className="row">
          <div className="col-md-6 order-2 order-md-1">
            <h3 className="mt-4 md:mt-0 text-xl md:text-2xl font-semibold md:font-bold capitalize">
              Appearance
            </h3>
            <p className="sub_para">Cow Ghee</p>
            <h3 className="">Taste</h3>
            <p className="sub_para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem modi ipsa culpa? Ad modi animi corporis libero,
              ipsam voluptatem molestiae quas optio repellat iusto in,
              asperiores quam neque amet suscipit laboriosam odit, quidem
              quaerat ipsa sapiente eligendi! Maxime repellat amet voluptatem
              eum excepturi labore exercitationem distinctio quaerat
              repudiandae, eos quam facilis sunt itaque? Cupiditate minima quo
              consequuntur asperiores sequi? Consectetur aspernatur beatae odit?
              Pariatur, quam tempora suscipit rerum consequatur et nesciunt,
              iusto error ut eligendi excepturi quod, cum neque non velit
              dolorum eum fuga molestias est laboriosam enim doloremque illum
              perspiciatis. Dolores tempore accusantium blanditiis sequi, ex
              natus beatae excepturi.
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2 text-center">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              alt="#ImgNotFound"
              className="w-100 rounded"
              style={{ maxWidth: "500px" }}
            />
          </div>
        </div>
        <h2 className="text-center text-2xl md:text-4xl mt-14 md:mt-20 mb-16 uppercase">
          <b>How to Check Ghee Purity</b>
        </h2>
        <div classsName="text-center">
          <p className="sub_para pb-2">
            Originally known as Kumseri, the Castleton tea estate was
            established in 1855. Located in Kurseong, Darjeeling, this estate
            has 130-year-old chinary bushes. Picked fresh at 4000 feet, this
            chinary black we have procured is an impressive one! Vegetal,
            stone-fruity with nutty accents, this Indian Single Estate is a
            captivating cup of First Flush 2022, fresh from the misty hills!
          </p>
        </div>
        <div className="px-xl-5 mx-xl-5 mt-10">
          <video
            width="100%"
            controls
            src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
          >
            Your browser does not support the video tag.
          </video>
          <div className="row mt-5 md:mt-10">
            <div className="col-12 col-md-4">
              <video
                width="100%"
                controls
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-12 col-md-4">
              <video
                width="100%"
                controls
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            <div className="col-12 col-md-4">
              <video
                width="100%"
                controls
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
        <h2 className="text-center text-xl md:text-3xl my-8">
          <b>Rating and Reviews</b>
        </h2>
        <div className="row px-5 mb-10">
          <div className="col-lg-7">
            <div className="row px-lg-5">
              <div className="col-lg-5 text-center">
                <h1>4.97</h1>
                <h4>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                  <span class="fa fa-star"></span>
                </h4>
                <h6>40 reviews</h6>
              </div>
              <div className="col-lg-7 text-center">
                <div class="progress mb-2" style={{ height: "15px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "25%", background: "#28341E " }}
                  ></div>
                </div>
                <div class="progress mb-2" style={{ height: "15px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "25%", background: "#28341E " }}
                  ></div>
                </div>
                <div class="progress mb-2" style={{ height: "15px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "25%", background: "#28341E " }}
                  ></div>
                </div>
                <div class="progress mb-2" style={{ height: "15px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "25%", background: "#28341E  " }}
                  ></div>
                </div>
                <div class="progress mb-2" style={{ height: "15px" }}>
                  <div
                    class="progress-bar"
                    role="progressbar"
                    aria-label="Basic example"
                    style={{ width: "25%", background: "#28341E  " }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 px-lg-5" style={{ textAlign: "right" }}>
            <button
              type="button"
              class="btn text-light write_a_review_btn"
              style={{ background: "#28341E " }}
            >
              WRITE A REVIEW
            </button>
          </div>
        </div>
        <hr className="mb-10" />
        <span class="dropdown px-1 px-lg-3">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "150px",
              border: "1px solid white",
              borderRadius: "0",
            }}
          >
            <span style={{ fontSize: "14px", color: "white" }}>
              Sort by Featured
            </span>
          </button>
          <ul class="dropdown-menu ">
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
          </ul>
        </span>
        <span class="dropdown px-1 px-lg-3">
          <button
            class="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{
              width: "150px",
              border: "1px solid white",
              borderRadius: "0",
            }}
          >
            <span style={{ fontSize: "14px", color: "white" }}>Rating All</span>
          </button>
          <ul class="dropdown-menu ">
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
            <li>
              <Link to="/" class="dropdown-item">
                Option
              </Link>
            </li>
          </ul>
        </span>
        <span class="dropdown px-1 px-lg-3">
          <input type="checkbox" />
          &ensp; With media
        </span>
        <div className="row pt-4 text-gray-900">
          <div className="col-md-6 col-lg-4">
            <ReviewAndRating />
          </div>
          <div className="col-md-6 col-lg-4">
            <ReviewAndRating />
          </div>
          <div className="col-md-6 col-lg-4">
            <ReviewAndRating />
          </div>
        </div>
        {/* <RelatedProducts /> */}
      </div>
      <h2 className="text-center text-2xl md:text-4xl mt-10 uppercase">
        <b>Related Products</b>
      </h2>
      <div className="px-1 md:px-28 bg-[#6F8D56] pb-4 text-white mb-10">
        <div className="row mt-14">
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
                    src={`http://localhost:5000/public/${item.ProductImage}`}
                      class="d-block w-100"
                      alt="#ImgNotFound"
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="px-5">
                    <img
                    src={`http://localhost:5000/public/${item.ProductImage}`}
                      class="d-block w-100"
                      alt="#ImgNotFound"
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="px-5">
                    <img
                    src={`http://localhost:5000/public/${item.ProductImage}`}
                      class="d-block w-100"
                      alt="#ImgNotFound"
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="px-5">
                    <img
                    src={`http://localhost:5000/public/${item.ProductImage}`}
                      class="d-block w-100"
                      alt="#ImgNotFound"
                    />
                  </div>
                </div>
                <div class="carousel-item">
                  <div className="px-5">
                    <img
                    src={`http://localhost:5000/public/${item.ProductImage}`}
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
            {item.Title}
            </h3>
            <div className="row py-1">
              <div className="col">
                <Link to="/" className="text-[#ffe74d] hover:text-[#ffe74d]">
                {item.Title}
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
            {item.ShortDescription}
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
                  &nbsp;₹ {item.Price}
                </h5>
                <div className="d-flex mb-4 align-items-center justify-content-start gap-3 ms-auto">
                  {CowGhee >= 1 ? (
                    <>
                      <div
                        className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer"
                        style={{
                          width: "2rem",
                          height: "2rem",
                          background: "black",
                        }}
                        onClick={() => dispatch(CowGheedecrement())}
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
                    value={CowGhee}
                    className="w-25  rounded border ps-2"
                    style={{color:"black"}}
                  />
                  <div
                    className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center cursor-pointer"
                    style={{
                      width: "2rem",
                      height: "2rem",
                      background: "black",
                    }}
                    onClick={() => dispatch(CowGheeincrement())}
                  >
                    <i class="fa fa-plus"></i>
                  </div>
                </div>
              </div>
              <div className="d-flex align-items-center justify-content-start gap-3">
                <div className="col-6 col-xl-5">
                  {/* <button className="m-1.5 primary-button">Add To Cart</button> */}
                <button type="button" className="m-1.5 primary-button" onClick={() => dispatch(CowGheeincrement())}>Add to Cart</button>
                </div>
                <div className="col-6 col-xl-5">
                  {/* <button className="m-1.5 primary-button">Buy Now</button> */}
                <button className="m-1.5 primary-button" onClick={() => (dispatch(CowGheeincrement()), navigate("/add_to_cart"))}>Buy Now</button>
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
    </div>
  );
}

export default NewProductPageTwo;
