import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";

export const prefix = process.env.BASE_PATH || "";
export default function MyApp({ Component, pageProps }) {
  function SafeHydrate({ children }) {
    return (
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : children}
      </div>
    );
  }
  return (
    <Provider store={store}>
      <SafeHydrate>
        <Component {...pageProps} />
      </SafeHydrate>
    </Provider>
  );
}
