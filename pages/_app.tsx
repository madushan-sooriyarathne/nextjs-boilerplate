import { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import GlobalStyles from "@styles/global-styles";
import theme from "@styles/theme";

// local font declarations
import "@styles/fonts.css";

const App: React.FC<AppProps> = ({
  Component,
  pageProps,
}: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <title> Next Boilerplate with Framer motion & styled component</title>
      </Head>
      {/* View port meta tags here */}
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
