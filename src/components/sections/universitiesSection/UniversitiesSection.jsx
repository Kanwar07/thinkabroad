import React from "react";
import universities from "../../../assets/universites.png";

function UniversitiesSection() {
  return (
    <>
      <div className="pl-[10%] pr-[10%] pt-16 pb-16 flex flex-col justify-between items-center">
        <div className="text-[80px] font-bold text-center max-lg:text-center">
          Our Partner{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            Universities
          </span>
        </div>
        <div>
          <img
            src={universities}
            alt="universities"
            className="size-full mt-12 mb-12 bg-[#F0FFFF]"
          />
        </div>
        <div className="text-center pt-8 pb-8 mr-[25%] ml-[25%] text-[18px]">
          Admissions counselling service to these universities is FREE for
          students. As their official partners, we receive a student advisory
          fee from universities.
        </div>
        <button className="border border-4 border-[#000000] text-[#000000] pl-4 pt-2 pr-4 pb-2 text-[20px] bg-[#ffffff] mb-6 rounded-3xl">
          Know More
        </button>
      </div>
      <div className="border-t-2 border-[#2A6C2A]"></div>
    </>
  );
}

export default UniversitiesSection;
