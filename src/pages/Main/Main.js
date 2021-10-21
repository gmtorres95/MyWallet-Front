import Header from "./elements/Header";
import Balance from "./elements/Balance";
import NewEntry from "./elements/NewEntry";

import styled from "styled-components";

export default function Main() {
    return (
        <>
            <Header name="Fulano" />
            <Balance />
            <Menu>
                <NewEntry isIncome={true}/>
                <NewEntry isIncome={false}/>
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