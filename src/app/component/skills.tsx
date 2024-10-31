// import next from "next";
import { PiFileHtmlBold } from "react-icons/pi";
import { PiFileCssBold } from "react-icons/pi";
import { IoLogoJavascript } from "react-icons/io";
import { RiBootstrapLine } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { SiCss3 } from "react-icons/si";

const Skill = () => {
  return (
    <div id="skill">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-blue-600 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>

            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900" data-aos="flip-right">
              My Skills
            </h1>
            <div className="w-[80px] h-[2px] bg-blue-600 mx-auto mt-2"></div>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* skills */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <PiFileHtmlBold className="text-2xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                    <div className="absolute bg-blue-600 h-1 rounded-xl w-[98%]"></div>
                  </div>
                  <p className="font-bold text-right">98%</p>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <PiFileCssBold className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                    <div className="absolute bg-blue-600 h-1 rounded-xl w-[92%]"></div>
                  </div>
                  <p className="font-bold text-right">92%</p>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <IoLogoJavascript className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Javasceript/Typescript
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                    <div className="absolute bg-blue-600 h-1 rounded-xl w-[80%]"></div>
                  </div>
                  <p className="font-bold text-right">80%</p>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <RiBootstrapLine className="text-xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Bootstrap
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                    <div className="absolute bg-blue-600 h-1 rounded-xl w-[90%]"></div>
                  </div>
                  <p className="font-bold text-right">90%</p>
                </div>
              </div>
            </div>
            {/* skills */}
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
                    <RiNextjsLine className="text-2xl" />
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                    <div className="absolute bg-blue-600 h-1 rounded-xl w-[75%]"></div>
                  </div>
                  <p className="font-bold text-right">75%</p>
                </div>
              </div>
            </div>
                  {/* skills */}
      <div className="p-4 md:w-1/3">
        <div className="flex rounded-lg h-full bg-white p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-600 text-white flex-shrink-0">
            <SiCss3 className="text-xl" />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
                Tailwind CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="h-1 w-full bg-gray-300 rounded-xl relative">
                <div className="absolute bg-blue-600 h-1 rounded-xl w-[70%]"></div>
            </div>
            <p className="font-bold text-right">70%</p>
          </div>
        </div>
      </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Skill;
