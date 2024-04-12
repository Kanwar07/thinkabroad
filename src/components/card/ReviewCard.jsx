import React from "react";
import Rating from "@mui/material/Rating";

function ReviewCard({ image, name, review, designation, rating }) {
  return (
    <div className="flex flex-col w-10/12 border border-2 p-8 mb-6 rounded-2xl max-sm:w-11/12">
      <div className="pb-4 text-[16px] opacity-60 leading-tight font-semibold">
        {review}
      </div>
      <div className="flex flex-row">
        <div>
          <img
            src={image}
            alt="name"
            className="size-16 border border-2 rounded-full p-2 mr-4"
          />
        </div>
        <div className="flex flex-col">
          <div className="text-[#031f39]">
            {name} /{" "}
            <span className="text-[#000000] text-[12px] opacity-60">
              {designation}
            </span>{" "}
          </div>
          <div>
            <Rating name="read-only" value={rating} readOnly />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
