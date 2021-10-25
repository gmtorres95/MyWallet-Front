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

        if(amount <= 0) return alert("Insira um valor maior do que zero");

        setIsButtonEnabled(false);
        const body = {
            description,
            value: amount,
            income: isIncome
        };

        createNewEntry(body, user.token, history, setIsButtonEnabled);
    }

    return (
        <>
            <Header>{isIncome ? "Nova entrada" : "Nova saída"}</Header>
            <Form onSubmit={isButtonEnabled ? newEntryHelper : e => e.preventDefault()}>
                <Input
                    type="number"
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