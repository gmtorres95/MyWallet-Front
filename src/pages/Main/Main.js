import Header from "./elements/Header";
import Balance from "./elements/Balance";
import EntryButton from "./elements/EntryButton";

import styled from "styled-components";

export default function Main() {
    return (
        <>
            <Header name="Fulano" />
            <Balance />
            <Menu>
                <EntryButton isIncome={true}/>
                <EntryButton isIncome={false}/>
            </Menu>
        </>
    );
}

const Menu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 14px 24px;
`;