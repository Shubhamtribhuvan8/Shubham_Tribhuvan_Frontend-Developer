import axios from "axios";
import React, { useState } from "react";
import Capsule from "./Capsule";

export default function Capsulesearch() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (queryParams) => {
    axios
      .get("https://api.spacexdata.com/v3/capsules", { params: queryParams })
      .then((response) => {
        console.log(response.data);
        setSearchResults(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <Capsule onSearch={handleSearch} />
      {searchResults.map((result) => (
        <div key={result.capsule_serial}>
          <p>Capsule Serial: {result.capsule_serial}</p>
          <p>Capsule ID: {result.capsule_id}</p>
        </div>
      ))}
    </div>
  );
}
