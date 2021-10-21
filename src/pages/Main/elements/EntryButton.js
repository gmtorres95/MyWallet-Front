import styled from "styled-components";
import { CgAdd, CgRemove } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function EntryButton({isIncome}) {
    return (
        <Wrapper>
            <Link to={isIncome ? "/new-entry/income" : "/new-entry/outcome"}>
                {isIncome ? <AddIcon /> : <RemoveIcon />}
                {isIncome ? <span>Nova entrada</span> : <span>Nova saída</span>}
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.button`
    width: calc((100% - 16px) / 2);
    height: 114px;
    border-radius: 5px;
    background-color: #A328D6;

    a {
        height: 100%;
        width: 100%;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        color: #FFF;
        font-family: Raleway;
        font-size: 17px;
        font-weight: 700;
        text-decoration: none;
    }

    span {
        width: 0px;
        line-height: 20px;
    }
`;

const AddIcon = styled(CgAdd)`
    font-size: 26px;
`;

const RemoveIcon = styled(CgRemove)`
    font-size: 24px;
`;