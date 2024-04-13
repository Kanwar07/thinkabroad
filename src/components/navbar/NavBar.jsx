import React, { useState } from "react";
import icon from "../../assets/thinkabroad.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function NavBar() {
  const [sidemenu, setsidemenu] = useState(false);

  const sidebar = (
    <>
      <motion.div className="absolute flex flex-col font-semibold items-center right-0 top-36 mr-10 bg-[#D3D3D3] pt-6 pr-10 pb-6 pl-10 rounded-3xl z-10 max-md:mr-0 lg:hidden max-[900px]:flex-row max-sm:relative max-sm:flex-col">
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
          >
            Home
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
          >
            About
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
          >
            College Finder
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
          >
            Prep
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 mt-4 mb-4 border-[#000000] rounded-lg"
          >
            Explore
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border border-[#228B22] bg-[#228B22] text-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 mt-4 mb-4 rounded-lg mr-4 font-semibold hover:text-[#000000] hover:bg-[#ffffff]"
          >
            Sign Up
          </motion.button>
        </Link>
        <Link to="/comingsoon">
          <motion.button
            initial={{ x: 200 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className="border border-[#228B22] text-[#000000] bg-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 mt-4 mb-4 rounded-lg mr-4 font-semibold hover:text-[#ffffff] hover:bg-[#228B22]"
          >
            Log in
          </motion.button>
        </Link>
      </motion.div>
    </>
  );
  return (
    <>
      <div className="flex flex-row justify-between pt-12 pr-24 pl-24 max-sm:justify-between max-sm:pr-[5%] max-sm:pl-[5%] max-sm:items-start">
        <Link to="/">
          <div className="flex flex-row items-center cursor-pointer grow">
            <div>
              <img src={icon} alt="thinkabroad" />
            </div>
            <div className="text-[32px] font-semibold max-sm:text-[22px]">
              Think<span className="text-[#228B22]">Abroad</span>
            </div>
          </div>
        </Link>
        <div className="flex flex-row justify-between items-center grow font-bold ml-20 max-lg:hidden">
          <Link to="/comingsoon">
            <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
              Home
            </button>
          </Link>
          <Link to="/comingsoon">
            <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
              About
            </button>
          </Link>
          <Link to="/comingsoon">
            <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
              College Finder
            </button>
          </Link>
          <Link to="/comingsoon">
            <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
              Prep
            </button>
          </Link>
          <Link to="/comingsoon">
            <button className="border-none hover:border-solid border-2 pt-2 pr-4 pb-2 pl-4 border-[#000000] rounded-lg">
              Explore
            </button>
          </Link>
        </div>
        <div className="flex flex-row items-center justify-end grow max-lg:hidden">
          <Link to="/comingsoon">
            <button className="border border-[#228B22] bg-[#228B22] text-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#000000] hover:bg-[#ffffff]">
              Sign Up
            </button>
          </Link>
          <Link to="/comingsoon">
            <button className="border border-[#228B22] text-[#000000] bg-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#ffffff] hover:bg-[#228B22]">
              Log in
            </button>
          </Link>
        </div>
        <div className="max-sm:flex max-sm:flex-col">
          <button
            title="collapsible Menu"
            className="hidden max-lg:block max-lg:mr-10"
            onClick={() => setsidemenu(!sidemenu)}
          >
            {sidemenu ? (
              <CloseIcon fontSize="large" />
            ) : (
              <MenuIcon fontSize="large" />
            )}
          </button>
          <div>{sidemenu && sidebar}</div>
        </div>
      </div>
    </>
  );
}

export default NavBar;
