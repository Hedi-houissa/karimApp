import React from "react";
import srcCar from "../../assets/images/car.jpeg";
import "./card.css";
function Card({ data }) {
  return (
    <div className="card">
      <div className="partTop">
        <div className="headerCard"> {data?.headerCard}</div>
        <img width="200px" height="250px" src={srcCar} alt="" />
      </div>
      <div className="partButtom">
        <div className="title">{data?.title}</div>
        <div className="line"> </div>
        <div className="sub1">{data?.sub1}</div>
        <div className="sub2">{data?.sub2}</div>
      </div>
    </div>
  );
}

export default Card;
