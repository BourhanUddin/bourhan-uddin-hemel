import { motion } from "framer-motion";
const NavBar = () => {
  const navAnimated = {
    hidden: {
      y: -40,
    },
    visible: {
      y: -0,
      transition: {
        delay: 0.3,
        type: "spring",
        stiffness: 120,
      },
    },
  };
  const navListAnimated = {
    hover: {
      scale: 1.1,
      originx: 0,
      transition: {
        type: "spring",
        stiffness: 250,
      },
    },
  };
  return (
    <motion.nav variants={navAnimated} initial="hidden" animate="visible">
      <div className=" flex justify-center items-center text-slate-950 space-x-6 text-2xl capitalize h-12 ">
        <motion.a variants={navListAnimated} whileHover="hover" href="">
          My Work
        </motion.a>
        <motion.a variants={navListAnimated} whileHover="hover" href="">
          About Me{" "}
        </motion.a>
        <motion.a variants={navListAnimated} whileHover="hover" href="">
          resume
        </motion.a>
      </div>
    </motion.nav>
  );
};

export default NavBar;
