import React from "react";
import ProductCard from "./ProductCard";

export default function ProductListings({ products }) {
  console.log(products);
  return (
    <div className="grid grid-cols-3 my-5 gap-y-16">
      {products.map((product) => {
        return <ProductCard product={product} />;
      })}
    </div>
  );
}
