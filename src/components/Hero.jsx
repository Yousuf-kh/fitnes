import React from "react";

const Hero = () => {
  return (
    <div className="bg-black overflow-hidden">
      <div className="container mx-auto flex items-center justify-between h-[75vh] relative">
        <div className="text-white">
          <h1 className="text-[64px] leading-[75px] font-bold">
            Helps for your <br /> ideal body fitness
          </h1>
          <p className="text-zinc-500 text-[18px] pt-[12px] pb-[32px]">
            Motivate users with benefits and positive reinforcement,
            <br /> and offer modifications and progress tracking.
          </p>
          <div className="flex gap-[32px] items-center">
            <button className="bg-[#097FD9] px-[28px] py-[11px] text-white boora rounded-[10px]">
              Start Training
            </button>
            <div className="flex items-center gap-[12px]">
              <img src="/play.png" alt="" />
              <p className="text-[16px] font-regular">Watch Demo</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-200px] right-0">
          <h1 className="text-zinc-500 text-[160px] -rotate-90 absolute left-[-200px] top-[100px] opacity-25 font-bold">Fitness</h1>
          <img className="relative" src="/hero.png" alt="hero" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
