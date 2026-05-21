import { createBrowserRouter } from "react-router";
import Home from "./components/home/Home";
import MainLayout from "./layout/MainLayout";
import Aboutus from "./components/aboutus/Aboutus";
import Policy from "./components/policy/Policy";
import Pizza from "./components/pizza/Pizza";
import Kebab from "./components/kebab/Kebab";
import Taco from "./components/tacos/Tacos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/AboutUs",
        element: <Aboutus></Aboutus>,
      },
      {
        path: "/Policy",
        element: <Policy></Policy>,
      },
      {
        path: "/Pizza",
        element: <Pizza></Pizza>,
      },
      {
        path: "/Kebab",
        element: <Kebab></Kebab>,
      },
      {
        path: "/Taco",
        element: <Taco></Taco>,
      },
    ],
  },
]);

export default router;
