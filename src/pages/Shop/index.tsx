import { categories, currency, sortby, sweetsProducts } from "../../data";
import Select from "../../components/ui/Select";
import { faThLarge, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import CustomButton from "../../components/ui/Button";
import {
  faShoppingCart,
  // faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
interface IProps {}
const Shop = ({}: IProps) => {
  const [view, setView] = useState("grid");

  return (
    <section className="container mx-auto">
      <div className="w-full md:w-[90%] m-auto py-7 px-5 flex gap-5 h-fit">
        <div className="hidden md:block w-1/4 categories overflow-auto h-[99vh] sticky top-0">
          <h2 className="text-xl font-bold pb-2">Categories</h2>
          <ul>
            {categories.map(({ name }, index) => (
              <li className="py-1 text-base" key={index}>
                <div className="flex items-center group">
                  <input
                    checked={index === 0}
                    id={`category-${index}`}
                    type="radio"
                    name="category"
                    className="hidden peer"
                  />
                  <div className="w-5 h-5 rounded-full group-hover:border-2 group-hover:border-[#006648] peer-checked:border-[6px] peer-checked:border-[#006648] peer-checked:bg-white flex items-center justify-center">
                    <div className="w-2.7 h-2.7 bg-white rounded-full hidden peer-checked:block"></div>
                  </div>
                  <label
                    htmlFor={`category-${index}`}
                    className="ms-2 font-medium text-gray-900"
                  >
                    {name}
                  </label>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex-grow categories w-fit">
          <div className="flex flex-col gap-2 md:flex-row md:justify-between">
            <form className="w-full md:w-1/3">
              <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only"
              >
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="searchByCategories"
                  className="block w-full p-4 text-sm rounded-lg bg-[#e0ebe8] focus:border-[#e0ebe8] outline-[#80b3a4]"
                  placeholder="Search..."
                  required
                />
                <button className="absolute inset-y-0 end-0 flex items-center pe-5">
                  <svg
                    className="w-4 h-4 text-black"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </button>
              </div>
            </form>
            <Select
              data={currency}
              style="bg-[#e0ebe8] px-2 w-[150px] rounded-sm hidden md:block"
              optionsStyle={"w-[150px]"}
            ></Select>
            <div className="hidden md:flex items-center gap-1">
              <span>Sort by:</span>
              <Select
                data={sortby}
                style="bg-[#e0ebe8] px-4 rounded-sm h-full w-[170px]"
              ></Select>
            </div>
            <div className="flex flex-row">
              <label
                className={`bg-[#e0ebe8] flex m-0 md:m-auto p-4 px-6 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer hover:bg-[#d0d8d6] active:bg-[#c0c8c6] transition-all duration-100 ease-in ${
                  view === "grid" ? "border-black border-[.9px]" : ""
                }`}
              >
                <input
                  type="radio"
                  name="view"
                  value="grid"
                  className="hidden"
                  checked={view === "grid"}
                  onChange={() => setView("grid")}
                />
                <FontAwesomeIcon icon={faThLarge} />
              </label>
              <label
                className={`bg-[#e0ebe8] flex m-0 md:m-auto p-4 px-6 rounded-l-sm focus:outline-none focus:ring-2 focus:ring-black cursor-pointer hover:bg-[#d0d8d6] active:bg-[#c0c8c6] transition-all duration-100 ease-in ${
                  view === "list" ? "border-black border-[.9px]" : ""
                }`}
              >
                <input
                  type="radio"
                  name="view"
                  value="list"
                  className="hidden"
                  checked={view === "list"}
                  onChange={() => setView("list")}
                />
                <FontAwesomeIcon icon={faList} />
              </label>
              {/* lezm ykun fi open modal ll mobile... */}
            </div>
          </div>
          <div className="products flex flex-row flex-wrap gap-4">
            {sweetsProducts.map(
              ({ name, image, description, price, currency, url }) => (
                <div className="w-full md:w-[23%] bg-white border border-gray-200 rounded-lg shadow-sm mt-2">
                  <div className="relative h-[130px] group">
                    <img
                      className="rounded-t-lg w-full h-full object-cover"
                      src={`https://www.hallab.com.lb/${image}`}
                      alt=""
                    />
                    <div className="absolute bottom-0 flex justify-evenly w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CustomButton style="p-4 border border-[#006648] hover:border-[#00573d] hover:bg-[#00573d]">
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="text-white"
                        />
                      </CustomButton>
                      <CustomButton style="p-4 border border-[#006648] bg-white hover:border-[#006648] hover:bg-[#e6e5e5] hover:text-black group">
                        <FontAwesomeIcon
                          icon={faHeart}
                          className="text-[#006648] group-hover:text-black"
                        />
                      </CustomButton>
                    </div>
                  </div>
                  <div className="p-2">
                    <a href={`https://www.hallab.com.lb/${url}`}>
                      <h5 className="text-[#006648] mb-2 text-base font-normal tracking-tight hover:text-gray-900">
                        {name}
                      </h5>
                    </a>
                    <p className="mb-3 text-sm font-normal text-gray-700 line-clamp-2">
                      {description}
                    </p>
                    <p>
                      {currency} {price.toFixed(2)}
                    </p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Shop;
