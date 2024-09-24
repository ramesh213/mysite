import React from "react";
import heroImage from "../assets/images/hero-image.png";

const About = () => {
  return (
    <section
      id="about"
      className=" bg-[url('./assets/images/bg.jpeg')] bg-center bg-cover bg-fixed  flex justify-between items-center py-20 px-20  max-md:flex-col-reverse max-sm:px-8"
    >
      <div className="mb-8">
        <img
          src={heroImage}
          alt="Ramesh"
          className="w-full h-[62vh]  shadow-2xl"
        />
      </div>
      <div className=" text-white">
        <h2 className="text-4xl font-bold mb-4">
          About <span className="pl-4 text-blue-500">Me</span>
        </h2>
        <h3 className="text-2xl mb-6">Fullstack Developer</h3>
        <p className="text-lg mb-8 font-exo">
          Studied at:{" "}
          <span className="font-semibold ">
            Purbanchal University School of Science & Technology (PUSAT)
          </span>
          <br />
          Hobbies: {"  "}
          <span className="font-semibold">
            Travelling, Listening to Music, Watching Sci-fi Movies...
          </span>
          <br />
          Interests:{" "}
          <span className="font-semibold">
            Science, Technology, Space Science...
          </span>{" "}
          <br />
          <q>Hard work & consistency always results in success!</q>{" "}
          <span role="img" aria-label="love">
            😍
          </span>
        </p>
        <a
          href="#contact"
          className="btn bg-purple-600 text-white px-6 py-3 font-exo text-lg rounded-lg hover:bg-purple-700"
        >
          Wanna be in touch..?
        </a>
      </div>
    </section>
  );
};

export default About;
