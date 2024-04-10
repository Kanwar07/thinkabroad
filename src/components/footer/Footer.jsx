import React from "react";
import thinkabroad from "../../assets/thinkabroad.png";

function Footer() {
  return (
    <>
      <div className="flex flex-col items-start pl-[20%] pr-[20%] pt-20 pb-20 bg-[#2A6C2A]">
        <div className="text-[80px] text-[#ffffff] text-left max-lg:text-left">
          <div className="flex flex-row items-center">
            <img
              src={thinkabroad}
              alt="thinkabroad"
              className="text-[#ffffff] size-24"
            />
            <div className="text-[#ffffff] text-[28px] font-semibold leading-tight">
              Think
              <br />
              <span className="font-bold text-[36px]">Abroad</span>
            </div>
          </div>
        </div>
        <div className="pt-4 text-[#ffffff] pb-6 text-left w-[50%] max-lg:w-[100%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </div>
      </div>
      <div className="border-t-2 border-[#2A6C2A]"></div>
    </>
  );
}

export default Footer;
