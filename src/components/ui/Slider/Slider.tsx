import img1 from "../../../assets/imgs/carrousel/DAOU0137-updated.jpg";
import img2 from "../../../assets/imgs/carrousel/DAOU9590.jpg";
import { Carousel } from "react-responsive-carousel";
import { useEffect } from "react";
import "./Slider.css";
interface ICarouselData{
    img:string;
    title:string;
    description:string;
    linkTitle:string;
    url:string;
    key:number;
}
const Slider = () => {
  useEffect(() => {
    document.querySelector(".demo-carousel");
  }, []);
  const carouselData = [
    {img:img2,
        title: `Artistry in Action`,
        description: `
                Witness Hallab's Skilled Artisans Crafting Sweet Perfection
                `,
        linkTitle: `Start your journey`,
        url: `https://eliteacademy.eu/training-academy`,
      },
      {img:img1,
        title: `Hallab's Exquisite Handcrafted Treats
  `,
        description: ``,
        linkTitle: `Shop Now`,
        url: `https://eliteacademy.eu/training-academy`,
      },
      {img:img1,
        title: `Hallab's Exquisite Handcrafted Treats
  `,
        description: ``,
        linkTitle: `Shop Now`,
        url: `https://eliteacademy.eu/training-academy`,
      },
      {img:img1,
        title: `Hallab's Exquisite Handcrafted Treats
  `,
        description: ``,
        linkTitle: `Shop Now`,
        url: `https://eliteacademy.eu/training-academy`,
      },

  ];
  const carouselSkeletonData = ({img,title,description,linkTitle,url,key}:ICarouselData) => {
    return (
      <div className="relative" key={key}>
        <div className="image-container object-cover h-[70vh] md:h-[65vh]">
            <img src={img}  />
        </div>
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[55vh] lg:top-[20%] lg:left-14 lg:w-1/2 lg:h-[70%] lg:transform-none text-white">
          <div className="p-4 flex flex-col text-start justify-evenly h-full">
            <div className="text-4xl font-bold">{title}</div>
            <div>
              <p className="text-2xl">
               {description}
              </p>
            </div>
            <a href={url} className={"bg-[#006648] text-white w-fit px-3 py-2 rounded-md"}>
              {linkTitle}
            </a>
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
        //   showArrows={false}
          showStatus={false}
          animationHandler={"fade"}
        >
          {carouselData.map((element,index)=> carouselSkeletonData({...element,key:index}))}
        </Carousel>
      </div>
    </>
  );
};
export default Slider;