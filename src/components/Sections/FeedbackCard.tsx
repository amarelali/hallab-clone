import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface IProps {
    name:string;
    description:string;
    index:number;
}
const FeedbackCard = ({index,name,description}: IProps) => {
  return (
    <div key={index}>
      <div className="flex flex-col p-2 italic font-sans">
        <FontAwesomeIcon
          icon={faQuoteLeft}
          className="w-fit text-primary rounded-r-none rounded-l-md float-start p-4 text-white bg-[#006648]"
          size="lg"
        />
        <div className="max-w-sm rounded shadow-lg flex flex-col gap-3 p-5 bg-white">
          <p className="text-xl font-normal !italic">{description}</p>
          <span className="text-base font-bold text-[#6C757D] font-mono">
            {name}
          </span>
        </div>
      </div>
    </div>
  );
};
export default FeedbackCard;
