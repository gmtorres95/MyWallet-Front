import styled from "styled-components";

const Input = styled.input`
    width: calc(100% - 50px);
    height: 58px;
    border-radius: 5px;
    border: none;
    margin: 6px 25px;
    padding: 0px 16px;
    background-color: #FFF;
    font-family: Raleway;
    font-size: 20px;
    font-weight: 400;
    color: #000;

    &::placeholder {
        font-family: Raleway;
        font-size: 20px;
        font-weight: 400;
        color: #000;
    }
`;

export default Input;