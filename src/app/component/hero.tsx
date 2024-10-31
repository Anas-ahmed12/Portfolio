"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Typewriter from "typewriter-effect";
import profile2 from "../component/data/profil2.png";

const Hero = () => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font mb-4 font-medium text-gray-900  text-6xl">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ["Web Designer", "Web Developer"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <div className="w-[100px] h-[2px] bg-blue-600"></div>
            <p className="mb-8 leading-relaxed pt-4 text-black text-[17px]">
              Welcome to my portfolio! I’m a passionate web developer with a
              knack for turning complex challenges into elegant solutions. My
              work focuses on creating responsive and user-friendly websites
              that drive results. Explore my projects to see how I can help
              elevate your online presence!
            </p>
            <div className="flex justify-center">
              <Link href={"#contact"}>
                <button className="inline-flex text-white font-bold bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-transparent hover:text-blue-600 hover:border-blue-600 hover:border-2 rounded text-lg">
                  Contact
                </button>
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded mx-auto w-[25rem]"
              alt="hero"
              height={500}
              width={500}
              src={profile2}
              data-aos="flip-left"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
