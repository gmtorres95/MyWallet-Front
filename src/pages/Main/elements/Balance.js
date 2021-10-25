import EntryTable from "./EntryTable";

import UserContext from "../../../contexts/UserContext";

import styled from "styled-components";
import { useContext, useState } from "react";

export default function Balance() {
    const [entries, setEntries] = useState([]);
    const {user} = useContext(UserContext);
    
    return (
        <Wrapper>
            {entries.length ? 
                <EntryTable entries={entries} />
                : <p>Não há registros de entrada ou saída</p>
            }
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

    p {
        width: 100%;
        height: 100%;
        padding: 0px 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        color: #868686;
    }
`;