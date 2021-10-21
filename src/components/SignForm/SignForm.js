import Form from "./elements/Form";
import Input from "./elements/Input";
import Button from "./elements/Button";

import { useState } from "react";
import { Link } from "react-router-dom";

export default function SignForm({isSignUp}) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [isButtonEnabled, setIsButtonEnabled] = useState(true);

    return (
        <Form onSubmit={isButtonEnabled ? e => e.preventDefault() : e => e.preventDefault()}>
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