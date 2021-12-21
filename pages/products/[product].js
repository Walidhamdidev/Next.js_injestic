import { callShopify } from "@/lib/shopify";
// import ProductSection from "@/components/ProductSection";
import { useRouter } from "next/router";

function ProductPage({ product: singleProduct }) {
  const router = useRouter();

  return (
    <div className="min-h-screen py-12 sm:pt-20">
      {router.query.handle}

      {/* <ProductSection productData={productData} /> */}
    </div>
  );
}

const gql = String.raw;

const querySingleProduct = gql`{
  query SingleProduct($handle:String!){
   
      productByHandle(handle: $handle) {
        title
        description
        updatedAt
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        images(first: 1) {
          edges {
            
            node {
            
              altText
              transformedSrc
            }
          }
        }
      }
  
}`;

export default ProductPage;
