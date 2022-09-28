import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="main-layout position-relative">
      <div className="position-fixed w-100" style={{ zIndex: 55 }}>
        <Header />
      </div>
      <div style={{ margin: "0 0" }}>
        <Outlet />
        <Footer />
      </div>
    </div>
  );
}
