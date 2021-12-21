const domain = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN;
const storefrontAccessToken =
  process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN;
const collection = process.env.NEXT_PUBLIC_SHOPIFY_COLLECTION;

export async function callShopify(query, variables = {}) {
  const fetchUrl = `https://${domain}/api/2021-01/graphql.json`;

  const fetchOptions = {
    endpoint: fetchUrl,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
  };

  try {
    const data = await fetch(fetchUrl, fetchOptions).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    throw new Error("Could not fetch products!");
  }
}

const gql = String.raw;

export async function productsQuery() {
  const query = gql`
    query Products {
      products(first: 6) {
        edges {
          node {
            title
            handle
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
        }
      }
    }
  `;

  const response = await callShopify(query);
  const allProducts = response.data.products.edges
    ? response.data.products.edges
    : [];
  return allProducts;
}

export async function getAllProducts() {
  const query = gql`
    {
      products(first: 10) {
        edges {
          node {
            handle
            id
          }
        }
      }
    }
  `;
  const response = await callShopify(query);
  const slugs = response.data.products.edges
    ? response.data.products.edges
    : [];
  return slugs;
}

export async function getProduct(handle) {
  const query = gql`
    {
      productByHandle(handle: "${handle}") {
        title
        description
        updatedAt
        tags

        images(first: 1) {
          edges {
            node {
              altText
              transformedSrc
            }
          }
        }
      }
    }
  `;
  const response = await callShopify(query);
  const product = response.data.productByHandle
    ? response.data.productByHandle
    : [];
  return product;
}
