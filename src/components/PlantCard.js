import React from "react";

function PlantCard({ plant }) {
  console.log("Rendering plant:", plant);

  return (
    <li className="card">
      <img src={`/images/${plant.image}`} alt={plant.name} />
      <h4>{plant.name}</h4>
      <p>Price: ${plant.price}</p>
      {plant.inStock ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
