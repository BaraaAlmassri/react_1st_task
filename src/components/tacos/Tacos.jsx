import Taco_view from "../tacoview/Taco_view";
import axios from "axios";
import Loader from "../loader/Loader";
import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

export default function tacos() {
  const [tacos, setTaco] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const getTacos = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.jonas.io/api/v2/recipes?search=tacos`,
      );
      setTaco(response.data.data.recipes);
    } catch (err) {
      setError("Error with Loading Tacos");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getTacos();
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
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">Tacos</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tacos.map((tacos) => (
              <Taco_view tacos={tacos}></Taco_view>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
