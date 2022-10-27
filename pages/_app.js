import Head from "next/head";
import { appWithTranslation } from "next-i18next";
import { Provider } from "react-redux";
import store from "../config/configureStore";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
        <meta charSet="utf-8" />
      </Head>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}

export default appWithTranslation(MyApp);
