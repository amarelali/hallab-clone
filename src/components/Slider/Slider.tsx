import img1 from "../../assets/carrousel/DAOU0137-updated.jpg";
import img2 from "../../assets/carrousel/DAOU9590.jpg";
import ramadanImg from "../../assets/carrousel/Hallab---Ramadan-Banner.jpg";
import video from "../../assets/carrousel/Hallab Corporate Video.mp4";
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import CustomButton from "../ui/Button";
interface ICarouselData {
  asset: string;
  title: string;
  description: string;
  linkTitle: string;
  url: string;
  type: "video" | "img";
}
const Slider = () => {
  const carouselData: ICarouselData[] = [
    {
      asset: video,
      title: `Artistry in Action`,
      description: `Witness Hallab's Skilled Artisans Crafting Sweet Perfection`,
      linkTitle: `Start your journey`,
      url: `/shop`,
      type: "video",
    },
    {
      asset: ramadanImg,
      title: `Ramadan 2025`,
      description: ``,
      linkTitle: `Shop Now`,
      url: `/ramadan`,
      type: "img",
    },
    {
      asset: img1,
      title: ``,
      description: `Hallab's Exquisite Handcrafted Treats`,
      linkTitle: `Shop Now`,
      url: `/shop`,
      type: "img",
    },
    {
      asset: img2,
      title: ``,
      description: `Hallab's Exquisite Handcrafted Treats`,
      linkTitle: `Shop Now`,
      url: `/shop`,
      type: "img",
    },
  ];
  const carouselSkeletonData = (
    {
      asset,
      title,
      description,
      linkTitle,
      url,

      type,
    }: ICarouselData,
    key: number
  ) => {
    const sliderContentDependOnType = () => {
      return type === "video" ? (
        <video
          controls
          muted
          loop
          autoPlay
          className="h-full w-full object-cover"
        >
          <source src={asset} type="video/mp4" />
        </video>
      ) : (
        <img src={asset} className="object-cover h-full" />
      );
    };

    return (
      <div className="relative h-[70vh] md:h-[65vh] w-full" key={key}>
        <div className="image-container">{sliderContentDependOnType()}</div>
        <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[55vh] lg:top-[20%] lg:left-14 lg:w-1/2 lg:h-[70%] lg:transform-none text-white">
          <div className="p-4 flex flex-col text-start justify-evenly h-full">
            <div className="text-5xl font-bold">{title}</div>
            <div>
              <p className="text-2xl">{description}</p>
            </div>
            <CustomButton url={url}>{linkTitle}</CustomButton>
          </div>
        </div>
      </div>
    );
  };
  return (
    <>
      <div className="w-full">
        <Carousel
          dynamicHeight={false}
          autoPlay
          transitionTime={500}
          showThumbs={false}
          infiniteLoop={true}
          showStatus={false}
          animationHandler={"fade"}
        >
          {carouselData.map((element, index) =>
            carouselSkeletonData({ ...element }, index)
          )}
        </Carousel>
      </div>
    </>
  );
};
export default Slider;
