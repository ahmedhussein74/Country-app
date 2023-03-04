import axios from "axios";
import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Card, CardContent, CardMedia, Typography, Skeleton } from "@mui/material";

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
    <Card className="country mx-auto mt-12">
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
  ) : (
    <Skeleton
      variant="rounded"
      animation="wave"
      className="skeleton mx-auto mt-12"
    />
  );
};

export default Country;
