import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import { authenticateUser } from '../../services/userService';
import UserContext from '../../contexts/UserContext';
import Wrapper from './Wrapper';
import StyledInput from '../../styles/StyledInput';
import StyledButton from '../../styles/StyledButton';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    if (user) history.push('/main');
  }, [history, user]);

  function signInHelper(e) {
    e.preventDefault();
    setIsButtonEnabled(false);
    const body = {
      email,
      password,
    };
    authenticateUser(body, setUser, setIsButtonEnabled, history);
  }

  return (
    <Wrapper>
      <h1>MyWallet</h1>
      <form onSubmit={isButtonEnabled ? signInHelper : (e) => e.preventDefault()}>
        <StyledInput
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <StyledInput
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          minLength="4"
          required
        />
        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          Entrar
        </StyledButton>
      </form>
      <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
    </Wrapper>
  );
}
