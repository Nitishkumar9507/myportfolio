import React from "react";
import ImageFlip from "./ImageFlip";
import Typing from "./Typing";
import download from '../assets/download.png'
import instagram from '../assets/instagram.png'
import linkedIn from '../assets/linkedin.png'
import github from '../assets/github.svg'
import image from "../assets/nitish_photo.jpeg";



function Landing() {
  return (
    <div className="pcontainer box-border h-screen pb-6 pt-20 sm:bg-black">
      <div className="h-full flex ">

        <div className="w-full relative hidden sm:flex items-center justify-center ml-2 mr-2 sm:ml-0 sm:mr-0 sm:w-[80%]">
          <div className="w-full h-full p-1 sm:p-6 border sm:border-l-0 overflow-hidden border-red-300 rounded-br-full rounded-bl-full sm:rounded-bl-none sm:rounded-tr-full sm:rounded-br-full ">
            <Typing />
          </div>
          <div className="imageFlipperdiv aspect-w-1 aspect-h-1 h-[250px] w-[250px] sm:h-[350px] sm:w-[350px] absolute bottom-0 sm:-right-[175px] sm:top-1/2 transform sm:-translate-y-1/2 m-4 ">
            <ImageFlip />
            <div className=" hidden sm:flex items-center justify-center "><button className=" rounded-btn">Resume <img src={download} alt="" /></button></div>

          </div>
        </div>
        <div className="mobilewelcome max-h-[800px] h-full w-full bg-cyan-600 m-5 -mt-2 rounded-3xl sm:hidden">

          <div className="img h-2/3 flex items-center justify-center">
            <div className="h-[350px] bg-red-800 w-[280px] border border-8 border-yellow-300 overflow-hidden " style={{ borderRadius: '50% 50% 50% 50% ' }}>
              <img src={image} className="object-cover h-full" alt="img" />
            </div>
          </div>

          <div className="socialmedia p-2 ">
            <h1 className="text-5xl text-center font-semibold text-white">Nitish kumar</h1>
            <h2 className="text-xl text-center font-semibold text-white">FRONT-END DEVELOPER</h2>
            <div className="socialmedia h-14 m-2 flex items-center justify-center gap-8 ">
              <a href="https://github.com/Nitishkumar9507" className=" bg-white rounded h-12 w-12"><img src={github} alt="" /></a>
              <a href="https://www.linkedin.com/in/nitish-kumar-a84249229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className=" bg-white rounded h-12 w-12"><img src={linkedIn} alt="" /></a>
              <a href="https://www.instagram.com/nitishkr9507/?utm_source=qr&igsh=MXU5c3JkNW81bmJ6" className=" bg-white rounded h-12 w-12"><img src={instagram} alt="" /></a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Landing;
