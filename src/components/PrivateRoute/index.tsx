import { Navigate } from "react-router-dom";
import { AuthContext } from "../../auth/context/AuthContext";
import React, { useContext } from "react";
import { auth } from "../../auth/firebase/firebase";

type Props = {
  component: React.FC;
};

export const PrivateRoute: React.FC<Props> = ({
  component: Component,
  ...rest
}) => {
  const currentUser = useContext(AuthContext);
  const handleLogout = async () => {
    await auth.signOut();
  };
  if (currentUser)
    return (
      <>
        <Component>
          <button onClick={handleLogout}>Logout</button>
        </Component>
      </>
    );
  return <Navigate to="/signin" />;
};