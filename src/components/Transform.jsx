import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const Transform = () => {
  const texts = [
    "Increase Muscle and Strength",
    "Increase Muscle and Strength",
    "Increase Stamina",
  ];

  return (
    <div className="py-[100px]">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <img src="/transform.png" alt="transform" />
        </div>
        <div className="text-white w-1/3">
          <h1 className="text-[56px]">
            Transform your physique with our fitness plan.
          </h1>
          <div className="py-5">
            {texts.map((c) => (
              <div className="flex items-center gap-4 mb-3">
                <div className="text-[#097FD9]">
                  <FaCircleCheck />
                </div>
                <p className="text-[16px]">{c}</p>
              </div>
            ))}
          </div>

          <div>
            <button className="bg-[#097FD9] px-[28px] py-[11px] text-white boora rounded-[10px]">
              Join Now
            </button>
            <button className="px-[28px] py-[11px] text-white boora rounded-[10px]">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transform;
