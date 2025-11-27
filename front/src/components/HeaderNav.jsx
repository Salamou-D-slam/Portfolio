import React, { useState } from "react";

function HeaderNav({ children, href }) {
  return (
    <li>
      <a href={href} className="text-white hover:text-indigo-400">
        {children}
      </a>
    </li>
  );
}

export default HeaderNav;
