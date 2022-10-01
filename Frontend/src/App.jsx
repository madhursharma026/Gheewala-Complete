import { HashRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import "./content/css/App.css";
import "./content/css/Extended.css";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./pages/productPage";
import NewProductPageOne from "./pages/NewProductPageOne";
import NewProductPageTwo from "./pages/NewProductPageTwo";
import AddToCart from "./pages/AddToCart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MyProfile from "./pages/DashBoardComponent/MyProfile";
import MyOrder from "./pages/DashBoardComponent/MyOrder";
import ResetPassword from "./pages/DashBoardComponent/ResetPassword";
import EditProfile from "./pages/DashBoardComponent/EditProfile";
import NewAddress from "./pages/DashBoardComponent/NewAddress";
import Admin from "./pages/Admin";
import AdminControls from "./pages/AdminControls";
import CategoryControls from "./pages/AdminControlsComponent/CategoryControl";
import ProductControls from "./pages/AdminControlsComponent/ProductControls";
import CustomerControls from "./pages/AdminControlsComponent/CustomerControls";
import OrderControls from "./pages/AdminControlsComponent/OrderControl";
import EditCategory from "./pages/AdminControlsComponent/EditCategory";
import AddCategory from "./pages/AdminControlsComponent/AddCategory";
import AddProduct from "./pages/AdminControlsComponent/AddProduct";
import EditProduct from "./pages/AdminControlsComponent/EditProduct";
import Admin2 from "./pages/Admin2";
import AdminControls2 from "./pages/AdminControls2";
// import ResetPassword from "../../ecommerce/src/pages/DashBoardComponent/ResetPassword";
// import EditProfile from "../../ecommerce/src/pages/DashBoardComponent/EditProfile";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            path="/admin_page2"
            element={
              <>
                <Admin />
                <title>Admin Page</title>
              </>
            }
          />
          <Route
            path="/admin_page"
            element={
              <>
                <Admin2 />
                <title>Admin Page</title>
              </>
            }
          />
          <Route path="/adminControls/category_details" element={<><AdminControls2 x={<CategoryControls />} /><title>Admin Dashboard- Category Controls</title></>} />
          <Route path="/adminControls/add_category" element={<><AdminControls2 x={<AddCategory />} /><title>Admin Dashboard- Add Category Controls</title></>} />
          <Route path="/adminControls/category_details/edit/:id" element={<><AdminControls2 x={<EditCategory />} /><title>Admin Dashboard- Edit Category Controls</title></>} />
          <Route path="/adminControls/product_details" element={<><AdminControls2 x={<ProductControls />} /><title>Admin Dashboard- Product Controls</title></>} />
          <Route path="/adminControls/add_product" element={<><AdminControls2 x={<AddProduct />} /><title>Admin Dashboard- Add Product Controls</title></>} />
          <Route path="/adminControls/product_details/edit/:id" element={<><AdminControls2 x={<EditProduct />} /><title>Admin Dashboard- Edit Product Controls</title></>} />
          <Route path="/adminControls/customer_details" element={<><AdminControls2 x={<CustomerControls />} /><title>Admin Dashboard- Customer Controls</title></>} />
          <Route path="/adminControls/order_details" element={<><AdminControls2 x={<OrderControls />} /><title>Admin Dashboard- Order Controls</title></>} />
          <Route
            index
            element={
              <>
                <Home />{" "}
                <title>
                  Ghee Wala: Buy Delicious Indian Teas Online - Delivered Fresh
                  &ndash; Ghee Wala IN
                </title>
              </>
            }
          />
          <Route
            path="/shop_page"
            element={
              <>
                <ShopPage />{" "}
                <title>
                  Buy First Flush Spring Darjeeling Tea online from Ghee Wala.
                  Shop First Flush Spring Tea online &amp; get it shipped,
                  straight from the source. Enjoy a great cup of Tea.
                </title>
              </>
            }
          />
          <Route
            path="/cow-ghee"
            element={
              <>
                <NewProductPageOne />{" "}
                <title>
                  Buy First Flush Spring Darjeeling Tea online from Ghee Wala.
                  Shop First Flush Spring Tea online &amp; get it shipped,
                  straight from the source. Enjoy a great cup of Tea.
                </title>
              </>
            }
          />
          <Route
            path="/buffalo-ghee"
            element={
              <>
                <NewProductPageTwo />{" "}
                <title>
                  Buy First Flush Spring Darjeeling Tea online from Ghee Wala.
                  Shop First Flush Spring Tea online &amp; get it shipped,
                  straight from the source. Enjoy a great cup of Tea.
                </title>
              </>
            }
          />
          <Route
            path="/old_product_page"
            element={
              <>
                <ProductPage />{" "}
                <title>
                  Buy First Flush Spring Darjeeling Tea online from Ghee Wala.
                  Shop First Flush Spring Tea online &amp; get it shipped,
                  straight from the source. Enjoy a great cup of Tea.
                </title>
              </>
            }
          />
          <Route
            path="/add_to_cart"
            element={
              <>
                <AddToCart />{" "}
                <title>
                  Buy First Flush Spring Darjeeling Tea online from Ghee Wala.
                  Shop First Flush Spring Tea online &amp; get it shipped,
                  straight from the source. Enjoy a great cup of Tea.
                </title>
              </>
            }
          />
          <Route path="/dashboard" element={<><Dashboard x={<MyProfile />} /><title>Customer Dashboard- My Profile</title></>} />
          <Route path="/reset_password" element={<><Dashboard x={<ResetPassword />} /><title>Customer Dashboard- Reset Password</title></>} />
          <Route path="/edit_profile" element={<><Dashboard x={<EditProfile />} /><title>Customer Dashboard- Edit Profile</title></>} />
          <Route path="/my_order" element={<><Dashboard x={<MyOrder />} /><title>Customer Dashboard- My Order</title></>} />
          {/* <Route path="/my_address" element={<><Dashboard x={<MyAddress />} /><title>Customer Dashboard- My Address</title></>} /> */}
          <Route path="/add_new_address" element={<><Dashboard x={<NewAddress />} /><title>Customer Dashboard- Add New Address</title></>} />
          <Route
            path="*"
            element={
              <>
                <NoPage /> <title>Error 404</title>
              </>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <>
              <Login />
              <title>Log In- Ghee Wala IN</title>
            </>
          }
        />
        <Route
          path="/signup"
          element={
            <>
              <Signup />
              <title>Enter Code</title>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
