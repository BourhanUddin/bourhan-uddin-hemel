import { motion } from "framer-motion";
import hemelpic from "../../assets/images/banner-4.jpg";
const Banner = () => {
  const containerAnimation = {
    hidden: {
      opacity: 0,
      x: "-100vw",
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  const buttonAnimation = {
    hover: {
      scale: 1.1,
      textshadow: "0px 0px 8px rgb(2550 0 255)",
      boxshadow: "10px 11px 62px -6px rgba(0,0,0,0.76)",
      transition: {
        duration: 1,
        repeat: Infinity,
      },
    },
  };
  return (
    <motion.div
      variants={containerAnimation}
      initial="hidden"
      animate="visible"
      className=" flex justify-around items-center mt-12"
    >
      <div className="">
        <h2 className="text-4xl font-bold">
          Hi, I am <span className="text-teal-500">Hemel</span> !
        </h2>
        <p className="text-[50px] font-bold text-teal-400">Web Developer</p>
        <p className="text-[40px] font-semibold">from bangladesh</p>
        <div className=" flex  items-center space-x-5 mt-5">
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            className="inline-flex text-xl p-2.5 bg-green-300 shadow-md  rounded-md font-medium "
          >
            Contact On{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ms-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"
                />
              </svg>
            </span>
          </motion.button>
          <span>or</span>
          <motion.button
            variants={buttonAnimation}
            whileHover="hover"
            className=" inline-flex bg-white p-2.5 rounded-md shadow-md text-xl font-medium"
          >
            Scheduled{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ms-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                />
              </svg>
            </span>
          </motion.button>
        </div>
      </div>
      <div className="">
        <img className="h-80 w-70 " src={hemelpic} alt="Banner Image" />
      </div>
    </motion.div>
  );
};

export default Banner;
