import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import ContactLink from "./ContactLink.jsx";
import { Link } from "react-router-dom";
function Footer() {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className=" outline-2 outline-offset-2 outline-blue-50 mx-auto w-full bg-sky-800">
      <div>
        <div className="flex justify-center gap-6 mt-3 p-10 ">
          <ContactLink
            href="https://github.com/Salamou-D-Islam"
            target="_blank"
          >
            <GitHubIcon />
          </ContactLink>

          <ContactLink
            href="https://www.linkedin.com/in/islam-derrouiche-7a69a8368/"
            target="_blank"
          >
            <LinkedInIcon />
          </ContactLink>

          <ContactLink
            href="https://www.malt.fr/profile/islamderrouiche1 "
            target="_blank"
          >
            Malte
          </ContactLink>

          <Link
            to="/contact"
            className="text-white text-2xl hover:text-indigo-400"
          >
            <ContactMailIcon />
          </Link>
        </div>
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-white">
            &copy; {year} Salamou. Tous droits réservés.
          </p>
        </div>

        <p className="text-xs text-gray-400 mt-4 text-center pb-4">
          Développeur Web FullStack — React • NodeJS
        </p>
      </div>
    </footer>
  );
}
export default Footer;
