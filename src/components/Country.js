import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const Country = () => {
  const [country, setCountry] = useState("All");
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setAllCountries(res.data);
    }, []);
  });

  const handleChange = (e) => {
    setCountry(e.target.value);
    if (country == "All") {
      setCountries(allCountries);
    } else {
      setCountries(
        allCountries.filter((element) => {
          return element.region == country;
        })
      );
    }
  };

  return (
    <>
      <div className="w-1/4 mx-auto my-4">
        <FormControl fullWidth>
          <InputLabel>Region</InputLabel>
          <Select label="Region" value={country} onChange={handleChange}>
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Africa">Africa</MenuItem>
            <MenuItem value="Americas">Americas</MenuItem>
            <MenuItem value="Asia">Asia</MenuItem>
            <MenuItem value="Europe">Europe</MenuItem>
            <MenuItem value="Oceania">Oceania</MenuItem>
          </Select>
        </FormControl>
      </div>
      <section className="py-8 justify-center">
        {countries.map((val, index) => (
          <div
            className="country rounded shadow-lg overflow-hidden"
            key={index}
          >
            <img src={val.flags.png} className="d-block w-full" />
            <p className="flex items-center text-2xl truncate">{val.name}</p>
            <p className="flex items-center">{val.capital || "Not Found"}</p>
            <p className="flex items-center">{val.region}</p>
            <p className="flex items-center">{val.population}</p>
          </div>
        ))}
      </section>
    </>
  );
};

export default Country;
