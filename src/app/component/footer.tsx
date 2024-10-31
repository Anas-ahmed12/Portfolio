import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import anas from "../component/data/anas-removebg-preview.png";

const Footer = () => {
  return (
    <div className="bg-blue-600">
      <footer className="text-gray-600 body-font">
        <div className="container px-8 pb-2 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image
              src={anas}
              alt="Anas Portfolio"
              width={100}
              height={100}
              className="w-16"
            />
            <span className="ml-3 text-xl text-white">Portfoliio</span>
          </a>
          <p className="text-sm text-white sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Anas
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link href={"#"} className=" ml-6 text-[30px] text-white">
              <FaFacebook className="hover:text-[#0A66C2]" />
            </Link>
            <Link href={"#"} className="ml-6  text-[30px] text-white">
              <FaInstagram className="hover:text-red-600" />
            </Link>
            <Link
              target="_blank"
              href={"https://www.linkedin.com/feed/"}
              className="ml-5 text-[30px] text-white"
            >
              <FaLinkedin className="hover:text-[#0A66C2]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
