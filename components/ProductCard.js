import Image from "next/image";
import Link from "next/link";
import Price from "@/components/Price";
import { formatter } from "@/utils/helpers";

function ProductCard({ product }) {
  const { handle, title, description, priceRange, images, tags } = product.node;

  const price = priceRange.minVariantPrice.amount;
  const image = images.edges[0].node;

  return (
    <Link href={`/products/${handle}`} passHref>
      <a className="h-120 w-72 rounded shadow-lg mx-auto border border-palette-lighter">
        <div className="h-72 border-b-2 border-palette-lighter relative">
          <Image
            src={image.transformedSrc}
            alt={image.altText}
            layout="fill"
            className="transform duration-500 ease-in-out hover:scale-110"
          />
        </div>
        <div className="h-48 relative">
          <div className="font-primary text-palette-primary text-2xl pt-4 px-4 font-semibold">
            {title}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {description || "Description"}
          </div>
          <div className="text-lg text-gray-600 p-4 font-primary font-light">
            {tags[0] || "Tag"}
          </div>

          <div
            className="text-palette-dark font-primary font-medium text-base absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2 bg-palette-lighter 
            rounded-tl-sm triangle"
          >
            <Price currency="$" num={price} numSize="text-lg" />
          </div>
        </div>
      </a>
    </Link>
  );
}

export default ProductCard;
