import Form from "./Form";
import Input from "./Input";
import Button from "./Button";

import UserContext from "../contexts/UserContext";

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

export default function SignForm({isSignUp}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);
    const history = useHistory();
    const {setUser} = useContext(UserContext);

    function signHelper(event) {
        event.preventDefault();

        if(password !== confirmedPassword && isSignUp) {
            alert("As duas senhas devem ser idênticas!")
            return;
        }


        setIsButtonEnabled(false);
        let body;

        if(isSignUp) {
            body = {
                name,
                email,
                password
            }
            // createNewUser(body, history, setIsButtonEnabled);
            history.push("/");
        }
        else {
            body = {
                email,
                password
            }
            // login(body, setLogin, setIsButtonEnabled, history);
            history.push("/main");
        }

    }

    return (
        <Form onSubmit={isButtonEnabled ? signHelper : e => e.preventDefault()}>
            {isSignUp ? 
                <Input
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={e => setName(e.target.value)}
                    required
                /> : ""
            }
            <Input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
            />
            <Input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
            />
            {isSignUp ? 
                <Input
                    type="password"
                    placeholder="Confirme a Senha"
                    value={confirmedPassword}
                    onChange={e => setConfirmedPassword(e.target.value)}
                    required
                /> : ""
            }
            <Button type="submit" isButtonEnabled={isButtonEnabled}>
                {isSignUp ? "Cadastrar" : "Entrar"}
            </Button>
            {isSignUp ? 
                <Link to="/">Já tem uma conta? Entre agora!</Link>
                :
                <Link to="/sign-up">Primeira vez? Cadastre-se!</Link>
            }
        </Form>
    );
}