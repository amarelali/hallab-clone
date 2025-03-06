import CustomButton from "../ui/Button";

const CateringSection = ({}: IProps) => {
  return (
    <section >
      <div className="parallax2 relative text-white text-center">
        <div className="container mx-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 flex flex-col items-center gap-3 z-10 w-[90%] m-auto">
          <span className="text-3xl md:text-6xl font-bold">
            Experience our Ultimate Catering Service
          </span>
          <p className="text-lg md:text-xl">
            Indulge in a savory journey with our catering service that will
            leave your guests wanting more.
          </p>
          <CustomButton url="/contactus">Contact us</CustomButton>
        </div>
      </div>
    </section>
  );
};

export default CateringSection;
