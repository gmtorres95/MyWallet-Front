import SignForm from "../components/SignForm";

import UserContext from "../contexts/UserContext";

import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";

export default function SignIn() {
    const {user} = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        if(!!user) history.push("/main");
    }, [user, history]);

    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <SignForm />
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
        font-family: Saira Stencil One;
        font-size: 32px;
        color: #FFF ;
    }
`;