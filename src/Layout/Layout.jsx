import { Outlet } from "react-router-dom";
import Navigation from "../Components/Navigation";

const Layout = () => {
  return (
    <div className="font-Poppins">
      <div className="absolute w-full">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};

export default Layout;
