import React from "react";
import icon from "../../assets/thinkabroad.png";

function NavBar() {
  return (
    <div className="flex flex-row justify-evenly">
      <div className="flex flex-row items-center cursor-pointer grow">
        <div>
          <img src={icon} alt="thinkabroad" />
        </div>
        <div className="text-[32px] font-semibold">
          Think<span className="text-[#228B22]">Abroad</span>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center grow font-bold ml-6">
        <button>Home</button>
        <button>About</button>
        <button>College Finder</button>
        <button>Prep</button>
        <button>Explore</button>
      </div>
      <div className="flex flex-row items-center justify-end grow">
        <button className="border border-[#228B22] bg-[#228B22] text-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#000000] hover:bg-[#ffffff]">
          Sign Up
        </button>
        <button className="border border-[#228B22] text-[#000000] bg-[#ffffff] border-4 pl-6 pr-6 pt-1 pb-1 rounded-lg mr-4 font-semibold hover:text-[#ffffff] hover:bg-[#228B22]">
          Log in
        </button>
      </div>
    </div>
  );
}

export default NavBar;
