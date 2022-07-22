import "../styles/globals.css";

import { CssBaseline, GeistProvider } from "@geist-ui/core";

import Layout from "../components/Layout";

function MyApp({ Component, pageProps, router }) {
  return (
    <GeistProvider>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}

export default MyApp;
