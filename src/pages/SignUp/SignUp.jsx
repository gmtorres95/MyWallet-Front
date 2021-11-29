import React, { useState } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

import { createNewUser } from "../../services/userService";
import Wrapper from "./Wrapper";
import StyledInput from "../../styles/StyledInput";
import StyledButton from "../../styles/StyledButton";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const history = useHistory();

  function signUpHelper(e) {
    e.preventDefault();

    if (password !== confirmedPassword) return alert("As duas senhas devem ser idênticas!");

    setIsButtonEnabled(false);
    const body = {
      name,
      email,
      password,
    };
    createNewUser(body, history, setIsButtonEnabled);
  }

  return (
    <Wrapper>
      <h1>MyWallet</h1>
      <form onSubmit={isButtonEnabled ? signUpHelper : (e) => e.preventDefault()}>
        <StyledInput
          type="text"
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          minLength="3"
          maxLength="15"
          required
        />
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
        <StyledInput
          type="password"
          placeholder="Confirme a Senha"
          value={confirmedPassword}
          onChange={(e) => setConfirmedPassword(e.target.value)}
          minLength="4"
          required
        />
        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          Cadastrar
        </StyledButton>
      </form>
      <Link to="/">Já tem uma conta? Entre agora!</Link>
    </Wrapper>
  );
}
