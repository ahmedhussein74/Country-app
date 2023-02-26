import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const Country = () => {
  const { id } = useParams();
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    }, []);
  });

  return (
    <Card sx={{ maxWidth: 345 }} className="mx-auto mt-12">
      <CardMedia
        component="img"
        alt={countries[id].name}
        height="140"
        image={countries[id].flags.png}
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {countries[id].name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {countries[id].capital}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {countries[id].region}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {countries[id].population}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
          {countries[id].area} Km
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Country;
