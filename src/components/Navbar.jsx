import { useState } from "react";

function Navbar() {
  const [activeButton, setActiveButton] = useState("Home");
  const [textColor] = useState("#ff5223");

  return (
    <div
      className="px-16 font-poppins flex justify-between items-center bg-[#111111] w-[90vw] h-14 rounded-full fixed top-6 left-1/2 -translate-x-1/2"
      style={{
        boxShadow:
          "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
      }}
    >
      <div className="flex justify-between grow-[.45] text-[#e5e5ea]">
        <button
          onClick={() => {
            setActiveButton("Home");
          }}
          style={{ color: activeButton === "Home" ? textColor : "" }}
        >
          Home
        </button>
        <button
          onClick={() => {
            setActiveButton("About");
          }}
          style={{ color: activeButton === "About" ? textColor : "" }}
        >
          About
        </button>
        <button
          onClick={() => {
            setActiveButton("Service");
          }}
          style={{ color: activeButton === "Service" ? textColor : "" }}
        >
          Service
        </button>
      </div>
      <div className="text-center grow text-white flex justify-center items-center">
        <button className="text-lg font-semibold tracking-[.2em] font-bodoni">
          <span className="h-8 w-8 inline-block m-2 rounded-full bg-red-500">
            <span className="flex items-center justify-center">s</span>
          </span>
          <span>Shrithi</span>
        </button>
      </div>
      <div className="flex justify-between grow-[.45] text-[#e5e5ea]">
        <button
          onClick={() => {
            setActiveButton("Resume");
          }}
          style={{ color: activeButton === "Resume" ? textColor : "" }}
        >
          Resume
        </button>
        <button
          onClick={() => {
            setActiveButton("Project");
          }}
          style={{ color: activeButton === "Project" ? textColor : "" }}
        >
          Project
        </button>
        <button
          onClick={() => {
            setActiveButton("Contact");
          }}
          style={{ color: activeButton === "Contact" ? textColor : "" }}
        >
          Contact
        </button>
      </div>
    </div>
  );
}

export default Navbar;
