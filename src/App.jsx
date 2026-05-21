import React from "react";
import Pizza from "./components/pizza/Pizza";
import Kebab from "./components/kebab/Kebab";
import Tacos from "./components/tacos/Tacos";

export default function App() {
  return (
    <div>
      <Pizza></Pizza>
      <Kebab></Kebab>
      <Tacos></Tacos>
    </div>
  );
}
