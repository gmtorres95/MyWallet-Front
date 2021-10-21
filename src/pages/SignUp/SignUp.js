import SignForm from "../../components/SignForm/SignForm";

import styled from "styled-components";

export default function SignUp() {
    return (
        <Wrapper>
            <h1>MyWallet</h1>
            <SignForm isSignUp={true} />
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