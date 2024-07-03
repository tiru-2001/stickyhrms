import React from "react";
import Productcard from "./Productcard";
import productData from "./productData";

const ProductContainer = () => {
  return (
    <div className="App">
      {productData.map((data, index) => (
        <Productcard data={data} />
      ))}
    </div>
  );
};

export default ProductContainer;
