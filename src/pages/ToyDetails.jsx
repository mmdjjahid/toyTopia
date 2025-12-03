import React from "react";
import { useLoaderData, useParams } from "react-router";
import CardInfo from "../component/CardInfo";
const ToyDetails = () => {
    const { id } = useParams();
  const toys = useLoaderData();
  
  const toyFind = toys.find((toy) => parseInt(toy.toyId) === parseInt(id));
    // console.log(toyFind.toyName)

  return (
    <>
    
    <div>
      
      <CardInfo toyFind={toyFind}></CardInfo>
    </div>
    </>
  );
};

export default ToyDetails;
