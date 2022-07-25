import "../styles/globals.css";
import { Provider as MainContext } from "../src/contexts";

function MyApp({ Component, pageProps }) {
  return (
    <MainContext>
      <Component {...pageProps} />
    </MainContext>
  );
}

export default MyApp;
