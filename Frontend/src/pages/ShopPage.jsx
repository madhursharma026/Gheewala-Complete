import * as React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import product1 from '../content/images/product1.jpg'
import product2 from '../content/images/product2.jpg'
import ProductCardStyle from "../components/ProductCardStyle";
import shopPageTopBg from '../content/images/shopPageTopBg.jpg'

function ShopPage() {

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
    <>
      <img src={shopPageTopBg} alt="#ImgNotFound" className="img-fluid w-100" />
      <div className="container-xl py-5">
        <div className="row pb-5 px-lg-5">
          <div className="col-md-4 mt-3 py-3" style={{ background: "#EAEAEA" }}>
            <div className="row">
              <div className="col">
                <h6>FILTERS</h6>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <h6 className="text-danger">CLEAR ALL</h6>
              </div>
            </div>
            <hr />
            <input type="radio" />
            <span style={{ fontWeight: "500" }}>&ensp;BOYS</span>
            <br />
            <input type="radio" />
            <span style={{ fontWeight: "500" }}>&ensp;GIRLS</span>
            <hr />
            <div className="row">
              <div className="col">
                <h6>CATEGORIES</h6>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <h6><i class="fa fa-search"></i></h6>
              </div>
            </div>
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <hr />
            <div className="row">
              <div className="col">
                <h6>BRAND</h6>
              </div>
              <div className="col" style={{ textAlign: "right" }}>
                <h6>
                  <i class="fa fa-search"></i>
                </h6>
              </div>
            </div>
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
            <input type="checkbox" />
            <span style={{ fontWeight: "500" }}>&ensp;Dresses(156789)</span>
            <br />
          </div>
          <div className="col-md-4 pt-3">
            <ProductCardStyle
              productImg={product1}
              ratingQty="15"
              productName="Darjeeling Thurbo Spring Chinary Black"
              productDesc="A fresh vegetal $ fruity cup from Darjeeling"
            />
          </div>
          <div className="col-md-4 pt-3">
            <ProductCardStyle
              productImg={product2}
              ratingQty="15"
              productName="Darjeeling Thurbo Spring Chinary Black"
              productDesc="A fresh vegetal $ fruity cup from Darjeeling"
            />
          </div>
        </div>
        <h2 className="main_heading">First/Spring Flush</h2>
        <p style={{ fontSize: "14px" }}> In India, the first flush teas are plucked between March and April following the first light showers of late February. Since this period coincides with the spring season, these pluckings are also referred to as spring teas or Easter teas. More information about first flushes here.</p>
        <br />
        <p style={{ fontSize: "14px" }}>Spring teas are produced in just about every tea growing region of India, including Darjeeling, Assam, Kangra, Nepal and the Nilgiris. But it's Darjeeling’s first flush teas that really reigns supreme. Here, in the cold mountain air, tea plants grow slowly until the start of spring, which concentrates the flavors in the leaves turning them crisp and immensely fragrant.</p>
        <p style={{ fontSize: "14px" }}>
          <b>Indulge In The Season’s Finest</b>
          <br />
        </p>
        <p style={{ fontSize: "14px" }}>Spring brings with it the aroma of budding flowers, a welcome cool breeze, and the whisper of delicate tea leaves. Because the tea is harvested after a frost-filled winter, the leaves are in their tenderest form.</p>
        <p style={{ fontSize: "14px" }}>When brewed, these light emerald leaves offer a brighter and pleasant liquor with a distinctive floral aroma. When you take a sip of a spring tea, you enjoy an array of sophisticated flavors that range from a light freshness to a brisk astringency.</p>
        <p style={{ fontSize: "14px" }}>
          <b>Feel A Burst Of Energy</b>
          <br />
        </p>
        <p style={{ fontSize: "14px" }}>First flush teas are delicate in flavor and retain the crispness of the mountain air of the Himalayas. There is a wide choice of green, white, and black Darjeeling teas. You can choose from our extensive collection of 2022 first flush teas that includes prized moonlight white teas from estates like Castleton and Margaret’s Hope, classic black teas from estates like Jungpana and Goomtee, and the much sought after clonals.</p>
      </div>
    </>
  );
}

export default ShopPage;
