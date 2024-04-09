import React from "react";
import Journey1 from "../../../assets/Journey1.png";
import Journey2 from "../../../assets/Journey2.png";
import Journey3 from "../../../assets/Journey3.png";
import Journey4 from "../../../assets/Journey4.png";
import Journey5 from "../../../assets/Journey5.png";
import KnowMoreButton from "../../button/KnowMoreButton";
import journeystyle from "./Journey.module.css";

function Journey() {
  return (
    <>
      <div className="relative pl-[10%] pr-[10%] pt-8 z-0">
        <div className="font-semibold text-[60px]">
          Your{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            Journey
          </span>
        </div>
        <div class={journeystyle.main}>
          <div className="flex flex-row justify-between items-center max-xl:flex-col">
            <div className="w-[50%]">
              <div className="flex flex-row items-end">
                <div className="border-t-4 border-[#228B22] pb-2.5 w-2 mr-1"></div>{" "}
                <div className="border-t-4 border-[#228B22] pb-2.5 w-6 mr-2 rounded-r"></div>
                <div className="text-[#228B22]">Research & Discovery</div>
              </div>
              <div className="text-[26px] leading-tight font-bold">
                Explore 50,000+ expert articles and university profiles
              </div>
              <div className="pt-4 pb-4 pr-16 text-[20px] opacity-80 leading-tight font-semibold">
                Dive into a world of diverse destinations, prestigious
                universities, and exciting courses
              </div>
              <div className="ml-2 max-xl:pl-0 max-xl:pb-16">
                <KnowMoreButton />
              </div>
            </div>
            <div class={journeystyle.dot}></div>
            <div className="h-[19rem] w-[27.5rem] max-xl:pl-16">
              <img src={Journey1} alt="Journey1" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center max-xl:flex-col">
            <div className="h-[18.5rem] w-[27.5rem] max-xl:pl-16">
              <img src={Journey2} alt="Journey2" />
            </div>
            <div class={journeystyle.dot1}></div>
            <div className="w-[50%]">
              <div className="flex flex-row items-end pl-16 max-xl:pl-0">
                <div className="border-t-4 border-[#228B22] pb-2.5 w-2 mr-1"></div>{" "}
                <div className="border-t-4 border-[#228B22] pb-2.5 w-6 mr-2 rounded-r"></div>
                <div className="text-[#228B22]">Shortlisting</div>
              </div>
              <div className="text-[26px] leading-tight font-bold pl-16 max-xl:pl-0">
                Find your Right-Fit Universities and Courses
              </div>
              <div className="pt-4 pb-4 pl-16 text-[20px] opacity-80 leading-tight font-semibold max-xl:pl-0">
                Share your profile, and let our tools recommend the best-matched
                universities and courses for you
              </div>
              <div className="ml-2 pl-16 max-xl:pl-0 max-xl:pb-16">
                <KnowMoreButton />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center pb-0 max-xl:flex-col">
            <div className="w-[50%]">
              <div className="flex flex-row items-end">
                <div className="border-t-4 border-[#228B22] pb-2.5 w-2 mr-1"></div>{" "}
                <div className="border-t-4 border-[#228B22] pb-2.5 w-6 mr-2 rounded-r"></div>
                <div className="text-[#228B22]">Counselling</div>
              </div>
              <div className="text-[26px] leading-tight font-bold">
                Get Expert Advice from our Counsellors
              </div>
              <div className="pt-4 pb-4 pr-16 text-[20px] opacity-80 leading-tight font-semibold">
                Take the pivotal first step and engage in a personalized
                conversation with our expert mentors
              </div>
              <div className="ml-2 max-xl:pl-0 max-xl:pb-16">
                <KnowMoreButton />
              </div>
            </div>
            <div class={journeystyle.dot}></div>
            <div className="h-[24rem] w-[27.5rem] max-xl:pl-16">
              <img src={Journey3} alt="Journey3" />
            </div>
          </div>
          <div className="flex flex-row justify-between items-center max-xl:flex-col">
            <div className="h-[29.5rem] w-[27.5rem] max-xl:pl-16">
              <img src={Journey4} alt="Journey4" />
            </div>
            <div class={journeystyle.dot1}></div>
            <div className="w-[50%]">
              <div className="flex flex-row items-end pl-16 max-xl:pl-0">
                <div className="border-t-4 border-[#228B22] pb-2.5 w-2 mr-1"></div>{" "}
                <div className="border-t-4 border-[#228B22] pb-2.5 w-6 mr-2 rounded-r"></div>
                <div className="text-[#228B22]">Test Prep</div>
              </div>
              <div className="text-[26px] leading-tight font-bold pl-16 max-xl:pl-0">
                Ace IELTS, TOEFL and other standardized tests
              </div>
              <div className="pt-4 pb-4 pl-16 text-[20px] opacity-80 leading-tight font-semibold max-xl:pl-0">
                Get comprehensive test preparation with live classes and free
                demos from our certified teachers at Leverage Live IELTS, TOEFL,
                PTE, GMAT, GRE and SAT
              </div>
              <div className="ml-2 pl-16 max-xl:pl-0 max-xl:pb-16">
                <KnowMoreButton />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between items-center max-xl:flex-col">
            <div className="w-[50%]">
              <div className="flex flex-row items-end">
                <div className="border-t-4 border-[#228B22] pb-2.5 w-2 mr-1"></div>{" "}
                <div className="border-t-4 border-[#228B22] pb-2.5 w-6 mr-2 rounded-r"></div>
                <div className="text-[#228B22]">Applications & Offers</div>
              </div>
              <div className="text-[26px] leading-tight font-bold">
                Stay Ahead with Real-Time Updates on your Applications
              </div>
              <div className="pt-4 pb-4 pr-16 text-[20px] opacity-80 leading-tight font-semibold">
                Seamlessly track your application progress and receive real-time
                updates on offers
              </div>
              <div className="ml-2 max-xl:pl-0 max-xl:pb-16">
                <KnowMoreButton />
              </div>
            </div>
            <div class={journeystyle.dot}></div>
            <div className="h-[20rem] w-[27.5rem] max-xl:pl-16">
              <img src={Journey5} alt="Journey5" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-[#636363] mt-16"></div>
    </>
  );
}

export default Journey;