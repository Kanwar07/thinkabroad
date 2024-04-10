import React from "react";
import data from "../../../data/Data.json";
import ReviewCard from "../../card/ReviewCard";

function ReviewSection() {
  return (
    <>
      <div className="pl-[10%] pr-[10%] pt-16 pb-16">
        <div className="text-[60px] font-bold mb-20 max-lg:text-center">
          Live{" "}
          <span className="underline underline-offset-[18px] decoration-[#228B22]">
            The Dream
          </span>
        </div>
        <div className="grid grid-cols-2 ml-40 max-lg:grid-cols-1">
          {data.length > 0 &&
            data.map((reviews) => {
              const { image, name, review, designation, rating } = reviews;
              return (
                <div>
                  <ReviewCard
                    {...{ image, name, review, designation, rating }}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <div className="border-t-2 border-[#636363]"></div>
    </>
  );
}

export default ReviewSection;
