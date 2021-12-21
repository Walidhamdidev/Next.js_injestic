import React from "react";

export default function ProductPageContent({ product }) {
  return (
    <div>
      <h1 className="text-yellow-300 bold text-5xl">{product.title}</h1>
    </div>
  );
}
