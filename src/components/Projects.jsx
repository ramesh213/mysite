import React from "react";
import eshop from "../assets/images/eshop.jpg";
import weather from "../assets/images/weather.jpg";
import development from "../assets/images/development.jpg";


const Projects = () => {
  const projects = [
    {
      imgSrc: eshop,
      title: "MeroShop",
      description: "Python-Django and Bootstrap. Status: Completed !!!",
      link: "https://github.com/ramesh213/Meroshop"
    },
    {
      imgSrc: weather,
      title: "Weather Forecast",
      description: "Python-Django. Status: Completed !!!",
      link: "https://github.com/ramesh213/weather_project"
    },
    {
      imgSrc: development,
      title: "More Projects..",
      description: "More Python-Django and ReactJs projects are on the way...",
      link: "https://github.com/ramesh213"
    }
  ];

  return (
    <section id="portfolio" className="py-20 mt-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-16">
        Ongoing <span className="text-purple-600 mt-10">Projects</span>
      </h2>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="portfolio-box relative rounded-lg shadow-lg overflow-hidden transform transition hover:scale-105 hover:shadow-2xl"
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="w-full h-64 object-cover opacity-60"
            />
            <div className="portfolio-layer absolute inset-0  flex flex-col justify-center items-center text-center p-6">
              <h4 className="text-3xl font-bold text-white">{project.title}</h4>
              <p className="text-lg text-white mt-4">{project.description}</p>
              <a
                href={project.link}
                className="inline-block mt-4 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bx bx-link-external text-2xl"></i>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
