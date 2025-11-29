import React, { useState } from "react";
import { Link } from "react-router-dom";

function HeaderNav({ children, to }) {
  return (
    <li>
      <Link to={to} className="text-white hover:text-indigo-400">
        {children}
      </Link>
    </li>
  );
}

export default HeaderNav;
