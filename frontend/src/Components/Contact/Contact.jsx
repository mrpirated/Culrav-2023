import "./Contact.css";
import facebook from "../../Assets/Footer/facebook.svg";
import instagram from "../../Assets/Footer/instagram.svg";
import twitter from "../../Assets/Footer/twitter.svg";
import linkedin from "../../Assets/Footer/linkedin.svg";

const Contact = () => {
  return (
    <div className="bodyContact" id="contact">
      <footer className="w-full">
        <div class="wrapper">
          <div class="words">
            <span>Hello - こんにちは - Konnichiwa</span>
            <span>Welcome - いらっしゃいませ - Irasshaimase</span>
            <span>See you - またね - Mata ne</span>
            <span>Goodbye - さようなら - Sayonara</span>
            <span>Hello - こんにちは - Konnichiwa</span>
          </div>
        </div>
        <ul className="social_icon">
          <li>
            <a href="#/">
              <img className="w-[35px]" src={facebook} alt="" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img className="w-[35px]" src={instagram} alt="" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img className="w-[35px]" src={twitter} alt="" />
            </a>
          </li>
          <li>
            <a href="#/">
              <img className="w-[35px]" src={linkedin} alt="" />
            </a>
          </li>
        </ul>
        <ul className="menu">
          <li>
            <a href="/team">MEET THE TEAM</a>
          </li>
        </ul>
        <div
          id="contact-details"
          className="p-[15px] flex flex-col justify-center items-center"
        >
          <a href="http://www.mnnit.ac.in/">
            <div id="college" className="mb-[8px]">
              MNNIT ALLAHABAD, TELIYARGANJ, PRAYAGRAJ , INDIA
            </div>
          </a>
          <div className="mb-[8px]">
            CONTACT US : +919695115107, +917799930206
          </div>
          <div>E-MAIL ID: culrav2023@gmail.com</div>
        </div>
        <p id="copyright" className="">
          COPYRIGHT &copy; CULRAV 2023 | ALL RIGHTS RESERVED
        </p>
      </footer>
    </div>
  );
};

export default Contact;
