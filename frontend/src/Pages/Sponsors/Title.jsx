import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
// import getImagesAPI from "../../api/getImageAPI";
// import Card from "./Card";
import ProffCard from "./ProffCard";

import imgDrishti from "../Sponsors/Assets/Drishti.png";
import imgBaroda from "../Sponsors/Assets/Baroda.png";
import imgShashwat from "../Sponsors/Assets/Shashwat.jpg";
import imgMadeEasy from "../Sponsors/Assets/MadeEasy.jpeg";
import imgIITD from "../Sponsors/Assets/IITD.png";
import imgIIC from "../Sponsors/Assets/IIC.png";
import imgRaj from "../Sponsors/Assets/Raj.jpg";
import imgVLCC from "../Sponsors/Assets/VLCC.jpeg";
import imgCheese from "../Sponsors/Assets/Cheese.png";
import imgBean from "../Sponsors/Assets/Bean.jpg";
import imgCafe96 from "../Sponsors/Assets/Cafe96.webp";
import imgChinaBox from "../Sponsors/Assets/chinabox.png";
import imgSouthHut from "../Sponsors/Assets/SouthHut.jpg";
import imgMomo from "../Sponsors/Assets/Momo.jpg";
import imgMood from "../Sponsors/Assets/MoodFreshers.jpg";
import imgAlBaik from "../Sponsors/Assets/AlBaik.jpg";
import imgGo4Food from "../Sponsors/Assets/Go4Food.jpg";
import imgKCC from "../Sponsors/Assets/KCC.jpg";
import imgAbhiGupta from "../Sponsors/Assets/AbhiGupta.jpg";
import imgBTS from "../Sponsors/Assets/BTS.jpg";
import imgBarbeque from "../Sponsors/Assets/Barbeque.jpg";
import imgCola from "../Sponsors/Assets/CocaCola.png";
import imgAmul from "../Sponsors/Assets/Amul.png";
import imgVarun from "../Sponsors/Assets/Varun.png";
import imgRasoi from "../Sponsors/Assets/Rasoi.jpg";
import imgIcePops from "../Sponsors/Assets/IcePops.jpeg";
import imgTravel from "../Sponsors/Assets/Travel.png";
import imgPress from "../Sponsors/Assets/Press.jpeg";
import imgRadio from "../Sponsors/Assets/Radio.jpg";
import imgSafety from "../Sponsors/Assets/Safety.png";
import imgMHM from "../Sponsors/Assets/MHM.png";
import imgPronite from "../Sponsors/Assets/Pronite.png";
import imgShring from "../Sponsors/Assets/Shring.jpg";
import imgAnunaad from "../Sponsors/Assets/Anunaad1.jpg";
import imgAnunaad2 from "../Sponsors/Assets/Anunaad2.jpg";
import imgTattoo from "../Sponsors/Assets/Tattoo.jpg";
import imgPreGrad from "../Sponsors/Assets/Pregrad.png";

const Title = () => {
  // const [organizingTeam, setOrganizinTeam] = useState([]);
  // useEffect(() => {
  //   getOrganizingTeamAPI().then((response) => {
  //     setOrganizinTeam(response.data);
  //   });
  // }, []);
  const proffData = [
    {
      name: "DRISHTI IAS",
      post: "TITLE SPONSOR",
      imageUrl: imgDrishti,
    },
    {
      name: "BANK OF BARODA",
      post: "ASSOCIATE SPONSOR",
      imageUrl: imgBaroda,
    },
    {
      name: "Shashwat Cables",
      post: "CONNECTION PARTNER",
      imageUrl: imgShashwat,
    },
    {
      name: "Made Easy",
      post: "Innovation Partner",
      imageUrl: imgMadeEasy,
    },
    {
      name: "IIT Delhi",
      post: "Innovation Partner",
      imageUrl: imgIITD,
    },
    {
      name: "IIC",
      post: "Innovation Partner",
      imageUrl: imgIIC,
    },
    {
      name: "Rajshree’s Vanity and Salon",
      post: "Fashion Partner",
      imageUrl: imgRaj,
    },
    {
      name: "VLCC",
      post: "Fashion Partner",
      imageUrl: imgVLCC,
    },

    {
      name: "Cheezoholic",
      post: "Food Partner",
      imageUrl: imgCheese,
    },
    {
      name: "Bean Here",
      post: "Food Partner",
      imageUrl: imgBean,
    },
    {
      name: "CAFE '96",
      post: "Food Partner",
      imageUrl: imgCafe96,
    },
    {
      name: "ChinaBox",
      post: "Food Partner",
      imageUrl: imgChinaBox,
    },
    {
      name: "South Hut",
      post: "Food Partner",
      imageUrl: imgSouthHut,
    },
    {
      name: "Momo Lover's",
      post: "Food Partner",
      imageUrl: imgMomo,
    },
    {
      name: "Mood Fresher",
      post: "Food Partner",
      imageUrl: imgMood,
    },
    {
      name: "Al Baik",
      post: "Food Partner",
      imageUrl: imgAlBaik,
    },
    {
      name: "Go 4 Food",
      post: "Food Partner",
      imageUrl: imgGo4Food,
    },
    {
      name: "KCC",
      post: "Food Partner",
      imageUrl: imgKCC,
    },
    {
      name: "Abhi Gupta Foods",
      post: "Food Partner",
      imageUrl: imgAbhiGupta,
    },
    {
      name: "BTS CAFE",
      post: "Food Partner",
      imageUrl: imgBTS,
    },
    {
      name: "Barbeque Nation",
      post: "Barbeque Partner",
      imageUrl: imgBarbeque,
    },
    {
      name: "Coca Cola",
      post: "BEVERAGE PARTNER",
      imageUrl: imgCola,
    },
    {
      name: "Amul",
      post: "BEVERAGE PARTNER",
      imageUrl: imgAmul,
    },
    {
      name: "Varun Beverages",
      post: "BEVERAGE PARTNER",
      imageUrl: imgVarun,
    },
    {
      name: "Aangan Rasoi",
      post: "Beverage Partner",
      imageUrl: imgRasoi,
    },
    {
      name: "Skippi Ice Pops",
      post: "REFRESHMENT PARTNER",
      imageUrl: imgIcePops,
    },
    {
      name: "Easemytrip",
      post: "Travel Partner",
      imageUrl: imgTravel,
    },
    {
      name: "IIC",
      post: "Innovation Partner",
      imageUrl: imgIIC,
    },
    {
      name: "Dainik Jagran",
      post: "Press Partner",
      imageUrl: imgPress,
    },
    {
      name: "RedFm",
      post: "Radio Partner",
      imageUrl: imgRadio,
    },

    {
      name: "Sirona Hygiene",
      post: "Hygiene Safety Partner",
      imageUrl: imgSafety,
    },
    {
      name: "MHM",
      post: "Media Partner",
      imageUrl: imgMHM,
    },
    {
      name: "REALME",
      post: "Pronite PARTNER",
      imageUrl: imgPronite,
    },
    {
      name: "SHRING SOLUTION ",
      post: "Event Manager Partner",
      imageUrl: imgShring,
    },
    {
      name: "Rhythm Exports",
      post: "ANUNAAD EVENT SPONSOR ",
      imageUrl: imgAnunaad,
    },
    {
      name: "Octave",
      post: "ANUNAAD EVENT SPONSOR ",
      imageUrl: imgAnunaad2,
    },
    {
      name: "Mac Ellisium Tattoo & Piercing Studio",
      post: "Tattoo Partner",
      imageUrl: imgTattoo,
    },
    {
      name: "PreGrad",
      post: "Learning Partner",
      imageUrl: imgPreGrad,
    },
  ];
  return (
    <div className="pb-[60px]" id="team">
      {/* <div>
        <h1 id="Head" className="text-center text-grey">
          OUR TEAM`
        </h1>
      </div> */}
      {/* pb-[180px] */}
      <h1
        id="HeadDown"
        className="text-center mt-[-40px] md:mt-[-40px] xl:mt-[-60px] pb-[150px] xl:pb-[160px] text-grey"
      >
        OUR SPONSORS
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            {proffData
              .filter((e) => {
                return e.post === "TITLE SPONSOR";
              })
              .map((member) => (
                <ProffCard
                  imageUrl={member.imageUrl}
                  member_name={member.name}
                  member_post={member.post}
                />
              ))}
          </div>
          <div className="containerTeam">
            {proffData
              .filter((e) => {
                return (
                  e.post === "ASSOCIATE SPONSOR" ||
                  e.post === "CONNECTION PARTNER"
                );
              })
              .map((member) => (
                <ProffCard
                  imageUrl={member.imageUrl}
                  member_name={member.name}
                  member_post={member.post}
                />
              ))}
          </div>
          <div className="containerTeam">
            {proffData
              .filter((e) => {
                return (
                  e.post !== "ASSOCIATE SPONSOR" &&
                  e.post !== "TITLE SPONSOR" &&
                  e.post !== "CONNECTION PARTNER"
                );
              })
              .map((member) => (
                <ProffCard
                  imageUrl={member.imageUrl}
                  member_name={member.name}
                  member_post={member.post}
                />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Title;
