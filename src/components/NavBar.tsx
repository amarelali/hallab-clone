import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faShoppingCart,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons"; 

import Select from "./ui/Select";
import { useState } from "react";

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
  const socialMediaLinks = [
    { icon: faFacebookF, url: "https://www.facebook.com", name: "Facebook" },
    { icon: faInstagram, url: "https://www.instagram.com", name: "Instagram" },
    { icon: faXTwitter, url: "https://twitter.com", name: "Twitter" },
    { icon: faLinkedin, url: "https://www.linkedin.com", name: "LinkedIn" },
  ];
  const [searchText, setSearchText] = useState<string>("");
  const [displaySearchInput, setDisplaySearchInput] = useState<boolean>(false);
  return (
    <header style={{ backgroundColor: " #006648 ", color: "white" }}>
      <nav>
        <div className="w-5/6 m-auto">
          <div className="flex justify-between items-end">
            <div className="social-media flex gap-4">
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
            <div className="w-40 flex justify-end">
              <Select />
            </div>
          </div>
          <hr className="my-3 pb-3" />
          <div className="flex justify-between gap-3">
            <ul className="flex gap-4 ">
              {navItems.map(({ link, label }, index) => (
                <li key={index}>
                  <a href={link}>{label}</a>
                </li>
              ))}
            </ul>
            <ul className="flex gap-5 items-center pb-3">
              <li>
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
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faHeart} /> <sup>0</sup>
                </a>
              </li>
              <li>
                <a href="#">
                  <FontAwesomeIcon icon={faShoppingCart} /> <sup>0</sup>
                </a>
              </li>
              <li>
                <a href="#">Sign in</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
