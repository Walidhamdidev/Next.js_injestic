import Image from "next/image";
import React from "react";
import ProductForm from "./ProductForm";

export default function ProductPageContent({ product }) {
  return (
    <div className="flex justify-center space-x-5">
      {product.images.edges?.map((img) => {
        const { transformedSrc, altText, id } = img.node;

        return (
          <Image
            key={id}
            src={transformedSrc}
            alt={altText}
            width={300}
            height={300}
          />
        );
      })}
      <ProductForm product={product} />
    </div>
  );
}
