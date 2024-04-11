import React from "react";
import EastIcon from "@mui/icons-material/East";
import studentAbroad from "../../../assets/studentAbroad.png";
import { motion } from "framer-motion";

function Section1Page() {
  return (
    <>
      <div className="flex flex-row pt-24 w-[50%]">
        <motion.div
          initial={{ x: -800 }}
          animate={{ x: 0 }}
          transition={{ duration: 2 }}
          className="realtive grow pl-[20%] pr-[20%] z-10"
        >
          <div className="uppercase font-semibold text-[100px] leading-none pt-12">
            Unlock your{" "}
            <span className="underline underline-offset-8 decoration-[#228B22]">
              Potential
            </span>
          </div>
          <div className="text-[28px] pt-6 pr-10 opacity-60 leading-tight font-semibold">
            Learn from the best mentors and witness your dreams come true.
          </div>
          <button className="flex flex-row items-start bg-[#000000] text-[#ffffff] p-2 rounded-xl mt-8 ml-6">
            <div className="pr-2 pl-2">Talk to an Expert</div>
            <div className="text-[#228B22]">
              <EastIcon />
            </div>
          </button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute grow size-full z-0 max-xl:hidden"
        >
          <img
            src={studentAbroad}
            alt="studentAbroad"
            className="absolute right-0"
          />
        </motion.div>
      </div>
      <div className="border-t-2 border-[#636363] mt-16"></div>
    </>
  );
}

export default Section1Page;
