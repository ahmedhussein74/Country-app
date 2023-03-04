import axios from "axios";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    }, []);
  });

  return (
    <section className="py-8 justify-center">
      {countries.map((val, index) => (
        <div key={index} className="shadow-lg rounded overflow-hidden">
          <img className="w-full" src={val.flags.png} alt={val.name} />
          <article className="p-2">
            <h1 className="font-bold">{val.name}</h1>
            <span className="text-gray-500">{val.capital || "Not Found"}</span>
            <Link
              to={"/" + index}
              replace="true"
              className="block w-fit text-white px-2 py-1 mt-2 bg-blue-700 rounded"
            >
              Show more
            </Link>
          </article>
        </div>
      ))}
    </section>
  );
};

export default Countries;
