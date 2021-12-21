import ProductPageContent from "@/components/ProductPageContent";
import { callShopify, getAllProducts, getProduct } from "@/lib/shopify";
// import ProductSection from "@/components/ProductSection";

function ProductPage({ product }) {
  return (
    <div className="min-h-screen py-12 sm:pt-20">
      <ProductPageContent product={product} />
    </div>
  );
}

export async function getStaticPaths() {
  const allProducts = await getAllProducts();

  const paths = allProducts.map((item) => {
    const product = String(item.node.handle);

    return {
      params: { product },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const product = await getProduct(params.product);

  return {
    props: {
      product,
    },
  };
}

export default ProductPage;
