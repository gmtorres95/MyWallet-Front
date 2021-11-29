import React, { useContext } from "react";
import { useHistory } from "react-router";

import UserContext from "../../contexts/UserContext";
import * as Icons from "./StyledIcons";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  function signOut() {
    localStorage.clear();
    setUser(undefined);
    history.push("/")
  }

  return (
    <header>
      Olá, {user.data.name}
      <Icons.ExitDoor onClick={signOut} />
    </header>
  );
}
