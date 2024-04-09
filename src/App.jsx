import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Programm from "./components/Programm";
import Transform from "./components/Transform";
import Newletter from "./components/Newletter";
import Pirce from "./components/Pirce";

const App = () => {
  return (
    <div className="bg-black">
      <Header />
      <Hero />
      <Programm />
      <Transform />
      <Newletter/>
      <Pirce/>
    </div>
  );
};

export default App;
