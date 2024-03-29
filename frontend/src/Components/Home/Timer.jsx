import { useState, useEffect, useRef } from "react";
import "./Timer.css";
import { useSelector } from "react-redux";
const Timer = () => {
  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");
  const auth = useSelector((state) => state.auth);

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date("April 12, 2023 08:00:00").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
  });

  return (
    <div className="bodyTimer">
      <div className="container">
        <div className="contentTimer">
          <div id="outer" className="ml-[10px] xl:ml-0">
            <div id="HeadTimer">COMING SOON...</div>
            <div className="launch-time">
              <div className="mr-[40px] xl:mr-[60px]">
                <p>{timerDays}</p>
                <span>DAYS</span>
              </div>
              <div className="mr-[40px] xl:mr-[60px]">
                <p>{timerHours}</p>
                <span>HOURS</span>
              </div>
              <div className="mr-[40px] xl:mr-[60px]">
                <p>{timerMinutes}</p>
                <span>MINUTES</span>
              </div>
              <div className="xl:mr-[-60px]">
                <p>{timerSeconds}</p>
                <span>SECONDS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <li
          id="loginBtn"
          className="pr-4 md:pl-0 w-fit uppercase pl-3 mt-[15px] py-2 font-bold transition duration-700 ease-in-out font-Mont"
        >
          <a href={!auth.isauth ? "/login" : "/dashboard"} className="">
            {/* {!auth.isauth ? "REGISTER NOW" : `WELCOME ${auth.user.name}`} */}
            {!auth.isauth ? (
              "REGISTER NOW"
            ) : (
              <div>
                <span className="mr-[8px] font-bold">WELCOME</span>
                <span className="font-semibold">{auth.user.name}</span>
              </div>
            )}
            {/* {auth.isauth && <p className="text-xs">Go To Dashboard</p>} */}
          </a>
        </li>
      </div>
    </div>
  );
};

export default Timer;
