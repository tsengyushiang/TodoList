import { Provider } from "react-redux";
import store from "../redux/reducers";
import { appWithTranslation } from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
