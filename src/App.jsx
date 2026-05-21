import React from "react";
import Pizza from "./components/pizza/Pizza";
import Kebab from "./components/kebab/Kebab";
import Tacos from "./components/tacos/Tacos";
import Home from "./components/home/Home";
import Aboutus from "./components/aboutus/Aboutus";
import Policy from "./components/policy/Policy";
import { RouterProvider } from "react-router-dom";
import router from "./router";

export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
