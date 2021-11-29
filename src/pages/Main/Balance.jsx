import React, { useContext, useEffect, useState } from "react";

import { getEntries } from "../../service/service";
import UserContext from "../../contexts/UserContext";
import EntryTable from "./EntryTable";

export default function Balance() {
  const [entries, setEntries] = useState([]);
  const { user } = useContext(UserContext);

  useEffect(() => getEntries(user.token, setEntries), [user.token]);

  return (
    <div>
      {entries.length
        ? <EntryTable entries={entries} />
        : <p>Não há registros de entrada ou saída</p>
      }
    </div>
  );
}
