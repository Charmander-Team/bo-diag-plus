import { createContext, useState } from "react";

const MainContext = createContext({});

const Provider = ({ children }) => {
  //   Process Connexion route privée
  const [login, setLogin] = useState(null);
  const connectedAdmin = async (event, opts) => {
    event.preventDefault();
    console.log("e", event);
    console.log("opts", opts);
    setLogin(true);
  };

  return (
    <MainContext.Provider value={{ connectedAdmin, login }}>
      {children}
    </MainContext.Provider>
  );
};

export { Provider };
export default MainContext;
