import React from "react";
import download from '../assets/download.png'

function Typing() {
  return (
    <div className="">
      <div class="wrapper h-[50vh] text-white text-[1em] sm:text-[2em]">
        <h1>
          Hello<span className="text-cyan-400">__</span> <br />
          Myself <span className="text-cyan-400 font-[cursive] ">Nitish Kumar</span>
        </h1>
        <div class="static-text text-[2em] font-semibold">I'm a</div>
        <ul class="dynamic-text h-[90px] leading-[90px] overflow-hidden ">
          <li className="text-yellow-400 list-none font-semibold relative top-0 text-[25px] sm:text-[60px]  ">
            <span>Web Developer</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold relative top-0 text-[25px] sm:text-[60px]  ">
            <span>Frontend Developer</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold relative top-0 text-[25px] sm:text-[60px]  ">
            <span>React Developer</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold relative top-0 text-[25px] sm:text-[60px]  ">
            <span>Enthusiastic Dev</span>
          </li>
        </ul>
        <div className="description hidden sm:block sm:mt-3 sm:mb-3 text-justify text-[0.5em] w-full sm:w-[80%] ">
          Hey there! Welcome to my portfolio! I'm a frontend developer who loves
          creating awesome websites. I focus on making things look great and
          work smoothly, with a strong foundation in the latest web technologies. Take a look around to know more about me and my work.
        </div>
        <div className="description mt-1 mb-1 text-justify text-[0.5em] w-full sm:hidden block ">
          Hey there! Welcome to my portfolio! I'm a fronteend developer, with a strong foundation in latest web technologies. Take a look around to know more about me and my work.
        </div>
        <div className=" hidden sm:flex items-center justify-center "><button className=" rounded-btn">Resume <img src={download} alt="" /></button></div>
      </div>
    </div>
  );
}

export default Typing;
