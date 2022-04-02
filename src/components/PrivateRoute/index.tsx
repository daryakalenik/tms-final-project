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

  const handleLogout: () => Promise<void> = async () => {
    await auth.signOut();
  };

  if (currentUser)
    return (
      <>
        <Component>
          <button onClick={handleLogout}>Log out</button>
        </Component>
      </>
    );
  return <Navigate to="/signin" />;
};
