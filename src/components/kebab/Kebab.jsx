import axios from "axios";
import React, { useEffect, useState } from "react";
import Loader from "../loader/Loader";
import Kebab_view from "../kebabview/Kebab_view";
import Navbar from "../navbar/Navbar";

export default function kebab() {
  const [kebabs, setKebab] = useState([]);
  const [loader, setLoader] = useState(true);
  const [error, setError] = useState("");

  const getKebabs = async () => {
    try {
      const response = await axios.get(
        `https://forkify-api.jonas.io/api/v2/recipes?search=kebab`,
      );
      setKebab(response.data.data.recipes);
    } catch (err) {
      setError("Error with Loading Kebabs");
    } finally {
      setLoader(false);
    }
  };

  useEffect(() => {
    getKebabs();
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
        <h1 className="text-3xl font-bold text-center mb-8 mt-8">Kebabs</h1>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {kebabs.map((kebab) => (
              <Kebab_view kebab={kebab}></Kebab_view>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
