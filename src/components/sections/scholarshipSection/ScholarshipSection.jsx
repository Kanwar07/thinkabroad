import React from "react";
import Video0 from "../../../assets/Video0.mp4";
import Video1 from "../../../assets/Video1.mp4";
import Video2 from "../../../assets/Video2.mp4";

function ScholarshipSection() {
  return (
    <>
      <div className="flex flex-col items-center pl-[10%] pr-[10%] pt-16 bg-[#2A6C2A]">
        <div className="text-[80px] text-[#ffffff] max-lg:text-center">
          Get Dream{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            Scholarships!
          </span>
        </div>
        <div className="pt-4 text-[#ffffff] pb-6 max-lg:text-center">
          Win up to ₹ 3,00,000* to study in the UK, Canada & USA
        </div>
        <div className="flex flex-row justify-between items-center max-lg:flex-col">
          <div>
            <video
              loop={true}
              autoPlay="autoplay"
              muted
              className="size-80 max-lg:w-[34rem] h-[26rem]"
            >
              <source src={Video0} type="video/mp4" />
            </video>
          </div>
          <div>
            <video
              loop={true}
              autoPlay="autoplay"
              muted
              className="w-[34rem] h-[26rem] ml-4 mr-4"
            >
              <source src={Video1} type="video/mp4" />
            </video>
          </div>
          <div>
            <video
              loop={true}
              autoPlay="autoplay"
              muted
              className="size-80 max-lg:w-[34rem] h-[26rem]"
            >
              <source src={Video2} type="video/mp4" />
            </video>
          </div>
        </div>
        <button className="border border-4 border-[#ffffff] text-[#ffffff] pl-4 pt-2 pr-4 pb-2 text-[20px] bg-[#031f39] mb-6 rounded-3xl">
          Know More
        </button>
      </div>
      <div className="border-t-2 border-[#228B22] mt-16"></div>
    </>
  );
}

export default ScholarshipSection;
