import { getProductsInCollection } from "../lib/shopify";
import ProductList from "../components/ProductList";
import Hero from "../components/Hero";
import Head from "next/head";

export default function Home({ products }) {
  return (
    <div className="">
      <Head>
        <title>Selling jewelries</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
        <link rel="shortcut icon" href="../favicon.ico" />
        <meta name="description" content="Selling  jewelries at Injestic" />
        <meta property="og:title" content="Injestic" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.injestic.com" />
        <meta property="og:image" content="https://www.injestic.com" />
        <meta
          property="og:description"
          content="Selling jewelries at Injestic"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Selling at Injestic" />
      </Head>
      <Hero />
      <ProductList products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
