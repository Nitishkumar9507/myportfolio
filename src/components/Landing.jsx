import React from "react";
import ImageFlip from "./ImageFlip";
import Typing from "./Typing";

function Landing() {
  return (
    <div className="pcontainer box-border h-screen pb-6 pt-20 bg-black">
      <div className="h-full flex">

        <div className="w-full relative flex items-center justify-center ml-2 mr-2 sm:ml-0 sm:mr-0 sm:w-[80%]">
          <div className="w-full h-full p-1 sm:p-6 border sm:border-l-0 border-red-300 rounded-br-full rounded-bl-full sm:rounded-bl-none sm:rounded-tr-full sm:rounded-br-full ">
            <Typing />
          </div>
          <div className="imageFlipperdiv aspect-w-1 aspect-h-1 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] absolute bottom-0 sm:-right-[175px] sm:top-1/2 transform sm:-translate-y-1/2 m-4 ">
            <ImageFlip />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landing;
