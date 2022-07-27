import Head from "next/head";
import Navigation from "../src/components/Navigation";
import MainContext from "../src/contexts";
import { useContext } from "react";
import { useRouter } from "next/router";

const Home = () => {
  const { login } = useContext(MainContext);
  const router = useRouter();

  return login ? (
    <div>
      <Head>
        <title>Diag+ Accueil</title>
        <meta name="description" content="Diagnostique en ligne" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="bg-gray-700 h-screen grid grid-cols-12 py-10">
        <div className="col-start-2 col-span-10 bg-lime-600 rounded-3xl grid grid-cols-8">
          <div className="pl-5">
            <Navigation />
          </div>
          <div className="col-span-7 bg-white rounded-3xl"></div>
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Home;
