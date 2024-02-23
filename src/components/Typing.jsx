import React from "react";
import download from '../assets/download.png'

function Typing() {
  return (
    <div>
      <div class="wrapper">
        <h1>
          Hello<span className="hello">__</span> <br />
          Myself <span className="hello">Nitish Kumar</span>
        </h1>
        <div class="static-text">I'm a</div>
        <ul class="dynamic-text">
          <li>
            <span>Web Developer</span>
          </li>
          <li>
            <span>Frontend Developer</span>
          </li>
          <li>
            <span>React Developer</span>
          </li>
          <li>
            <span>Enthusiastic Dev</span>
          </li>
        </ul>
        <div className="description">
          Hey there! Welcome to my portfolio! I'm a frontend developer who loves
          creating awesome websites. I focus on making things look great and
          work smoothly, with a strong foundation in the latest web technologies. Take a look around to learn more about me and my work.
        </div>
        <div className="flex items-end justify-center "><button className=" rounded-btn">Resume <img src={download} alt="" /></button></div>
      </div>
    </div>
  );
}

export default Typing;
