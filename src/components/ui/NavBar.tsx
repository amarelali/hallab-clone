import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Select from "./Select";
import { useState } from "react";
import { socialMediaLinks, stores } from "../../data";

interface IProps {}
const NavBar = ({}: IProps) => {
  const navItems = [
    { label: "Home", link: "#" },
    { label: "Shop Online", link: "#" },
    { label: "Gift Ideas", link: "#" },
    { label: "Branch", link: "#" },
    { label: "Catering", link: "#" },
    { label: "Menus", link: "#" },
    { label: "Contact us", link: "#" },
  ];

  const [searchText, setSearchText] = useState<string>("");
  const [displaySearchInput, setDisplaySearchInput] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  return (
    <header style={{ backgroundColor: " #006648 ", color: "white" }}>
      <nav>
        <div className="w-5/6 m-auto">
          <div className="flex justify-between items-center">
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-400 focus:border-2 focus:border-gray-400 rounded-lg md:hidden "
              aria-controls="navbar-default"
              aria-expanded={`${isMenuOpen ? "true" : "false"}`}
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>

            <div className="flex flex-col-reverse m-auto w-fit items-center md:w-full md:flex-row md:justify-between md:items-end">
              <div className="social-media hidden md:flex gap-4">
                {socialMediaLinks.map(({ url, name, icon }, index) => (
                  <a
                    key={index}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    //**  noopener : make sure that next website is not able to access information about the previous website
                    //** noreferrer : "privacy" don't make the site visited know from when i come from
                    aria-label={name}
                  >
                    <FontAwesomeIcon icon={icon} size="1x" />
                  </a>
                ))}
              </div>
              <img src="assets/Lebanon-Store.png" className="logo" />
              <div className="md:w-40 flex justify-end">
                <Select data={stores}/>
              </div>
            </div>

            <a href="#" className="block md:hidden">
              <FontAwesomeIcon icon={faShoppingCart} /> <sup>0</sup>
            </a>
          </div>

          <hr className="my-3 hidden md:block" />
          <div className="flex justify-between gap-3 pb-3">
            <div
              id="navbar-default"
              className={`  ${isMenuOpen ? "" : "hidden"} md:flex w-full`}
            >
              <hr className="my-2 h-2 md:hidden" />
              <ul
                className={`gap-2 md:gap-4  w-full flex flex-col items-center md:flex-row md:w-auto`}
              >
                {navItems.map(({ link, label }, index) => (
                  <li key={index}>
                    <a href={link}>{label}</a>
                  </li>
                ))}
                <li className="block md:hidden">
                  <FontAwesomeIcon icon={faHeart} /> <sup>0</sup>
                </li>
                <li className=" block md:hidden">
                  <a href="#">Sign in</a>
                </li>
              </ul>
            </div>

            <ul className="flex gap-5 items-center">
              <li className="hidden md:flex">
                {displaySearchInput && (
                  <input
                    type="text"
                    className="rounded-sm text-black"
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                )}
                <a
                  href="#"
                  onClick={() => {
                    setDisplaySearchInput((prev) => !prev);
                  }}
                >
                  <FontAwesomeIcon icon={faSearch} />
                </a>
              </li>
              <li className="hidden md:flex">
                <a href="#" className="flex">
                  <FontAwesomeIcon icon={faHeart} /> <sup>0</sup>
                </a>
              </li>
              <li className="hidden md:flex">
                <a href="#" className="flex">
                  <FontAwesomeIcon icon={faShoppingCart} /> <sup>0</sup>
                </a>
              </li>
              <li className="hidden md:flex">
                <a href="#" className="text-nowrap">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
