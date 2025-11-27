import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

function ButtonHome({ children, href, download }) {
  return (
    <a
      href={href}
      download={download}
      className="text-white w-43 h-13 rounded-lg max-sm:mt-0  max-xl:w-70 max-sm:w-40 items-center flex justify-center hover:bg-indigo-400/70 outline-2 outline-offset-2 outline-blue-50"
    >
      {children}
    </a>
  );
}

function ButtonNav({ children, onClick }) {
  return (
    <button
      className="md:hidden bg-white p-2 rounded-md hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
      type="button"
      onClick={onClick}
    >
      <MenuIcon />
    </button>
  );
}

export default ButtonHome;
export { ButtonNav };
