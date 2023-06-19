import "@/styles/globals.scss";
import Head from "next/head";
import Layout from "./component/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>IMDB Clone</title>
        <meta name="description" content="imdb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
