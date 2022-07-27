import { useRouter } from "next/router";
import { createContext, useState, useEffect } from "react";
import Authentication from "../services/Authentication";

const MainContext = createContext({});

const Provider = ({ children }) => {
  const router = useRouter();
  //   Process Connexion route privée
  const [login, setLogin] = useState(null);
  const connectedAdmin = async (event, opts) => {
    event.preventDefault();
    console.log("e", event);
    console.log("opts", opts);

    const token = await Authentication.byPostToken(opts);

    console.log("token", token);
    console.log("router", router);
    if (token) {
      router.push("/");
      setLogin(true);
      localStorage.setItem("tokenRefresh", token.refresh);
      localStorage.setItem("tokenAccess", token.access);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("tokenRefresh")) {
      const token = localStorage.getItem("tokenRefresh");
      const refresh = async () => {
        const response = await Authentication.refresh(token);
        console.log("response", response);
        if (response.code != "token_not_valid") {
          localStorage.setItem("tokenAccess", response.access);
          setLogin(true);
        } else {
          setLogin(false);
        }
      };

      refresh();
    }

    console.log("router auth", router);
    if (
      !login &&
      router.pathname != "/authentification" &&
      !localStorage.getItem("tokenAccess")
    ) {
      router.push("authentification");
    }

    if (login && router.pathname == "/authentification") {
      console.log("back");
      router.push("/");
    }
  }, [router, login]);

  // Deconnected function
  const deconnectedAdmin = async (event) => {
    event.preventDefault();
    setLogin(null);
    localStorage.removeItem("tokenRefresh");
    localStorage.removeItem("tokenAccess");
  };

  return (
    <MainContext.Provider value={{ connectedAdmin, login, deconnectedAdmin }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
