import React, { useState } from "react";
import icon from "../../assets/thinkabroad.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

function NavBar() {
  const [sidemenu, setsidemenu] = useState(false);

  const sidebar = (
    <>
      <motion.div className="flex flex-col items-center absolute right-0 top-36 mr-10 bg-[#DCDCDC] pt-6 pr-10 pb-6 pl-10 rounded-3xl max-md:flex-row max-md:mr-0 lg:hidden">
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1 }}
          className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
        >
          Home
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.1 }}
          className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
        >
          About
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.2 }}
          className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
        >
          College Finder
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.3 }}
          className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
        >
          Prep
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.4 }}
          className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
        >
          Explore
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5 }}
          className="border border-[#228B22] bg-[#228B22] text-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 mt-4 mr-20 mb-4 rounded-lg mr-4 font-semibold hover:text-[#000000] hover:bg-[#ffffff]"
        >
          Sign up
        </motion.button>
        <motion.button
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          transition={{ duration: 1.6 }}
          className="border border-[#228B22] text-[#000000] bg-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 mt-4 mr-20 mb-4 rounded-lg mr-4 font-semibold hover:text-[#ffffff] hover:bg-[#228B22]"
        >
          Log in
        </motion.button>
      </motion.div>
    </>
  );
  return (
    <>
      <div className="flex flex-row justify-evenly pt-12 pr-24 pl-24">
        <div className="flex flex-row items-center cursor-pointer grow">
          <div>
            <img src={icon} alt="thinkabroad" />
          </div>
          <div className="text-[32px] font-semibold">
            Think<span className="text-[#228B22]">Abroad</span>
          </div>
        </div>
        <div className="flex flex-row justify-between items-center grow font-bold ml-6 max-lg:hidden">
          <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
            Home
          </button>
          <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
            About
          </button>
          <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
            College Finder
          </button>
          <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
            Prep
          </button>
          <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
            Explore
          </button>
        </div>
        <div className="flex flex-row items-center justify-end grow max-lg:hidden">
          <button className="border border-[#228B22] bg-[#228B22] text-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#000000] hover:bg-[#ffffff]">
            Sign Up
          </button>
          <button className="border border-[#228B22] text-[#000000] bg-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#ffffff] hover:bg-[#228B22]">
            Log in
          </button>
        </div>
        <div>{sidemenu && sidebar}</div>
        <button
          className="hidden max-lg:block max-lg:mr-10"
          onClick={() => setsidemenu(!sidemenu)}
        >
          {sidemenu ? (
            <CloseIcon fontSize="large" />
          ) : (
            <MenuIcon fontSize="large" />
          )}
        </button>
      </div>
    </>
  );
}

export default NavBar;
