import Head from "next/head";
import MainContext from "../src/contexts";
import { useContext } from "react";

export default function Autentification() {
  const { connectedAdmin } = useContext(MainContext);

  let opts = {
    email: "",
    password: "",
  };

  const handleChange = (e) => {
    if (e.target.id == "email") {
      opts.email = e.target.value;
    }

    if (e.target.id == "password") {
      opts.password = e.target.value;
    }
  };

  return (
    <div>
      <Head>
        <title>Diag+ Authentification</title>
        <meta name="description" content="Diagnostique en ligne" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white font-family-karla h-screen">
        <div className="w-full flex flex-wrap">
          <div className="w-full md:w-1/2 flex flex-col">
            <div className="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
              <span
                href="#"
                className="bg-black text-white font-bold text-xl p-4"
              >
                Diag<sup>+</sup>
              </span>
            </div>
            <div className="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
              <p className="text-center text-3xl">Bienvenue.</p>
              <form
                className="flex flex-col pt-3 md:pt-8"
                // onSubmit={(event) => {
                //   event.preventDefault();
                // }}
              >
                <div className="flex flex-col pt-4">
                  <label htmlFor="email" className="text-lg">
                    Email
                  </label>
                  <input
                    onChange={handleChange}
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <div className="flex flex-col pt-4">
                  <label htmlFor="password" className="text-lg">
                    Mot de passe
                  </label>
                  <input
                    onChange={handleChange}
                    type="password"
                    id="password"
                    placeholder="Mot de passe"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mt-1 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
                <button
                  onClick={(event) => {
                    connectedAdmin(event, opts);
                  }}
                  className="bg-black text-white font-bold text-lg hover:bg-gray-700 p-2 mt-8"
                >
                  Connexion
                </button>
              </form>
            </div>
          </div>
          <div className="w-1/2 shadow-2xl h-screen relative">
            <img
              alt="background"
              src="https://source.unsplash.com/IXUM4cJynP0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
