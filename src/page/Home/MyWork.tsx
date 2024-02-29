import { motion } from "framer-motion";
const MyWork = () => {
  const workBoxAnimation = {
    hover: {
      scale: 1.1,
      originx: 0,
      transition: {
        type: "spring",
        stiffness: 250,
      },
      boxShadow:
        "0px 10px 1px rgba(221, 221, 221, 1), 0 10px 20px rgba(204, 204, 204, 1)",
    },
  };

  return (
    <div className=" mx-36 p-3">
      <h1 className="text-4xl mb-5  text-center font-bold">My Works</h1>
      <div className="grid grid-cols-3 gap-5 justify-evenly items-center shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]">
        <motion.div
          variants={workBoxAnimation}
          whileHover="hover"
          className="bg-red-400  h-56 rounded-lg"
        >
          01
        </motion.div>
        <motion.div
          variants={workBoxAnimation}
          whileHover="hover"
          className="bg-green-400  h-56 rounded-lg"
        >
          02
        </motion.div>
        <motion.div
          variants={workBoxAnimation}
          whileHover="hover"
          className="bg-yellow-300  h-56 rounded-lg"
        >
          03
        </motion.div>
        <motion.div
          variants={workBoxAnimation}
          whileHover="hover"
          className="col-span-2 bg-slate-400  h-56 rounded-lg"
        >
          04
        </motion.div>
        <motion.div
          variants={workBoxAnimation}
          whileHover="hover"
          className="bg-indigo-500  h-56 rounded-lg"
        >
          05
        </motion.div>
      </div>
    </div>
  );
};

export default MyWork;
