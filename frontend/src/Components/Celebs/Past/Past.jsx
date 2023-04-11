import celebsData from "./PastDB";
import "./Celebs.css";

const Past = () => {
  return (
    <div id="Gallery">
      {celebsData.map((photo) => (
        <div
          key={photo.url}
          className="relative z-0 hover:z-20 sm:hover:scale-150 transition ease-in-out duration-700"
        >
          <img id="image" src={photo.url} alt="baabtra.com" />
          <div className="absolute inset-0 hover:cursor-pointer hover:bg-black hover:bg-opacity-75 transition ease-in-out duration-700">
            <div className="opacity-0 hover:opacity-100 h-full transition ease-in-out duration-700">
              <div className="sm:bottom-0 sm:fixed pt-3 sm:pt-0 pl-5 sm:pb-6 sm:pl-6">
                <div className="text-[16px] pr-[10px] text-white">
                  {photo.name}
                </div>
                <div className="text-[13px] text-grey">{photo.label}</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Past;
