import React from "react";
import Router from "next/router";
import MainContext from "../contexts";
import { useContext } from "react";

const loginRoute = "/authentification"; // Define your loginRoute route address.

/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */

const checkUserAuthentication = () => {
  // const { login } = useContext(MainContext);
  // console.log("login", login);
  return { auth: true }; // change null to { auth: true } for test it.
};

const WrappedComponent = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    return <WrappedComponent {...props} />;
  };

  hocComponent.getInitialProps = async (context) => {
    // const userAuth = context.auth;
    const userAuth = checkUserAuthentication();

    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: loginRoute,
        });
        context.res?.end();
      } else {
        Router.replace(loginRoute);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }

    return { userAuth };
  };

  return hocComponent;
};

export default WrappedComponent;
