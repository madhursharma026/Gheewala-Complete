import { Link, useNavigate } from "react-router-dom";
import headerLogo from "../content/images/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { Logout } from "../Redux/UpdatedEcommerceReducer";
import Dropdown from 'react-bootstrap/Dropdown';

import {
  HiHome,
  HiSearch,
  HiOutlineMenuAlt2,
  HiShoppingBag,
  HiUserCircle,
} from "react-icons/hi";

export default function Header() {

  const dispatch = useDispatch()
  const navigate = useNavigate();
  const CowGhee = useSelector(state => state.CowGhee)
  const BuffaloGhee = useSelector(state => state.BuffaloGhee)
  const gettingUserDetails = useSelector(state => state.UserDetail)
  const TotalProduct = CowGhee + BuffaloGhee

  function LogoutUser() {
    dispatch(Logout())
    navigate("/")
  }

  return (
    <>
      <div className="header_options_before_xl_scrn text-white">
        <nav class="navbar navbar-expand-xl bg-[#28341E] px-5">
          <div class="container-xxl">
            <Link className="navbar-brand" to="/">
              <img
                src={headerLogo}
                alt="#imgNotFound"
                width="120px"
                height="auto"
              />
            </Link>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/" style={{ fontSize: "14px" }}>
                    <b style={{ color: "#ffe74d" }}>HOME</b>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link"
                    to="/cow-Ghee"
                    style={{ fontSize: "14px" }}
                  >
                    <b style={{ color: "#ffe74d" }}>DESI COW GHEE</b>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link
                    class="nav-link "
                    to="/buffalo-Ghee"
                    style={{ fontSize: "14px" }}
                  >
                    <b style={{ color: "#ffe74d" }}>BUFFALO GHEE</b>
                  </Link>
                </li>
              </ul>
            </div>

            {/* <Link
              class="nav-link px-3"
              to="/login"
              style={{ fontSize: "14px" }}
            >
              <b>
                <div className="text-center"> */}
            {/* <HiUserCircle className="h-10 w-10 text-white" /> */}
            {
              (gettingUserDetails.length !== 0) ?
              <>
                <Dropdown>
                  <Dropdown.Toggle id="dropdown-basic" style={{ background: "transparent", border: "0", color: "white", fontSize: "14px" }}>
                    <b className="text-center">
                      <HiUserCircle className="h-10 w-10 text-white" style={{ marginLeft: "20px" }} />
                      <span>{gettingUserDetails[0].name}</span>
                    </b>
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {(gettingUserDetails[0].role === 'admin') ?
                      <>
                        <Dropdown.Item href="#/admin_page">Admin Controls</Dropdown.Item>
                        <Dropdown.Item onClick={() => LogoutUser()}>Logout</Dropdown.Item>
                      </>
                      :
                      <>
                        <Dropdown.Item href="#/dashboard">Dashboard</Dropdown.Item>
                        <Dropdown.Item href="#/my_order">My Order</Dropdown.Item>
                        <Dropdown.Item onClick={() => LogoutUser()}>Logout</Dropdown.Item>
                      </>
                    }
                  </Dropdown.Menu>
                </Dropdown>
                </>
                :
                <Link class="nav-link text-dark px-3" to="/login" style={{ fontSize: "14px" }}>
                  <b className="text-white">
                    <div className="text-center">
                    <HiUserCircle className="h-10 w-10 text-white" />
                    </div>
                    Login
                  </b>
                </Link>
            }
            {/* </div>
              </b>
            </Link> */}
            <Link
              class="nav-link px-3"
              to="/add_to_cart"
              style={{ fontSize: "14px" }}
            >
              <b>
                <div className="text-center">
                  <HiShoppingBag className="h-10 w-10 text-white " />
                  <span
                    className="rounded-full absolute -mt-2"
                    id="cart-value-id"
                  >
                    {TotalProduct}
                  </span>
                </div>
              </b>
            </Link>
          </div>
        </nav>
      </div>

      <div className="header_options_after_xl_scrn bg-[#28341E] text-center py-2">
        <div className="row">
          <div className="col pt-2 flex justify-center items-center">
            <button
              type="button"
              class="btn px-3 text-white header-links"
              style={{
                background: "transparent",
                marginTop: "-5px",
              }}
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
            >
              <HiOutlineMenuAlt2 className="h-7 w-7 text-white " />
            </button>
          </div>
          <div className="col flex justify-center items-center">
            <Link to="/">
              <HiHome className="h-7 w-7 text-white" />
            </Link>
          </div>
          <div className="col flex justify-center items-center">
            <Link to="#">
              <HiSearch className="h-7 w-7 text-white " />
            </Link>
          </div>
          <div className="col flex justify-center items-center">
            <Link to="/add_to_cart">
              <HiShoppingBag className="h-7 w-7 text-white " />
              <span className="rounded-full absolute -mt-2" id="cart-value-id">
                {TotalProduct}
              </span>
            </Link>
          </div>
          <div className="col flex justify-center items-center">
            <div class="dropdown">
              <button
                class="btn text-light"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ border: "0" }}
              >
                <HiUserCircle className="h-7 w-7 text-white " />
              </button>
              <ul class="dropdown-menu ">
                <li>
                  <Link class="dropdown-item" to="/dashboard">
                    <i className="fa fa-user"></i> My Profile
                  </Link>
                </li>
                <li>
                  <Link class="dropdown-item" to="/my_order">
                    <i className="fa fa-shopping-cart"></i> My Orders
                  </Link>
                </li>
                <li class="dropdown-item" onClick={() => LogoutUser()}>
                  {/* <Link to="/my_order"> */}
                  <i className="fa fa-shopping-cart"></i> Logout
                  {/* </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          class="offcanvas offcanvas-start w-100"
          tabindex="-1"
          id="offcanvasExample"
          aria-labelledby="offcanvasExampleLabel"
        >
          <div
            class="offcanvas-header"
            style={{ background: "#28341E", height: "70px" }}
          >
            <div class="offcanvas-title" id="offcanvasExampleLabel">
              <div className="row text-light">
                <div className="col-2">
                  <i
                    class="fa fa-user-circle-o"
                    style={{ fontSize: "40px" }}
                  ></i>
                </div>
                <div className="col-10">
                  <h6>
                    Welcome! <br />
                    <Link
                      to="/login"
                      style={{
                        fontSize: "14px",
                        textDecoration: "none",
                        color: "white",
                      }}
                    >
                      Login/Signup
                    </Link>
                  </h6>
                </div>
              </div>
            </div>
            <h6
              className="text-light p-2"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              style={{ cursor: "pointer" }}
            >
              <i class="fa fa-close"></i>
            </h6>
          </div>
          <Link
            to="/"
            className="pt-3 px-3"
            style={{
              color: "black",
              textDecoration: "none",
              textAlign: "left",
            }}
          >
            <b>HOME</b>
          </Link>
          <hr className="p-0" />
          <Link
            to="/"
            className="px-3"
            style={{
              color: "black",
              textDecoration: "none",
              textAlign: "left",
            }}
          >
            <b>PRODUCTS</b>
          </Link>
          <hr className="p-0" />
          <Link
            to="/"
            className="px-3"
            style={{
              color: "black",
              textDecoration: "none",
              textAlign: "left",
            }}
          >
            <b>CONTACT US</b>
          </Link>
        </div>
      </div>
    </>
  );
}
