import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
import TermsAndConditions from "../TermAndCond";
import Credits from "../Credits";

function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-4 text-center border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} QRverse. All rights reserved.
      </p>
      <div className="flex justify-center gap-4 mt-2">
        <a href="https://github.com/V-atz" target="_blank" className="hover:text-white transition-all duration-200">
          <FaGithub size={18} />
        </a>
        <a href="https://x.com/Vatsaltandel09" target="_blank" className="hover:text-white transition-all duration-200">
          <FaTwitter size={18} />
        </a>
        <a href="https://www.linkedin.com/in/vatsal-tandel-588034202/" target="_blank" className="hover:text-white transition-all duration-200">
          <FaLinkedin size={18} />
        </a>
      </div>
      <div className="mt-2 flex justify-center gap-5">
        <div><TermsAndConditions /></div>
        <div><Credits /></div>
        
      </div>
    </footer>
  );
}

export default Footer;