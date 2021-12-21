import ProductListings from "@/components/ProductListings";
import StoreHeading from "@/components/StoreHeading";
import { productsQuery } from "@/lib/shopify";

function IndexPage({ products }) {
  return (
    <div className="mx-auto max-w-6xl">
      <StoreHeading />
      <ProductListings products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await productsQuery();

  return {
    props: {
      products,
    },
  };
}

export default IndexPage;
