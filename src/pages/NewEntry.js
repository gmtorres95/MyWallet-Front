import Input from "../components/Input";
import Button from "../components/Button";
import Form from "../components/Form";

import UserContext from "../contexts/UserContext";

import styled from "styled-components";
import { useContext, useState } from "react";
import { useHistory, useParams } from "react-router";

export default function NewEntry() {
    const [amount, setAmount] = useState("");
    const [description, setDescription] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const isOutcome = (useParams().type === "outcome");
    const history = useHistory();
    const {user} = useContext(UserContext);

    function newEntryHelper(event) {
        event.preventDefault();

        if(isOutcome) {

        }
        else {

        }
        history.push("/main")
    }

    return (
        <>
            <Header>{isOutcome ? "Nova saída" : "Nova entrada"}</Header>
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
                    required
                />
                <Button type="submit" isButtonEnabled={isButtonEnabled}>
                {isOutcome ? "Salvar saída" : "Salvar entrada"}
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