import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";

import UserContext from "../contexts/UserContext";
import { createNewEntry } from "../service/service";

import styled from "styled-components";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function NewEntry() {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const isIncome = (useParams().type === "income");
    const history = useHistory();
    const {user} = useContext(UserContext);

    function newEntryHelper(event) {
        event.preventDefault();

        const value = Number(amount.replace(",","."));

        if(value <= 0) return alert("Insira um valor maior do que zero");
        if(isNaN(value)) return alert("Insira um valor válido");

        setIsButtonEnabled(false);
        const body = {
            description,
            value,
            income: isIncome
        };

        createNewEntry(body, user.token, history, setIsButtonEnabled);
    }

    return (
        <>
            <Header>{isIncome ? "Nova entrada" : "Nova saída"}</Header>
            <Form onSubmit={isButtonEnabled ? newEntryHelper : e => e.preventDefault()}>
                <Input
                    type="text"
                    placeholder="Valor"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    required
                />
                <Input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                />
                <Button type="submit" isButtonEnabled={isButtonEnabled}>
                {isIncome ? "Salvar entrada" : "Salvar saída"}
            </Button>
            </Form>
        </>
    );
}

const Header = styled.h1`
    margin: 24px 24px 36px;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    color: #FFF;
`;