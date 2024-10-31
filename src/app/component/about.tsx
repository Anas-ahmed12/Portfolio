// import next from "next";
import Image from "next/image";
import profile from "../component/data/profil2.png";
// import Link from "next/link";

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center m">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded mx-auto w-[400px] h-[500px]"
              alt="hero"
              src={profile}
              width={300}
              height={500}
              data-aos="flip-left"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center mb-[3rem]">
            <h2 className="text-4xl">About Me</h2>
            <div className="w-[100px] h-[2px] bg-blue-600"></div>
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 mt-12" data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000">
              I am Anas
            </h1>
            <p className="mb-2 leading-relaxed">
              Welcome to our portfolio, a showcase of innovative design and
              expert, we transform ideas into reality,
              delivering unique solutions that resonate with your vision and
              goals.
            </p>
            <p className="mb-5 leading-relaxed">
              I am a passionate web developer with [3 years] of experience in
              building dynamic and responsive websites My expertise spans HTML,
              CSS, JavaScript, and various frameworks like React. I am
              continuously exploring new technologies and trends in web
              development to stay ahead in this fast-paced field.
            </p>
            <div className="flex justify-center">
                <a href={"../component/data/anas.jpg"}>
                <a href="./Modern Minimalist CV Resume.pdf" target="_blank">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                View CV
              </button>
              </a>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;
