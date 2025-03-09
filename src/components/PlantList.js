import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants }) {
  console.log("Plants received in PlantList:", plants); 

  return (
    <ul className="cards">
      {plants.length > 0 ? (
        plants.map((plant) => <PlantCard key={plant.id} plant={plant} />)
      ) : (
        <p>No plants available</p> 
      )}
    </ul>
  );
}

export default PlantList;
