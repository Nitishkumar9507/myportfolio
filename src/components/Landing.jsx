import React from "react";
import ImageFlip from "./ImageFlip";
import Typing from "./Typing";

function Landing() {
  return (
    <div className="pcontainer box-border bg-black h-screen pb-6 pt-20">
      <div className="h-full flex">
        <div className="w-[80%] relative flex flex-col">
          <div className="w-full h-full p-6 border border-l-0 border-red-300 rounded-tr-full rounded-br-full ">
            <Typing />
          </div>
          <div className="aspect-w-1 aspect-h-1 h-[350px] w-[350px] absolute rounded-full -right-[175px] top-1/2 transform -translate-y-1/2 ">
            <ImageFlip />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
