import YoutubeEmbed from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

const Previous = () => {
  return (
    <div className="mt-[70px] lg:mt-[0px] pb-[70px] md:pb-[0px]">
      <h1 className="text-darker mb-[30px] text-center pt-[20px] md:pt-[50px] pb-[20px] md:pb-[40px] text-[40px] font-bold tracking-wide japanFont">
        PREVIOUS GLIMPSES
      </h1>
      <YoutubeEmbed embedId="_Ifnk69C9NE" />
    </div>
  );
};

export default Previous;
