import NavBar from "../components/ui/NavBar";
import BannerSlider from "../components/Slider/Slider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";
import img4 from "../assets/Lunch_Pic.jpg";
import CateringSection from "../components/Sections/CateringSection";
import HallabStory from "../components/Sections/HallabStory";
import Slider from "react-slick";
import { feedbacks, Hallabproducts } from "../data";
import Footer from "../components/ui/Footer";
import FeedbackCard from "../components/Sections/FeedbackSection/FeedbackCard";
import CustomButton from "../components/ui/Button";
import { settings, settingsFeedbacks } from "../components/Slider/settings";
import "../App.css";

const products = [
  {
    img: img1,
    title: "The Finest Ingredients",
    description:
      "We meticulously select and source the finest ingredients from around the world, ensuring our delectable sweets are crafted with exceptional flavors and uncompromising taste.",
  },
  {
    img: img2,
    title: "Commitment to Quality",
    description:
      "Every bite of a Hallab sweet is a testament to our commitment to quality. Our attention to detail is evident in the delicate textures and complex flavors of our products.",
  },
  {
    img: img3,
    title: "Thoughtful Treats",
    description:
      "We take pride in offering a variety of treats that are thoughtfully made with zero added sugar. Our sweets allow you to savor every bite without compromising on taste or your health-conscious choices.",
  },
];

const ProductCard = ({
  img,
  title,
  description,
}: {
  img: string;
  title: string;
  description: string;
}) => (
  <div className="flex flex-col md:flex-1 items-center text-center">
    <div className="flex flex-col items-center gap-3 m-auto w-[95%] h-full">
      <img src={img} className="w-[35%] md:w-[25%]" alt={title} />
      <div className="flex flex-col flex-grow justify-between">
        <span className="text-2xl md:text-3xl font-bold">{title}</span>
        <p className="text-center text-base text-gray-500">{description}</p>
      </div>
    </div>
  </div>
);

interface IProps {}
const Home = ({}: IProps) => {
  return (
    <>
      <BannerSlider />
      <HallabStory />
      <section>
        <div className="parallax1"></div>
      </section>
      <section className="container mx-auto">
        <div className="w-full md:w-[90%] m-auto text-center py-16 px-5 flex flex-col gap-5">
          <h4 className="text-3xl md:text-6xl font-bold">
            Recently Viewed Products
          </h4>
          <h4 className="text-3xl md:text-6xl font-bold">Ingredients Matter</h4>
          <div className="flex flex-col gap-8 md:flex-row md:justify-between">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </section>
      <CateringSection />
      <div className="container mx-auto giftIdeas flex flex-col gap-14 w-full md:w-[80%] pt-24">
        <h4 className="text-4xl md:text-6xl font-bold text-center">
          Gift Ideas
        </h4>
        <Slider {...settings} arrows>
          {Hallabproducts.map(({ image, name, price }, index) => (
            <div className="p-2" key={index}>
              <div className="rounded shadow-lg card-body relative text-center">
                <div className="w-[50%] md:w-[70%] absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/3 md:-translate-y-1/3">
                  <img
                    src={`https://www.hallab.com.lb/${image}`}
                    alt="Product"
                    className="rounded-full overflow-visible object-contain"
                  />
                </div>
                <div className="px-6 pb-2 pt-32">
                  <div className=" text-xl mb-2 h-24">{name}</div>
                  <p className="text-gray-700 text-xl font-bold">
                    USD {price.toFixed(2)}
                  </p>
                </div>
                <div className="px-6 pt-1 pb-3 flex justify-center">
                  <CustomButton>{"View Product"}</CustomButton>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        <div className="px-6 pt-20 pb-3 flex justify-center">
          <CustomButton url="/shop">{"View More"}</CustomButton>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 p-6 justify-center">
        <img
          src={img4}
          alt="Dish Image"
          className="w-full md:w-1/3 h-64 object-cover"
        />
        <div className="w-full md:w-1/2 md:text-left">
          <h4 className="text-2xl md:text-4xl font-bold">
            Experience Authentic Flavors with our Daily Dish
          </h4>

          <div className="flex flex-col m-auto  md:items-start w-full gap-4 mt-4">
            <p className="text-gray-500 text-sm text-justify">
              From savory stews to flavorful rice dishes and more. Our dishes
              are carefully crafted to showcase the rich and diverse flavors of
              Middle Eastern cuisine, ensuring that every bite is a culinary
              adventure. Whether you're looking to try something new or simply
              crave a taste of home, our daily dish is the perfect choice.
            </p>
            <CustomButton url="/about">Discover More</CustomButton>
          </div>
        </div>
      </div>

      <section className="container mx-auto p-5"></section>
      <section style={{ backgroundColor: "rgb(244, 244, 244)" }}>
        <div className="feedbacks container mx-auto  w-[80%] py-16">
          <Slider {...settingsFeedbacks} autoplay>
            {feedbacks.map(({ name, description }, index) => (
              <FeedbackCard
                name={name}
                description={description}
                index={index}
              ></FeedbackCard>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};
export default Home;
