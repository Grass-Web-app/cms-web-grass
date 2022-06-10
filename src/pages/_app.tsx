import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../app/store";

export const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function MyApp({ Component, pageProps }) {
  function SafeHydrate({ children }) {
    return (
      <div suppressHydrationWarning>
        {typeof window === "undefined" ? null : children}
      </div>
    );
  }
  return (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="Fustadesign" />
      <meta
        name="description"
        content="¡Este es un ejemplo del meta para cambiar luego este texto!"
      />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.cms.fustadesign.com" />
      <meta property="og:title" content="CMS-Fustadesign" />
      <meta
        property="og:description"
        content="¡Este es un ejemplo del meta para cambiar luego este texto!"
      />
      <meta property="og:image" content="/pasto.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.cms.fustadesign.com" />
      <meta property="twitter:title" content="CMS-Fustadesign" />
      <meta
        property="twitter:description"
        content="¡Este es un ejemplo del meta para cambiar luego este texto!"
      />
      <meta property="twitter:image" content="/pasto.png" />
      <Provider store={store}>
        <SafeHydrate>
          <Component {...pageProps} />
        </SafeHydrate>
      </Provider>
    </>
  );
}
