import Head from "next/head";

function HeadInfo({ title }) {
  return (
    <Head>
      <title>{title}</title>
      {/* <meta property="og:title" content="My page title" key="title" /> */}
    </Head>
  );
}

export default HeadInfo;
