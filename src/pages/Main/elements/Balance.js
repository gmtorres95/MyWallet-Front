import EntryTable from "./EntryTable";

import UserContext from "../../../contexts/UserContext";

import styled from "styled-components";
import { useContext } from "react";

export default function Balance() {
    const {user} = useContext(UserContext);

    const entries = [
        {
            date: "30/11",
            description: "Almoço mãe",
            value: 39.9,
            income: false
        },
        {
            date: "27/11",
            description: "Mercado",
            value: 542.54,
            income: false
        },
        {
            date: "26/11",
            description: "Compras churrasco",
            value: 67.6,
            income: false
        },
        {
            date: "20/11",
            description: "Empréstimo Maria",
            value: 500,
            income: true
        },
        {
            date: "15/11",
            description: "Salário",
            value: 3000,
            income: true
        },
    ]
    
    return (
        <Wrapper>
            <EntryTable entries={entries} />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: calc(100vw - 48px);
    height: calc(100vh - 221px);
    border-radius: 5px;
    margin: 0px 24px;
    padding: 0px 12px 10px 16px;
    background-color: #FFF;
`;