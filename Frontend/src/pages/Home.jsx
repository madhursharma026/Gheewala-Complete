import ProductCardStyle from "../components/ProductCardStyle";
import product1 from "../content/images/product1.png";
import FaqsCard from "./HomepageComponents/FaqsCard";
import { FaHeartbeat, FaFilter } from "react-icons/fa";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";
import gheewala from "../content/images/arrived at gheewala.png";
import cow from "../content/images/cow.png";
import curd from "../content/images/curd.png";
import bilona from "../content/images/bilona.png";
import packaging from "../content/images/packaging.png";
import ship from "../content/images/ready to ship.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import * as React from "react";

function Home() {

  const navigate = useNavigate();
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
    <>
      <div className="relative w-full h-full flex flex-col justify-center items-center bg-gray-50 overflow-hidden pl-0 sm:pl-20 header_image">
        <div className="w-full flex flex-col lg:flex-row mb-20 my-16">
          {/* :HERO MAIN */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-white">
            {/* ::Hero Inner */}
            <div className="p-5 flex flex-col justify-center lg:items-start text-left">
              {/* Hero Title */}
              <h1 className="pb-4 md:py-8 text-7xl sm:text-8xl font-extrabold">
                VEDIC <br />
                BILONA <br /> GHEE
              </h1>
              {/* Starting Price */}
              <p className="text-lg">
                100% Pure Grass fed A2 Gir Cow's hand churned Ghee is typically
                prepared by simmering butter, which is churned from cultured
                curd (traditionally made dahi),
              </p>
              {/* Buttons */}
              <div className="mt-8 flex sm:flex-row gap-3 justify-start items-center">
                <Link to="/cow-ghee">
                  <button className="primary-button text-sm px-2 md:px-3">
                    Cow Ghee
                  </button>
                </Link>
                <Link to="/buffalo-ghee">
                  <button className="primary-button text-sm px-2 md:px-3">
                    Buffalo Ghee
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* :HERO ILLUSTRATION */}
          <div className="relative w-full lg:w-1/2 flex flex-col justify-center items-center overflow-hidden">
            <img
              src={product1}
              alt=""
              className="md:mr-10 md:-ml-14 hidden md:block"
              style={{ maxWidth: "450px", maxHeight: "450px" }}
            />
          </div>
        </div>
      </div>
      <div className="bg-[#6F8D56]">
        <div className="mx-auto pt-2 md:pt-20 px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          {/* ::Title */}
          <h2 className="space-y-2 text-4xl sm:text-5xl text-white font-extrabold uppercase mt-10 md:mt-16">
            discover your <br /> favourite ghee
          </h2>
          {/* ::Text */}
          <p className="mt-4 text-base leading-6 capitalize text-white">
            we have collected the best pure cow ghee and best buffalo ghee
            directly from farmers to serve you.
          </p>
        </div>
      </div>
      <div className="py-1 bg-[#6F8D56]">
        <div className="row pb-5 px-lg-5">
          <div className="flex justify-center">
            <div className="h-48 w-3/4 bg-[#28341E] rounded-t-3xl absolute mt-48 hidden md:block"></div>
          </div>
          <div className="col-md-6 z-10">
            <Link to="/buffalo-ghee" style={{ textDecoration: "none" }}>
              <ProductCardStyle
                number="1"
                productImg={`http://localhost:5000/public/${item2.ProductImage}`}
                ratingQty="15"
                productName={item2.Title}
                productCategory="Pure Desi Ghee"
                productDescription={item2.ShortDescription}
                Attribute={["500gm", "1kg", "5kg"]}
                OriginalPrice={[900, 1600, 7500]}
                DiscountedPrice={[650, 1250, 5400]}
                wsaTitle="Why Ghee Wala’s Buffalo Ghee"
                wsaData={[
                  "Free from artificial colourings",
                  "preservatives and chemicals Free",
                  "Directly Sourced From Farmers",
                  "Made from pure breed buffalos 100% Pure Ghee",
                  "Tested in Certified Labs",
                  "Carefully produced and packed",
                ]}
              />
            </Link>
          </div>
          <div className="col-md-6 z-10">
            <Link to="/cow-ghee" style={{ textDecoration: "none" }}>
              <ProductCardStyle
                number="2"
                productImg={`http://localhost:5000/public/${item.ProductImage}`}
                ratingQty="15"
                productName={item.Title}
                productCategory="Pure Desi Ghee"
                productDescription={item.ShortDescription}
                Attribute={["500gm", "1kg", "5kg"]}
                OriginalPrice={[900, 1600, 7500]}
                DiscountedPrice={[650, 1250, 5400]}
              />
            </Link>
          </div>
        </div>
        <div className="flex justify-around text-[#28341E ] bg-[#ffe74d] text-3xl md:text-5xl font-bold uppercase flex-col md:flex-row px-3 py-3 my-10">
          <div className="flex items-center ">
            <div className="text-3xl md:text-5xl font-bold mr-2 md:mr-5">
              <FaHeartbeat />
            </div>
            <h2>Good For Health</h2>
          </div>
          <div className="flex items-center ">
            <div className="text-3xl md:text-5xl font-bold mr-2 md:mr-5">
              <FaFilter />
            </div>
            <h2>100% Pure</h2>
          </div>
        </div>
        <div className="videoSection text-white uppercase">
          <h2 className="text-center text-2xl md:text-5xl mt-14 md:mt-20">
            <b>the making of ghee</b>
          </h2>
          <p className="mt-2 text-base text-center leading-6 capitalize text-white">
            What makes our ghee so special?
          </p>
          <div className="flex justify-center mt-14">
            <video
              width="70%"
              controls
              src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="mx-xl-5 believe_car_before_md_scrn pt-5">
          <div className="d-flex justify-content-center align-items-center flex-column text-white uppercase">
            <h2 className="text-center text-2xl md:text-5xl mt-14">
              <b>Why Choose Us</b>
            </h2>
            <p className="mt-2 mb-5 text-base text-center leading-6 capitalize ">
              Why Ghee Wala’s Buffalo Ghee
            </p>
          </div>
          <BelieveCardBeforeMDScrn
            data={[
              "Free from artificial colourings",
              "preservatives and chemical Free",
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
                <h6 className="text-xl font-semibold uppercase mt-3">
                  Bilona{" "}
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
        {/* <h3 className="pt-5 text-center py-4 main_heading fw-bold">
          WHAT PEOPLE<span className="text-success">&nbsp;ARE SAYING </span>
        </h3> */}
        <h2 className="text-center text-2xl md:text-5xl mt-16 font-bold text-white ">
          KNOW WHAT OUR <br /> CUSTOMERS FEEL ABOUT IT
        </h2>
        <div className="container-lg bg-[#6F8D56] mb-20">
          <div
            id="what_people_are_saying"
            class="carousel slide mx-lg-5"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <FaqsCard />
              </div>
              <div class="carousel-item">
                <FaqsCard />
              </div>
              <div class="carousel-item">
                <FaqsCard />
              </div>
            </div>
            <button
              class="carousel-control-prev"
              type="button"
              data-bs-target="#what_people_are_saying"
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
              data-bs-target="#what_people_are_saying"
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
      </div>
    </>
  );
}

export default Home;
