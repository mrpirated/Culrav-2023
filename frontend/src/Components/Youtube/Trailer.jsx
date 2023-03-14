import YoutubeEmbed from "./YoutubeEmbed";
import "./YoutubeEmbed.css";

const Trailer = () => {
  return (
    <div className="pb-[50px]">
      <h1 className="text-center pt-[30px] md:pt-[50px] pb-[20px] md:pb-[40px] text-[40px] font-bold tracking-wide japanFont">
        OFFICIAL TRAILER
      </h1>
      <YoutubeEmbed embedId="vpidbmddNb8" />
    </div>
  );
};

export default Trailer;
