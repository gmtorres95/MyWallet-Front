import UserContext from "../../../contexts/UserContext";

import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useContext } from "react";

export default function Header() {
    const {user} = useContext(UserContext);

    return (
        <Wrapper>
            Olá, {user.data.name}
            <Link to="/">
                <ExitDoor onClick={() => localStorage.clear()}/>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    color: #FFF;
`;

const ExitDoor = styled(AiOutlineExport)`
    font-size: 26px;
    color: #FFF;
`;