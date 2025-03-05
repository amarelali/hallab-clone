import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footer from "../../assets/footer.png";
import { socialMediaLinks } from "../../data";

interface IProps {}
const Footer = ({}: IProps) => {
  return (
    <footer className="bg-[#006648]">
      <section className=" py-16 text-white footer">
        <div className="container mx-auto w-[80%] flex flex-col md:flex-row items-center gap-8 p-6 justify-center">
          <div className="flex flex-col gap-9 md:flex-row md:gap-2">
            <div className="menu flex-1 flex flex-col gap-2">
              <span className="text-xl font-bold">CORPORATE</span>
              <ul className="list-none flex flex-col gap-3">
                <li className="italic">
                  <a href="/about-us">About us</a>
                </li>
                <li className="italic">
                  <a href="/franchise-opportunity">Franchise Opportunity</a>
                </li>
                <li className="italic">
                  <a href="/retail-fmcg">Retail & FMCG</a>
                </li>
                <li className="italic">
                  <a href="/careers">Careers</a>
                </li>
                <li className="italic">
                  <a href="/blog">Blog</a>
                </li>
              </ul>
            </div>
            <div className="menu flex-1 flex flex-col gap-2">
              <span className="text-xl font-bold">ONLINE SHOP</span>
              <ul className="list-none flex flex-col gap-3">
                <li className="italic">
                  <a href="/terms">Terms and Conditions</a>
                </li>
                <li className="italic">
                  <a href="/cookie-policy">Cookie Policy</a>
                </li>
                <li className="italic">
                  <a href="/privacy-policy">Privacy Policy</a>
                </li>
                <li className="italic">
                  <a href="/faq">FAQ</a>
                </li>
                <li className="italic">
                  <a href="/loyalty-program">Loyalty Program</a>
                </li>
              </ul>
            </div>
            <div className="menu flex-1 flex flex-col gap-3">
              <span className="text-xl font-bold">SUPPORT HOURS</span>
              <p>Monday - Sunday: 8:00 AM until 8:00 PM (GMT +2)</p>
              <button className="bg-white rounded-sm py-2 px-3 w-fit text-black">
                Contact us
              </button>
              <div className="social-media hidden md:flex gap-5">
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
                    <FontAwesomeIcon icon={icon} size="lg" />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <img
            src={footer}
            alt="Dish Image"
            className="w-full md:w-1/3 h-64 object-cover"
          />
        </div>
      </section>
      <section
        className="py-5 text-white footer"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.15)" }}
      >
        <div className="flex justify-center text-muted font-normal">
          <span>Copyright © 2025. All rights reserved.</span>
        </div>
      </section>
    </footer>
  );
};
export default Footer;
