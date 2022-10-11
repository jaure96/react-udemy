import React, { useContext } from "react";
import { UserContext } from "./context/UserContext";

const LoginPage = () => {
  const { setUser } = useContext(UserContext);
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({ id: 123, name: "Juan", email: "juan@google.com" })
        }
      >
        Set user
      </button>
    </>
  );
};

export default LoginPage;
