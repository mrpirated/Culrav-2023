import { useEffect, useState } from "react";
import getOrganizingTeamAPI from "../../api/getOrganizingTeamAPI";
import getImagesAPI from "../../api/getImageAPI";
import Card from "./Card";
import ProffCard from "./ProffCard";

const Title = () => {
  const [organizingTeam, setOrganizinTeam] = useState([]);
  useEffect(() => {
    getOrganizingTeamAPI().then((response) => {
      setOrganizinTeam(response.data);
    });
  }, []);
  const proffData = [
    {
      name: "Dr. R.S. Verma",
      post: "Director",
      imageUrl: `https://images.culrav.online/rsverma.jpg`,
    },
    {
      name: "Dr. Anil Kumar Singh",
      post: "SAC President",
      imageUrl: `https://images.culrav.online/aksingh.jpg`,
    },
    {
      name: "Dr. Vishnu Agarwal",
      post: "Convener",
      imageUrl: `https://images.culrav.online/vishnu.jpg`,
    },
    {
      name: "Dr. Soni Joseph",
      post: "Treasurer",
      imageUrl: `https://images.culrav.online/sonijoseph.jpg`,
    },
    {
      name: "Dr. Suantak Kamsonlian",
      post: "Faculty Coordinator",
      imageUrl: `https://images.culrav.online/suantak.jpg`,
    },
    {
      name: "Dr. Anupam Rawat",
      post: "Faculty Coordinator",
      imageUrl: `https://images.culrav.online/anupam.jpg`,
    },
    {
      name: "Dr. Mitu Mandal",
      post: "Faculty Coordinator",
      imageUrl: `https://images.culrav.online/mitu.jpg`,
    },
    {
      name: "Dr. Santosh Kumar Gupta",
      post: "Faculty Coordinator",
      imageUrl: `https://images.culrav.online/santosh.jpg`,
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
        className="text-center mt-[20px] md:mt-[40px] pb-[150px] xl:pb-[160px] text-grey"
      >
        TITLE SPONSORS
      </h1>
      <div className="bodyTeam">
        <div className="SectionTeam">
          <div className="containerTeam">
            {proffData
              .filter((e) => {
                return e.post === "Director";
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
                  e.post !== "Director" && e.post !== "Faculty Coordinator"
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
                return e.post === "Faculty Coordinator";
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
