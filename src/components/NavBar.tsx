import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart,faSearch, faHeart } from "@fortawesome/free-solid-svg-icons"; // ✅ Correct import

import Select from "./ui/Select";
import { useState } from "react";

interface IProps {}
const NavBar = ({}: IProps) => {
  const [searchText, setSearchText] = useState<string>("");
  const [displaySearchInput, setDisplaySearchInput] = useState<boolean>(false);
  return (
    <header style={{ backgroundColor: " #006648 ", color: "white" }}>
      <nav>
        <div className="w-5/6 m-auto">
          <div className="flex justify-between items-end">
            <div className="social-media flex gap-4">
              <FontAwesomeIcon icon={faFacebookF} size="1x" />
              <FontAwesomeIcon icon={faInstagram} size="1x" />
              <FontAwesomeIcon icon={faXTwitter} size="1x" />
              <FontAwesomeIcon icon={faLinkedin} size="1x" />
            </div>
            <img src="assets/Lebanon-Store.png" className="logo" />
            <div className="w-40 flex justify-end">
              <Select />
            </div>
          </div>
          <hr className="my-2 pb-2" />
          <div className="flex justify-between">
          <ul className="flex gap-4 pb-2">
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop Online</a></li>
            <li><a href="#">Gift Ideas</a></li>
            <li><a href="#">Branch</a></li>
            <li><a href="#">Catering</a></li>
            <li><a href="#">Menus</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>

          <ul className="flex gap-5 pb-2 items-center">

            <li> {displaySearchInput && <input type="text" className="rounded-sm text-black" value={searchText} onChange={(e)=> setSearchText(e.target.value)} />} <a href="#" onClick={()=>{ setDisplaySearchInput((prev)=> !prev)}}> <FontAwesomeIcon icon={faSearch} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faHeart} /> <sup>0</sup></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /> <sup>0</sup></a></li>
            <li><a href="#">Sign in</a></li>
          </ul>

          </div>
        </div>
      </nav>
    </header>
  );
};
export default NavBar;
