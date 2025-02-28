import NavBar from "../components/ui/NavBar";
import Slider from "../components/ui/Slider/Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface IProps {}
const Home = ({}: IProps) => {
  return (
    <>
      <NavBar />
      <Slider />
    </>
  );
};
export default Home;
