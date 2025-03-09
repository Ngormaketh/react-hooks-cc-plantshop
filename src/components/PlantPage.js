import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  useEffect(() => {
    fetch("/plants")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched plants:", data); 
        setPlants(data);
      })
      .catch((error) => console.error("Error fetching plants:", error));
  }, []);

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plants} />
    </main>
  );
}

export default PlantPage;
