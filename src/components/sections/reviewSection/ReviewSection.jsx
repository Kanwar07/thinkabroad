import React from "react";
import data from "../../../data/Data.json";
import ReviewCard from "../../card/ReviewCard";
import { motion } from "framer-motion";

function ReviewSection() {
  const fadeanimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.25 * index,
      },
    }),
  };
  return (
    <>
      <div className="pl-[10%] pr-[10%] pt-16 pb-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{
            once: true,
          }}
          className="text-[60px] font-bold mb-20 max-lg:text-center"
        >
          Live{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            The Dream
          </span>
        </motion.div>
        <div className="grid grid-cols-2 ml-40 max-lg:grid-cols-1">
          {data.length > 0 &&
            data.map((reviews, index) => {
              const { image, name, review, designation, rating } = reviews;
              return (
                <motion.div
                  key={index}
                  variants={fadeanimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  custom={index}
                >
                  <ReviewCard
                    {...{ image, name, review, designation, rating }}
                  />
                </motion.div>
              );
            })}
        </div>
      </div>
      <div className="border-t-2 border-[#636363]"></div>
    </>
  );
}

export default ReviewSection;
