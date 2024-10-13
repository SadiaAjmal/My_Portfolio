import React from "react";
import dashbord from "../assets/dashbord.avif";
import Shopping from "../assets/shopping.avif";
import weather from "../assets/weather.avif";
import Card from "./Card";
import DiscussionBlock from "./DiscussionBlock";

let project_info = [
  {
    id: 1,
    image: Shopping,
    name: "E-Commerce Shopping app",
    category: "Development",
    description:
      "Built a responsive E-commerce Shopping App with intuitive UI. Allows users to view categories and enjoy a smooth user experience.",
  },
  {
    id: 2,
    image: weather,
    name: "Weather App",
    category: "Development",
    description:
      "Built a user-friendly Weather App displaying real-time weather conditions and forecasts using external API integration.",
  },
  {
    id: 3,
    image: dashbord,
    name: "Dashboard",
    category: "Development",
    description:
      "Designed an interactive Admin Dashboard for project oversight, tracking ongoing, completed, and cancelled projects.",
  },
];

const Projects = () => {
  return (
    <>
      <div className="projects flex flex-col items-center gap-3 px-10 md:px-20 my-10">
        <p className="md:text-4xl text-3xl font-semibold">Projects</p>
        <p className="text-pText-clr w-96 text-center">
          Explore my recent projects, showcasing my skills in Frontend
          Development
        </p>
        <div className=" md:flex flex-wrap gap-[30px] justify-center">
          {project_info.map((item, i) => {
            return (
              <Card
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                description={item.description}
                category={item.category}
              />
            );
          })}
        </div>
      </div>

    </>
  );
};

export default Projects;
