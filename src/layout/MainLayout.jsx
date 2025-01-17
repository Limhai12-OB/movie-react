import { Outlet } from "react-router";
import AppNavbar from "../components/AppNavBar";
import Footer from "../components/Footer";
import Card from "../components/SideCard";
// import { HomeInDe } from "../pages/Home";

export function MainLayout() {
  return (
    <>
      <AppNavbar />
      <div className="grid grid-cols-12">
        <div className="col-span-8">
          {/* <HomeInDe /> */}
          <Outlet />
        </div>
        <div className="col-span-4 mt-10">
          <Card />
        </div>
      </div>
      <Footer />
    </>
  );
}
