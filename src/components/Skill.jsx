import React from "react";
import { FaHtml5, FaReact, FaCss3, FaPython } from "react-icons/fa";
import {
  RiTailwindCssFill,
  RiJavascriptFill,
  RiNextjsFill,
} from "react-icons/ri";
import { SiDjango } from "react-icons/si";
import ProgressLine from "./ProgressBar";

const Skill = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center pt-8">
        <h1 className="text-xl font-exo font-semibold max-md:text-lg text-yellow-400">
          I am skilled in following tech stacks:{" "}
        </h1>
        <h1 className="hidden"> hello</h1>
      </div>
      <div className="flex items-center ml-10 mt-8 max-md:flex-col">
        <div className=" w-1/2 flex  justify-around  text-3xl text-yellow-400 flex-col gap-6 max-md:w-full max-md:gap-2">
          <ProgressLine IconComponent={<FaHtml5 />} percentage={90} />
          <ProgressLine IconComponent={<FaCss3 />} percentage={75} />
          <ProgressLine IconComponent={<RiJavascriptFill />} percentage={80} />
          <ProgressLine IconComponent={<FaReact />} percentage={85} />
        </div>
        <div className=" w-1/2 flex  justify-around text-3xl text-yellow-400 flex-col gap-6 max-md:w-full max-md:gap-2">
          <ProgressLine IconComponent={<RiNextjsFill />} percentage={70} />
          <ProgressLine IconComponent={<RiTailwindCssFill />} percentage={85} />
          <ProgressLine IconComponent={<FaPython />} percentage={80} />
          <ProgressLine IconComponent={<SiDjango />} percentage={85} />
        </div>
      </div>
    </div>
  );
};

export default Skill;
