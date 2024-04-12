import React from "react";
import video from "../../../data/Video.json";
import { motion } from "framer-motion";

function ScholarshipSection() {
  return (
    <>
      <div className="flex flex-col items-center pl-[10%] pr-[10%] pt-16 bg-[#2A6C2A]">
        <div className="text-[80px] text-[#ffffff] max-lg:text-center max-sm:text-[60px]">
          Get Dream{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            Scholarships!
          </span>
        </div>
        <div className="pt-4 text-[#ffffff] pb-6 max-lg:text-center">
          Win up to ₹ 3,00,000* to study in the UK, Canada & USA
        </div>
        <motion.div
          initial={{ x: 2450 }}
          animate={{ x: "-10%" }}
          transition={{
            duration: 60,
            repeat: Infinity,
            repeatType: "loop",
            delay: 1.2,
          }}
          className="flex flex-row justify-between items-center"
        >
          {video.length > 0 &&
            video.map((project, index) => {
              const { url } = project;
              return (
                <motion.div
                  key={index}
                  whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                  }}
                  className="h-[20rem] w-[28rem] m-8"
                >
                  <video loop={true} autoPlay="autoplay" muted>
                    <source src={url} type="video/mp4" />
                  </video>{" "}
                </motion.div>
              );
            })}
        </motion.div>
        <button className="border border-4 border-[#ffffff] text-[#ffffff] pl-4 pt-2 pr-4 pb-2 text-[20px] bg-[#031f39] mb-12 rounded-3xl max-lg:mt-12">
          Know More
        </button>
      </div>
      <div className="border-t-2 border-[#228B22]"></div>
    </>
  );
}

export default ScholarshipSection;
