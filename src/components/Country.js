import axios from "axios";
import { Skeleton } from "@mui/material";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

const Country = () => {
  const { id } = useParams();
  const [countries, setCountries] = useState([]);
  const [load, setLoad] = useState(false);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
      setLoad(true);
    }, []);
  });

  return load ? (
    <div className="country mx-auto mt-12 shadow-lg rounded overflow-hidden">
      <img
        alt={countries[id].name}
        src={countries[id].flags.png}
        className="w-full"
      />
      <div className="p-2">
        <h1 className="font-black text-xl">{countries[id].name}</h1>
        <p className="py-1">Capital : {countries[id].capital}</p>
        <p className="py-1">Region : {countries[id].region}</p>
        <p className="py-1">Population : {countries[id].population}</p>
        <p className="py-1">Area : {countries[id].area} Km</p>
      </div>
    </div>
  ) : (
    <Skeleton
      variant="rounded"
      animation="wave"
      width={300}
      height={350}
      className="mx-auto mt-12"
    />
  );
};

export default Country;
