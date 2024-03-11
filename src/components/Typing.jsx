import React from "react";
import download from '../assets/download.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.svg'

function Typing() {
  return (
    <div className="">
      <div class="wrapper h-[50vh] hidden sm:block text-white text-[1.5em] sm:text-[2em]">
        <h1>
          Hello<span className="text-cyan-400">__</span> <br />
          Myself <span className="text-cyan-400 font-[cursive] ">Nitish Kumar</span>
        </h1>
        <div class="static-text text-[1.5em] font-bold">I'm a</div>
        <ul class="dynamic-text h-[60px] leading-[60px] sm:h-[90px] sm:leading-[90px] overflow-hidden ">
          <li className="text-yellow-400 list-none font-semibold sm:font-bold relative top-0 text-[45px] sm:text-[70px]  ">
            <span>Web Developer</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold sm:font-bold relative top-0 text-[45px] sm:text-[70px]  ">
            <span>Frontend Dev</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold sm:font-bold relative top-0 text-[45px] sm:text-[70px]  ">
            <span>React Developer</span>
          </li>
          <li className="text-yellow-400 list-none font-semibold sm:font-bold relative top-0 text-[45px] sm:text-[70px]  ">
            <span>Enthusiastic Dev</span>
          </li>
        </ul>
        <div className="description h-10 mt-10 flex items-center justify-center gap-8 w-full ">
          <a href="https://github.com/Nitishkumar9507" className=" bg-white rounded h-10 w-10"><img src={github} alt="" /></a>
          <a href="https://www.linkedin.com/in/nitish-kumar-a84249229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" bg-white rounded h-10 w-10"><img src={linkedIn} alt="" /></a>
          <a href="https://www.instagram.com/nitishkr9507/?utm_source=qr&igsh=MXU5c3JkNW81bmJ6" className=" bg-white rounded h-10 w-10"><img src={instagram} alt="" /></a>
        </div>
      </div>
    </div>
  );
}

export default Typing;
