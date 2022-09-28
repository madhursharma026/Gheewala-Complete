import { Link } from "react-router-dom";
import headerLogo from "../content/images/logo.png";
import { FaInstagram, FaFacebook, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="px-10 md:px-28 py-10 bg-[#28341E] text-white">
        <div className="row">
          <div style={{ width: "150px" }}>
            <img src={headerLogo} alt="logo" className="w-100" />
          </div>
          <p className="texts mt-4 max-w-310">
            GheeWala was founded in 2001 with the aim of introducing an organic
            lifestyle to the world. Started with mere 5-6 cows, today, we have
            more than 450 Cows at our certified organic farm spread over 500+
            acres. All our products are made by following organic farming and
            manufacturing practices ensuring no harm is provided to the
            environment and your health.
          </p>
        </div>
        <div className="row pt-md-5">
          <div className="option_after_md_scrn my-4">
            <h5 className="">
              Take an <span className="text-[#ffe74d]">extra 10%</span> off your
              order
            </h5>
            <div class="input-group mb-3 mt-3">
              <input
                type="text"
                class="form-control"
                placeholder="Your Email"
                aria-describedby="button-addon2"
              />
              <button
                class="btn text-white border-white"
                type="button"
                id="button-addon2"
              >
                Get Promo
              </button>
            </div>
            <p style={{ fontSize: "10px" }}>
              We'll also send you delicious recipes, product updates, and more.
            </p>
          </div>

          <div className="col-6 col-md-4 col-md col-lg pb-5 footer-links">
            <h5 className="mb-3">Region</h5>
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Contact Us
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Map
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Form
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Contact Details
            </Link>
            <br />
          </div>
          <div className="col-6 col-md-4 col-md col-lg pb-5 footer-links">
            <h5 className="mb-3">Type</h5>
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Privacy Policy
            </Link>
            <br />
            <Link to="/" style={{ textDecoration: "none", color: "#808080" }}>
              Terms and Service
            </Link>
            <br />
          </div>
          <div className="col-4 col-lg pb-5">
            <h5 className="mb-2">Follow us</h5>
            <div className="d-flex gap-2">
              <a href="/" className="pe-auto">
                <FaFacebook className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
              </a>
              <a href="/" className="pe-auto">
                <FaInstagram className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
              </a>
              <a href="/" className="pe-auto">
                <FaTwitter className="text-2xl md:text-5xl hover:text-[#ffe74d]" />
              </a>
            </div>
            <div className="option_before_md_scrn">
              <h5 className="py-3">
                Take an <span className="text-[#ffe74d]">extra 10%</span> off
                your order
              </h5>
              <div class="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                  aria-describedby="button-addon2"
                />
                <button className="bg-[#28341E] text-[#ffe74d] px-3 border-y-2 border-r-2 border-white rounded-lg">
                  Get Promo
                </button>
              </div>
              <p style={{ fontSize: "10px" }}>
                We'll also send you delicious recipes, product updates, and
                more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
