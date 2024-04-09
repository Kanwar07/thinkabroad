import React from "react";
import EastIcon from "@mui/icons-material/East";

function KnowMoreButton() {
  return (
    <button className="border border-2 border-[#228B22] pt-0.5 pr-1 pb-0.5 pl-4 rounded-full flex flex-row items-start">
      <div className="pr-4 ">Know More</div>
      <span className="border border-2 border-[#228B22] pr-0.5 rounded-full text-[#228B22]">
        <EastIcon />
      </span>
    </button>
  );
}

export default KnowMoreButton;
