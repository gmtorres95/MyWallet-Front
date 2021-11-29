import React, { useContext } from "react";

import UserContext from "../../contexts/UserContext";
import * as Icons from "./StyledIcons";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  function signOutHelper() {
    localStorage.clear();
    setUser(undefined);
  }

  return (
    <header>
      Olá, {user.data.name}
      <Icons.ExitDoor onClick={signOutHelper} />
    </header>
  );
}
