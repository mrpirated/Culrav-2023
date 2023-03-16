import YoutubeEmbed from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

const Trailer = () => {
  return (
    <div className="pb-[70px] md:mb-[-100px] xl:[-180px]">
      <h1 className="text-darker text-center pt-[70px] md:pt-[80px] pb-[50px] md:pb-[70px] text-[40px] font-bold tracking-wide japanFont">
        OFFICIAL TRAILER
      </h1>
      <YoutubeEmbed embedId="vpidbmddNb8" />
    </div>
  );
};

export default Trailer;
