import { formatter } from "@/utils/helpers";
import { useState, useContext } from "react";
import ProductOptions from "./ProductOptions";

function ProductForm({ product }) {
  const allVariantOptions = product.options.map((index, variant) => {
    const allOptions = {};

    allOptions[variant.name] = variant.values;
    return {
      id: variant.id,
      title: product.title,
      handle: product.handle,
      image: product.images?.edges[0].node.transformedSrc,
      options: allOptions,
      variantTitle: variant.name,
      // variantPrice: product.priceRangeV2.minVariantPrice.amount,
      variantQuantity: 1,
    };
  });

  const defaultValues = {};
  product.options.map((item) => {
    defaultValues[item.name] = item.values[0];
  });

  const [selectedVariant, setSelectedVariant] = useState(allVariantOptions[0]);
  const [selectedOptions, setSelectedOptions] = useState(defaultValues);

  function setOptions(name, value) {
    setSelectedOptions((prevState) => {
      return { ...prevState, [name]: value };
    });

    const selection = {
      ...selectedOptions,
      [name]: value,
    };

    allVariantOptions.map((item) => {
      if (JSON.stringify(item.options) === JSON.stringify(selection)) {
        setSelectedVariant(item);
      }
    });
  }

  return (
    <div className="rounded-2xl p-4 shadow-lg flex flex-col w-full md:w-1/3">
      <h2 className="text-2xl font-bold">{product.title}</h2>
      <span className="pb-3">
        {/* {formatter.format(product.priceRangeV2.minVariantPrice.amount)} */}
      </span>
      {product.options.map(({ name, values }) => (
        <ProductOptions
          key={`key-${name}`}
          name={name}
          values={values}
          selectedOptions={selectedOptions}
          setOptions={setOptions}
        />
      ))}
      <button
        // onClick={() => {
        //   addToCart(selectedVariant);
        // }}
        className="bg-black rounded-lg text-white px-2 py-3 mt-3 hover:bg-gray-800"
      >
        Add To Card
      </button>
    </div>
  );
}

export default ProductForm;
