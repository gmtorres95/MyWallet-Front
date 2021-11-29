import React from 'react';
import { Link } from 'react-router-dom';

import * as Icons from './StyledIcons';
import Wrapper from './Wrapper';
import Header from './Header';
import Balance from './Balance';

export default function Main() {
  return (
    <Wrapper>
      <Header />
      <Balance />
      <nav>
        <button type="button">
          <Link to="/new-entry/income">
            <Icons.AddIcon />
            <span>Nova entrada</span>
          </Link>
        </button>
        <button type="button">
          <Link to="/new-entry/outcome">
            <Icons.RemoveIcon />
            <span>Nova saída</span>
          </Link>
        </button>
      </nav>
    </Wrapper>
  );
}
