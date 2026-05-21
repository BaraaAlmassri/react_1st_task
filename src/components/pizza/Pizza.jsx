import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Pizza_view from "../pizzaview/Pizza_view";
import Navbar from "../navbar/Navbar";

export default function pizza() {
  const [pizzas, setPizza] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const getPizzas = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.jonas.io/api/v2/recipes?search=pizza`,
      );
      setPizza(response.data.data.recipes);
    } catch (err) {
      setError("Error with Loading Pizzas");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getPizzas();
  }, []);

  if (loader) {
    return <Loader></Loader>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Navbar></Navbar>
      <section className="py-20">
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">Pizzas</h1>
        <div className="container mx-auto px-4">
          <div className="pizzas grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pizzas.map((pizza) => (
              <Pizza_view pizza={pizza}></Pizza_view>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
