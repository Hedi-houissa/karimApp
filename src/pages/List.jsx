import React, { useState } from "react";
import Card from "../components/Card/Card";

function List() {
  const [listCars, setlistCars] = useState([]);

  const add = () => {
    const newCar = {
      headerCard: "car 2",
      title: "title 2",
      sub1: "sub2",
      sub2: "sub2",
    };
    setlistCars([...listCars, newCar]);
  };

  return (
    <div style={{ margin: " 20px 100px", display: "flex", flexWrap: "wrap" }}>
      {listCars.map((el) => (
        <Card data={el} key={el.title} />
      ))}

      <div
        style={{
          margin: "10px",
          height: "40px",
          padding: "10px",
          backgroundColor: "gray",
          cursor: "pointer",
        }}
        onClick={add}
      >
        creé
      </div>
    </div>
  );
}

export default List;
