import React from "react";
import { FaRunning } from "react-icons/fa";
import { GiFat, GiMuscularTorso } from "react-icons/gi";

const program = [
  {
    icon: <FaRunning />,
    title: "Cardio Strength",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    icon: <GiFat />,
    title: "Fat Lose",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
  {
    icon: <GiMuscularTorso />,
    title: "Muscle Gain",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.",
  },
];

const Programm = () => {
  return (
    <div className="relative py-5">
      <div className="container mx-auto">
        <div className="text-white h-[20vh] flex items-end py-5">
          <h1 className="text-[142px] absolute opacity-35 left-[-2%] top-[-20px]">Program</h1>
          <h1 className="text-[56px]">Explore Our Program</h1>
        </div>

        <div className="flex justify-between items-center">
          {program.map((c) => (
            <div className="w-[25%] rounded bg-[#111] transition duration-500 hover:bg-[#097FD9] p-[30px] text-white">
              <div className="text-[50px]">{c.icon}</div>
              <h1 className="text-[24px] font-semibold">{c.title}</h1>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Programm;
