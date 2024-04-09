import React from "react";
import appimage from "../../../assets/appimage.png";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";
import ShareIcon from "@mui/icons-material/Share";

function AppSection() {
  return (
    <>
      <div className="pl-[10%] pr-[10%] pt-20">
        <div className="text-[60px] font-bold max-lg:text-center">
          Get{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            The App
          </span>
        </div>
        <div className="flex flex-row justify-between max-lg:flex-col items-center">
          <div className="flex flex-col w-[50%] mt-16">
            <div className="text-[40px] font-bold leading-tight">
              Stay Ahead with Real-Time Updates on your Application
            </div>
            <div className="text-[28px] mt-6 pr-10 opacity-60 leading-tight font-semibold">
              Seamlessly track your application progress and receive real-time
              updates on offers
            </div>
            <div className="pl-20 flex flex-row pt-10 pb-4">
              <div className="text-[#228B22] mr-6">
                <HeadsetMicIcon />
              </div>
              <div>
                <div className="pb-2 font-bold">27/7 Support</div>
                <div className="font-semibold opacity-60 pr-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor in- cididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida.
                </div>
              </div>
            </div>
            <div className="pl-20 flex flex-row pt-4 pb-10">
              <div className="text-[#228B22] mr-6">
                <ShareIcon />
              </div>
              <div>
                <div className="pb-2 font-bold">
                  Share your journey with others
                </div>
                <div className="font-semibold opacity-60 pr-16">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor in- cididunt ut labore et dolore magna
                  aliqua. Quis ipsum suspendisse ultrices gravida.
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={appimage} alt="appimage" />
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#228B22] mt-16"></div>
    </>
  );
}

export default AppSection;
