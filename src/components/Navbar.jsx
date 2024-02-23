import React from "react";

function Navbar() {
  return (
    <div className="Navbar bg-cyan-500 z-10 fixed top-0 w-full h-14 items-center text-slate-950 flex justify-between">
      <div className="font-bold font-[cursive] text-lg ml-2">Nitish Kumar</div>
      <div className="mr-2 font-bold list-none flex justify-between w-2/3">
        <li className="nav-item cursor-pointer">home</li>
        <li className="nav-item cursor-pointer">about</li>
        <li className="nav-item cursor-pointer">projects</li>
        <li className="nav-item cursor-pointer">contact</li>
      </div>
    </div>
  );
}

export default Navbar;
