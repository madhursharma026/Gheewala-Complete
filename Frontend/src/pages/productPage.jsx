import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import BelieveCardAfterMDScrn from "./ProductPageComponents/BelieveCardAfterMDScrn";
import BelieveCardBeforeMDScrn from "./ProductPageComponents/BelieveCardBeforeMDScrn";

function ProductPage() {

    const navigate = useNavigate();
    const gettingUserDetails = useSelector(state => state.UserDetail)

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
    
  return (
    <div className="container-xl">
      <div className="row pt-3">
        <div className="col-lg-6">
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner text-center">
              <div class="carousel-item active" style={{ minHeight: "400px" }}>
                <div className="px-5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_1_1_7c8337ba-ebd3-43d4-a270-8230d51b3250_1_1024x.jpg?v=1653632514"
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item" style={{ minHeight: "400px" }}>
                <div className="px-5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_2_1024x.jpg?v=1653632514"
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item" style={{ minHeight: "400px" }}>
                <div className="px-5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_3_1962717b-3459-44ed-a696-1bac6ab0ffb9_1024x.jpg?v=1653632514"
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item" style={{ minHeight: "400px" }}>
                <div className="px-5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1865/1011/products/BLACK_TEA_100gm_1634db94-bc2c-472b-bf9e-fe86b8600471_1024x.jpg?v=1653567234"
                    class="d-block w-100"
                    alt="#ImgNotFound"
                  />
                </div>
              </div>
              <div class="carousel-item" style={{ minHeight: "400px" }}>
                <div className="px-5">
                  <img
                    src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1024x.jpg?v=1653567234"
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
        <div className="col-lg-6 px-3">
          <h3>Darjeeling Castleton Spring Chinary Black</h3>
          <div className="row">
            <div className="col">Darjeeling Black</div>
            <div className="col" style={{ textAlign: "right" }}>
              <span>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star" style={{ color: "#EEC200" }}></i>
                <i class="fa fa-star-half-o" style={{ color: "#EEC200" }}></i>
                (15)
              </span>
            </div>
          </div>
          <p className="text-muted" style={{ fontSize: "20px" }}>
            A fruity-nutty cup, fresh from Darjeeling
          </p>
          <h6>Buying Options</h6>
          <div className="row pt-3">
            <div className="col" style={{ display: "flex" }}>
              <div class="card w-100" style={{ border: "2px solid #009340" }}>
                <div class="card-body py-1">
                  <h6
                    className="text-success text-center"
                    style={{ fontSize: "15px" }}
                  >
                    <img
                      src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf-green.svg?v=3326972369061157883"
                      alt="#ImgNotFound"
                      width="15px"
                      height="15px"
                    />{" "}
                    Loose leaf <br />
                    100gm | 50 cups
                  </h6>
                </div>
              </div>
            </div>
            <div className="col" style={{ display: "flex" }}>
              <div class="card w-100">
                <div class="card-body py-1">
                  <h6 className="text-center" style={{ fontSize: "15px" }}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf.svg?v=9469339130553571855"
                      alt="#ImgNotFound"
                      width="15px"
                      height="15px"
                    />{" "}
                    Loose leaf <br />
                    300gm | 120 cups
                  </h6>
                </div>
              </div>
            </div>
            <div className="col" style={{ display: "flex" }}>
              <div class="card w-100">
                <div class="card-body py-1">
                  <h6 className="text-center" style={{ fontSize: "15px" }}>
                    <img
                      src="https://cdn.shopify.com/s/files/1/1865/1011/files/loose-leaf.svg?v=9469339130553571855"
                      alt="#ImgNotFound"
                      width="15px"
                      height="15px"
                    />{" "}
                    Loose leaf <br />
                    500gm | 250 cups
                  </h6>
                </div>
              </div>
            </div>
          </div>
          <h4 className="pt-4">₹ 749</h4>
          <p className="pt-4">Or 3 interest free payments of ₹ 249.68 with</p>
          <button
            type="button"
            class="btn"
            style={{
              backgrond: "transparent",
              height: "42px",
              marginTop: "-12px",
              borderRadius: "0",
              border: "0",
            }}
          >
            <i class="fa fa-plus"></i>
          </button>
          <input
            type="text"
            style={{ width: "80px", fontSize: "24px" }}
            defaultValue="1"
          />
          <button
            type="button"
            class="btn"
            style={{
              backgrond: "transparent",
              height: "42px",
              marginTop: "-12px",
              borderRadius: "0",
              border: "0",
            }}
          >
            <i class="fa fa-minus"></i>
          </button>
          <button
            type="button"
            class="btn"
            style={{
              background: "#02CB5A",
              color: "white",
              fontSize: "20px",
              marginTop: "-10px",
              width: "65%",
            }}
          >
            <b>SIP NOW</b>
          </button>
        </div>
      </div>
      <div className="mx-xl-5 believe_car_before_md_scrn">
        <BelieveCardBeforeMDScrn />
      </div>
      <div className="believe_car_after_md_scrn">
        <BelieveCardAfterMDScrn />
      </div>
      <h1 className="text-center freshness_journey_heading">
        FRESHNESS JOURNEY
      </h1>
      <div className="text-center">
        <div className="row">
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-1.svg?v=12636508475391262561"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Picked & Processed</h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              23rd-24th May'22
            </p>
          </div>
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-2.svg?v=6602855577405003226"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Arrived at Ghee Wala</h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              25th May'22
            </p>
          </div>
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-3.svg?v=12505986752712508259"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Sorted & Cleaned</h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              25th May'22
            </p>
          </div>
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-4.svg?v=4606512964122051706"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Vacuum Packed</h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              25th May'22
            </p>
          </div>
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-5.svg?v=14189309169453830059"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Stored @ -5°c </h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              25th May'22
            </p>
          </div>
          <div className="col-4 col-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/freshness-6.svg?v=3201811780339525507"
              alt="#ImgNotFound"
              width="100px"
              height="100px"
            />
            <h6 style={{ fontSize: "15px" }}>Ready to Ship</h6>
            <p className="text-success" style={{ fontSize: "12px" }}>
              26th May'22
            </p>
          </div>
        </div>
      </div>
      <div className="py-5">
        <h1 className="text-center know_your_tea_heading">KNOW YOUR TEA</h1>
        <div className="text-center">
          <p style={{ fontSize: "22px" }}>
            Originally known as Kumseri, the Castleton tea estate was
            established in 1855. Located in Kurseong, Darjeeling, this estate
            has 130-year-old chinary bushes. Picked fresh at 4000 feet, this
            chinary black we have procured is an impressive one! Vegetal,
            stone-fruity with nutty accents, this Indian Single Estate is a
            captivating cup of First Flush 2022, fresh from the misty hills!
          </p>
          <div className="row px-5">
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-5_green_de520591-ebda-4c3b-b443-34b96341f545.svg?v=1632141212"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Season</h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                First Flush
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-6_green_1c66ff0d-ebe7-4f93-b6d4-450aa8b79260.svg?v=1632141212"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Specialty</h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                Chinary
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/Caffeine.svg?v=1632222600"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Caffeine</h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                Medium
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/specs-2_green_ee57406e-b4a2-40a7-9344-df476ed97acb.svg?v=1632141212"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Time Of Day</h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                Afternoon
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/Tea_Grade_Logo_1.svg?v=1632138898"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Grade</h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                FTGFOP1
              </p>
            </div>
            <div className="col-4">
              <img
                src="https://cdn.shopify.com/s/files/1/1865/1011/files/Invoice_Logo_1.svg?v=1632138898"
                alt="#ImgNotFound"
                width="50px"
                height="50px"
              />
              <h6 style={{ fontSize: "15px" }}>Invoice </h6>
              <p className="text-success" style={{ fontSize: "12px" }}>
                EX-5
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5">
        <div className="row">
          <div className="col" style={{ textAlign: "right" }}>
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/Rain-Forest-Alliance_480x.jpg?v=14369409827332263818"
              alt="#ImgNotFound"
            />
          </div>
          <div className="col">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/Ethical-Trade-Partnership_480x.jpg?v=4039903149469949543"
              alt="#ImgNotFound"
            />
          </div>
        </div>
      </div>
      <div className="py-5 px-3">
        <h1 className="text-center your_experience">THE EXPERIENCE</h1>
        <h1 className="text-center">(Liquor)</h1>
        <div className="row pt-5">
          <div className="col-md-6 order-2 order-md-1">
            <h3>Aroma</h3>
            <p className="heading_para_size">
              Stone-fruity along with notes of sweet-greens, fresh nuts and
              green figs
            </p>
            <h3>Taste</h3>
            <p className="heading_para_size">
              A medium-bodied cup which feels ample in the mouth and beams with
              sweet-green attributes. It starts out with distinct notes of
              pleasant greens which intermingle with delicious stone-fruity
              characters, akin to peach to define the central theme of the
              liquor. Subtle nutty undercurrents are discernible around the
              edges, which gradually subside to finish on lush citrusy
              intonations. Furtive notes of green figs lingers on in the
              aftertaste, making for a captivating finale.
            </p>
            <h3>COMPLEMENTS</h3>
            <p className="heading_para_size">
              Steamed seafood, salads with creamy dressing, tropical fruit and
              assorted cheeses
            </p>
          </div>
          <div className="col-md-6 order-1 order-md-2">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/products/FFCTCHB_4_1000x.jpg?v=1653567234"
              alt="#ImgNotFound"
              className="w-100"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/files/dryleaves.svg?v=1625478166"
              alt="#ImgNotFound"
              width="50px"
              height="50px"
            />
            <h2 className="pt-4">Dry Leaf</h2>
            <div className="pt-4">
              <h3>Aroma</h3>
              <p className="heading_para_size">
                Fresh nuts, earthy, hints of cedar along with light tones of
                millefeuille
              </p>
            </div>
            <div className="pt-4">
              <h3>Appearance</h3>
              <p className="heading_para_size">
                Short, tightly rolled, blackish-green leaves with some silvery
                buds and olive-green leaf cuttings
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img
              src="https://cdn.shopify.com/s/files/1/1865/1011/t/604/assets/InfusedLeaves.svg?v=122163067981529682131638388147"
              alt="#ImgNotFound"
              width="50px"
              height="50px"
            />
            <h2 className="pt-4">Infusion</h2>
            <div className="pt-4">
              <h3>Aroma</h3>
              <p className="heading_para_size">
                Vegetal, wet earth with soft nutty and citrusy accents
              </p>
            </div>
            <div className="pt-4">
              <h3>Appearance</h3>
              <p className="heading_para_size">
                Short, mix of dark and olive-green leaves; some with young buds
                and stems detached
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5 px-3">
        <h1 className="text-center your_experience">STEEPING NOTES</h1>
        <h1 className="text-center">(Recommended Steeps)</h1>
      </div>
      <div className="row">.col-4</div>
    </div>
  );
}

export default ProductPage;
