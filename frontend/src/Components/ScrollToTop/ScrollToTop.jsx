import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const ScrollToBtn = () => {
    window.scrollTo({ top: 0, behaviour: "smooth" });
  };

  const listenToScroll = () => {
    let height = 100;

    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > height) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div className="bg-black">
      {isVisible && (
        <div
          className="bg-stone-300 w-12 h-12 flex justify-center items-center rounded-full fixed bottom-0 right-0 mr-6 mb-6 hover:cursor-pointer z-20"
          onClick={ScrollToBtn}
        >
          <div className="bg-warm p-4 rounded-3xl">
            <motion.div
              className="flex flex-col justify-center items-center"
              whileInView={{ y: [4, -4], opacity: [0, 1] }}
              transition={{
                duration: 1,
                ease: "easeOut",
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="3.0"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
                />
              </svg>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
