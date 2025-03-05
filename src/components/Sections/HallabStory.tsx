import CustomButton from "../ui/Button";

const StatItem = ({ value, label }: { value: string; label: string }) => (
  <div className="flex flex-col flex-1 items-center">
    <span className="text-4xl md:text-6xl">{value}</span>
    <p>{label}</p>
  </div>
);

const HallabStory = ({}: IProps) => {
  return (
    <section className="container mx-auto">
      <div className="w-full md:w-[75%] m-auto text-center p-5 flex flex-col gap-4">
        <h4 className="text-4xl md:text-6xl font-bold">Hallab Story</h4>
        <div className="flex items-center flex-col w-full md:w-[75%] m-auto gap-4">
          <p
            className="text-justify"
            style={{ color: "rgb(142, 142, 142)", fontSize: "15px" }}
          >
            Since 1881, and originating from the ancestral Lebanese city of
            Tripoli, Hallab 1881 has been a pioneer in the world of Lebanese
            sweets. Today, “Kasr El Helou” is considered one of Tripoli’s most
            renowned landmarks, visited by thousands of people from all parts of
            the globe.
          </p>
          <CustomButton> {"Know More"}</CustomButton>
        </div>
        <div className="flex flex-col gap-3 md:flex-row md:justify-between text-[#006648] pb-3">
          <StatItem value="142" label="Years of Experience" />
          <StatItem value="18" label="Branches" />
          <StatItem value="675" label="Employees" />
        </div>
      </div>
    </section>
  );
};

export default HallabStory;
