import img from "../../Assets/Team/Profile.jpg";
import "./Team.css";
import facebook from "../../Assets/Team/facebook.svg";
import instagram from "../../Assets/Team/instagram.svg";
import linkedin from "../../Assets/Team/linkedin.svg";

const Team = () => {
  return (
    <div className="image" id="team">
      {/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}

      <h1 id="Head" className="text-center text-grey">
        FESTIVAL SECRETARIES
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            <div className="card">
              <div className="contentTeam">
                <div className="imgBx">
                  <img src={img} alt="" srcset="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Web Developer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={linkedin} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 id="HeadDown" className="text-center text-grey">
        CO-COORDINATORS
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            <div className="card">
              <div className="contentTeam">
                <div className="imgBx">
                  <img src={img} alt="" srcset="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Web Developer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={linkedin} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 id="HeadDown" className="text-center text-grey">
        PR TEAM
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            <div className="card">
              <div className="contentTeam">
                <div className="imgBx">
                  <img src={img} alt="" srcset="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Web Developer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={linkedin} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <h1 id="HeadDown" className="text-center text-grey">
        TECH TEAM
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            <div className="card">
              <div className="contentTeam">
                <div className="imgBx">
                  <img src={img} alt="" srcset="" />
                </div>
                <div className="contentBx">
                  <h3>
                    Someone Famous
                    <br />
                    <span>Web Developer</span>
                  </h3>
                </div>
              </div>
              <ul className="sci">
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={facebook} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={instagram} alt="" />
                  </a>
                </li>
                <li>
                  <a href="#/">
                    <img className="svg w-[25px]" src={linkedin} alt="" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
