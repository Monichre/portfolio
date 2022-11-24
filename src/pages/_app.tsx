import { CssBaseline, GeistProvider } from '@geist-ui/core';
import { ThemeProvider } from 'styled-components';

import Layout from '../components/Layout';
import { Particles } from '../components/Particles/Particles';
import { GlobalStyles } from '../styles/GlobalStyles';

// import '../styles/Navbar.module.css';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyles />
      <GeistProvider themeType={"dark"}>
        <CssBaseline />
        <Particles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GeistProvider>
    </ThemeProvider>
  );
}

export default MyApp;
