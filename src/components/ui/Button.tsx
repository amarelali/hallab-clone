interface IProps {
    url?: string;
    children: React.ReactNode;
    style?:string
}
const CustomButton= ({url="",children,style}: IProps) => {
  return (
    <a
    href={url}
    className={`bg-[#006648] text-white w-fit px-8 py-3 rounded-md ${style}`} //hover:bg-green-700 transition
  >
    {children}
  </a>
  );
};
export default CustomButton;