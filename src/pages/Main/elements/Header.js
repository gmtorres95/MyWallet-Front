import styled from "styled-components";
import { AiOutlineExport } from "react-icons/ai";
import { Link } from "react-router-dom";

export default function Header({name}) {
    return (
        <Wrapper>
            Olá, {name}
            <Link to="/">
                <ExitDoor />
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