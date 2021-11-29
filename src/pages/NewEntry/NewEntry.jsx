import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";
import Swal from "sweetalert2";

import { createNewEntry } from "../../services/entriesService";
import UserContext from "../../contexts/UserContext";
import StyledInput from "../../styles/StyledInput";
import StyledButton from "../../styles/StyledButton";
import Wrapper from "./Wrapper";

export default function NewEntry() {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isButtonEnabled, setIsButtonEnabled] = useState(true);
  const { user } = useContext(UserContext);
  const isIncome = useParams().type === "income";
  const history = useHistory();

  function newEntryHelper(e) {
    e.preventDefault();

    const value = Number(amount.replace(",", "."));
    if (value <= 0)
      return Swal.fire("Entrada inválida!", "Insira um valor maior do que zero", "error");
    if (isNaN(value))
      return Swal.fire("Entrada inválida!", "Insira um valor válido", "error");

    setIsButtonEnabled(false);
    const body = {
      description,
      value,
      income: isIncome,
    };
    createNewEntry(body, user.token, history, setIsButtonEnabled);
  }

  return (
    <Wrapper>
      <h1>{isIncome ? "Nova entrada" : "Nova saída"}</h1>
      <form onSubmit={isButtonEnabled ? newEntryHelper : (e) => e.preventDefault()}>
        <StyledInput
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <StyledInput
          type="text"
          placeholder="Descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <StyledButton type="submit" isButtonEnabled={isButtonEnabled}>
          {isIncome ? "Salvar entrada" : "Salvar saída"}
        </StyledButton>
      </form>
    </Wrapper>
  );
}
