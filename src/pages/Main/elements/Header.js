import { clearLocalStorage } from "../../../utils/localStorageUtils";
import UserContext from "../../../contexts/UserContext";
import { endSession } from "../../../service/service";

import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { useContext } from "react";

export default function Header() {
    const {user} = useContext(UserContext);
    const history = useHistory();

    return (
        <Wrapper>
            Olá, {user.data.name}
            <Link to="/">
                <ExitDoor onClick={() => endSession(user.token, history)}/>
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