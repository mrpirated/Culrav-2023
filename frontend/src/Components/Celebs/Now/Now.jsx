import celebsData from "./NowDB";
import "../Celebs.css";

const Now = () => {
  return (
    <div id="Gallery">
      {celebsData.map((photo) => (
        <div className="relative z-0 hover:z-20 sm:hover:scale-150 transition ease-in-out duration-700">
          <img id="image" src={photo.url} alt="baabtra.com" />
          <div className="absolute inset-0 hover:cursor-pointer hover:bg-black hover:bg-opacity-75 transition ease-in-out duration-700">
            <div className="opacity-0 hover:opacity-100 h-full transition ease-in-out duration-700">
              <div className="bottom-0 fixed pb-6 pl-6">
                <div className="text-[16px] text-white">{photo.name}</div>
                <div className="text-[13px] text-grey">{photo.label}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Now;
