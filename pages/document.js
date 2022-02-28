import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const originalRenderPage = ctx.renderPage;

    // Run the React rendering logic synchronously
    ctx.renderPage = () =>
      originalRenderPage({
        // Useful for wrapping the whole react tree
        enhanceApp: (App) => App,
        // Useful for wrapping in a per-page basis
        enhanceComponent: (Component) => Component,
      });

    // Run the parent `getInitialProps`, it now includes the custom `renderPage`
    const initialProps = await Document.getInitialProps(ctx);

    return initialProps;
  }

  render() {
    return (
      <Html>
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
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
