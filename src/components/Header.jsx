import React from "react";

const Header = () => {
  const navs = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "Programm",
      path: "#programm",
    },
    {
      name: "Pricing",
      path: "#pricing",
    },
    {
      name: "Community",
      path: "#community",
    },
  ];
  return (
    <div className="bg-black w-full fixed z-50">
      <div className="container bg-black mx-auto flex justify-between items-center h-[96px]">
        <div className="logo">
          <img src="/logo.png" alt="logo" />
        </div>

        <nav className="flex gap-4 items-center">
          {navs.map((c) => (
            <a href={c.path} className="text text-[16px] text-white font-medium" key={c.path}>
              {c.name}
            </a>
          ))}
          <div className="flex gap-[12px] ml-[30px]">
            <button className="text-white px-[28px] py-[11px] border border-white rounded-[10px]">
              Login
            </button>
            <button className="bg-[#097FD9] px-[28px] py-[11px] text-white boora rounded-[10px]">
              Register
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
