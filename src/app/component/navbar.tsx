import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiDownloadCloud } from "react-icons/fi";
import anas1 from "../component/data/anas-removebg-preview.png";

const Navbar = () => {
  return (
    <div className="bg-white z-50 sticky top-0">
      <header className="text-[#010101] body-font font-bold">
        <div className="container mx-auto flex flex-wrap  flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={anas1}
              alt="Anas Portfolio"
              width={100}
              height={100}
              className="w-20"
            />
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link
              href={"/"}
              className="mr-[38px] hover:underline hover:decoration-blue-600 decoration-4 text-[20px]"
            >
              Home
            </Link>
            <Link
              href={"#about"}
              className="mr-[38px] hover:underline hover:decoration-blue-600 decoration-4 text-[20px]"
            >
              About
            </Link>
            <Link
              href={"#skill"}
              className="mr-[38px] hover:underline hover:decoration-blue-600 decoration-4 text-[20px]"
            >
              Skills
            </Link>
            <Link
              href={"#contact"}
              className="mr-[38px] hover:underline hover:decoration-blue-600 decoration-4 text-[20px]"
            >
              Contact</Link>
          </nav>
          <a href="./Modern Minimalist CV Resume.pdf" target="_blank">
    <button className="inline-flex items-center py-1 px-1 bg-blue-600 focus:outline-none hover:bg-gray-200 hover:border-solid border-blue-600 border-2 hover:text-blue-600 hover:bg-transparent rounded text-base md:mt-0 text-white">
            Download CV
            <FiDownloadCloud className="text-xl ml-2" />
          </button>
          </a>
        </div>
      </header>
    </div>
  );
};
export default Navbar;
