import { Outlet } from "react-router-dom";
import Footer from "../components/ui/Footer";
import NavBar from "../components/ui/NavBar";

interface IProps {}
const Layout = ({}: IProps) => {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};
export default Layout;
