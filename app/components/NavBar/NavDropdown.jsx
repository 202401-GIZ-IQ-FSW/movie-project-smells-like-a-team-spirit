"use client";
import { fetchDataToEndpoint } from "../../../utils/fetchData";
import NavCard from "./NavCard";
import React, { useEffect, useState } from "react";

// This component is a dropdown menu that displays the first 8 genres of a given endpoint
// It uses the NavCard component to display each genre
// The endpoint is passed as a prop to the component
// The data is fetched from the endpoint using the fetchDataToEndpoint function
// The data is then sliced to only show the first 8 genres

export default function NavDropdown({ endPoint, type }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchDataToEndpoint(endPoint, false).then((data) => {
      setData(data.genres.slice(0, 8));
    });
  }, [endPoint]);

  return (
    <div className="flex flex-col flex-wrap h-56 w-96 justify-center items-center rounded-sm">
      {data.map((genre) => {
        return (
          <NavCard key={genre.id} name={genre.name} id={genre.id} type={type} />
        );
      })}
    </div>
  );
}
