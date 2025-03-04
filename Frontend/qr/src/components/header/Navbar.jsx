import React from "react";
import { FaQrcode } from "react-icons/fa";

function Navbar() {
  return (
    <header className="bg-black text-white py-4 px-6 flex justify-between items-center border-b border-gray-700">
      <div className="flex items-center gap-2 text-xl font-semibold">
        <FaQrcode className="text-gray-400" />
        <span className="tracking-wide text-gray-300">QRverse</span>
      </div>
      {/* <nav>
        <ul className="flex gap-6 text-gray-400">
          <li>
            <a
              href="#"
              className="hover:text-white transition-all duration-200"
            >
              Home
            </a>
          </li>
        </ul>
      </nav> */}
    </header>
  );
}

export default Navbar;