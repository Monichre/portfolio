import "../styles/globals.css";

import { CssBaseline, GeistProvider } from "@geist-ui/core";

import Layout from "../components/Layout";
import { Particles } from "../components/Particles/Particles";

function MyApp({ Component, pageProps }) {
  return (
    <GeistProvider themeType={"dark"}>
      <CssBaseline />
      <Particles />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GeistProvider>
  );
}

export default MyApp;
