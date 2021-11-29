import React from "react";

import * as Icons from "./StyledIcons";
import Wrapper from "./Wrapper.js";
import Header from "./Header";
import Balance from "./Balance";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Wrapper>
      <Header />
      <Balance />
      <nav>
        <button>
          <Link to={"/new-entry/income"}>
            <Icons.AddIcon />
            <span>Nova entrada</span>
          </Link>
        </button>
        <button>
          <Link to="/new-entry/outcome">
            <Icons.RemoveIcon />
            <span>Nova saída</span>
          </Link>
        </button>
      </nav>
    </Wrapper>
  );
}
