import React from "react";

const Services = () => {
  return (
    <section id="services" className=" h-screen py-20 mt-18 bg-[#F28B82]">
      <h2 className="text-4xl font-bold text-center mb-20 ">
        Things <span className="text-purple-600">I Do</span>
      </h2>

      <div className="services-container flex justify-center items-center flex-wrap gap-8">
        <div className="services-box flex-1 bg-gray-100 p-8 rounded-lg text-center transition transform hover:scale-105 shadow-lg hover:shadow-2xl">
          <i className="bx bxl-sketch text-6xl text-purple-600"></i>
          <h3 className="text-2xl font-bold my-4">Web Designing</h3>
          <p className="text-lg leading-6">
            Designing is the ART of depicting imagination into the REALITY.
            <br />
            Beautiful design changes one's mind and thinking process.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Wanna know more..?
          </a>
        </div>

        <div className="services-box flex-1 bg-gray-100 p-8 rounded-lg text-center transition transform hover:scale-105 shadow-lg hover:shadow-2xl">
          <i className="bx bx-code-alt text-6xl text-purple-600"></i>
          <h3 className="text-2xl font-bold my-4">Web Development</h3>
          <p className="text-lg leading-6">
            Bringing the design into real-life Application.
            <br />
            Includes: Coding, Testing, Integrating parts of the app to the WHOLE.
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Have queries..?
          </a>
        </div>

        <div className="services-box flex-1 bg-gray-100 p-8 rounded-lg text-center transition transform hover:scale-105 shadow-lg hover:shadow-2xl">
          <i className="fas fa-server text-6xl text-purple-600"></i>
          <h3 className="text-2xl font-bold my-4">App Deployment</h3>
          <p className="text-lg leading-6">
            Making the application available LIVE.
            <br />
            You can access it from anywhere in the world. That's gonna be AWESOME!!!
          </p>
          <a
            href="#contact"
            className="inline-block mt-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
          >
            Let's discuss..
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
