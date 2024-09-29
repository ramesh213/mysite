
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import heroImage from "../assets/images/hero-img.png";
import { ReactTyped } from "react-typed";

const Home = () => {
  return (
    <section
      className="w-full flex items-center bg-[#F8AC8C] justify-between top-2 mt-12 py-20  sm:px-10 max-sm:flex-col max-sm:px-2 lg:px-20 mx-auto "
      id="home"
    >
      <div className="home-content flex flex-col items-start justify-center text-left p-10 max-sm:px-6">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          Hello, It's Me <span>😊</span>
        </h3>
        <h1 className="text-6xl font-bold mb-6 text-gray-700">Ramesh Tudu</h1>
        <h3 className="text-3xl font-bold mb-6">
          <div className="text-container flex gap-3">
            <h1 className="max-md:text-xl text-gray-800">I am a </h1>
            <ReactTyped
              strings={[
                "Frontend Developer...",
                "Backend Developer...",
                "Fullstack Developer...",
              ]}
              typeSpeed={60}
              backSpeed={60}
              loop
              className="text-red-600 max-md:text-lg"
            />
          </div>
        </h3>
        <p className="text-xl mb-6 font-exo text-gray-900">
          I am a dedicated web app developer specializing in Python-Django,
          <br /> React.js, REST APIs with a passion for continuous learning-
          <br />
          & exploring new technologies to refine my skills- <br /> and
          deliver impactful solutions.
        </p>
        <div className="social-media flex space-x-6 ">
          <a
            href="https://www.facebook.com/ramesh.tudu"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaFacebook className="text-2xl text-purple-800 hover:text-red-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/ramesh-tudu-77a25618b/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin className="text-2xl text-purple-800 hover:text-red-500" />
          </a>
          <a
            href="https://github.com/ramesh213"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaGithub className="text-2xl text-purple-800 hover:text-red-500" />
          </a>
          <a
            href="https://twitter.com/ramesh_tudu"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaTwitter className="text-2xl text-purple-800 hover:text-red-500" />
          </a>
        </div>
        <a
          href="#contact"
          className="btn mt-6 bg-purple-500 text-white rounded-lg py-2 px-8 font-exo text-lg"
        >
          Ask me CV !!!
        </a>
      </div>
      <div className="home-image">
        <img src={heroImage} alt="Ramesh" className="w-70 h-96" />
      </div>
    </section>
  );
};

export default Home;
