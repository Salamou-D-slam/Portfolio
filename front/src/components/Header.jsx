import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderNav from "./HeaderNav.jsx";
import { ButtonNav } from "./ButtonLink.jsx";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <nav className="bg-transparent outline-2 outline-offset-2 outline-blue-50 sm:w-160 max-sm:w-full mx-auto rounded-b-lg shadow-lg m-6">
        <div className="container mx-auto px-4 flex items-center justify-between p-4">
          <a href="/" className="text-white text-2xl">
            Salamou
          </a>

          <div className="flex items-center">
            <ul className="hidden md:flex gap-6 mr-4">
              <HeaderNav href="/">Accueil</HeaderNav>
              <HeaderNav href="/profil">Profil</HeaderNav>
              <HeaderNav href="/contact">Contact</HeaderNav>
              <HeaderNav href="/Projets">Projets</HeaderNav>
            </ul>
            <ButtonNav onClick={toggleMenu}></ButtonNav>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3">
              <HeaderNav href="/">Accueil</HeaderNav>
              <HeaderNav href="/profil">Profil</HeaderNav>
              <HeaderNav href="/contact">Contact</HeaderNav>
              <HeaderNav href="/Projets">Projets</HeaderNav>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;
