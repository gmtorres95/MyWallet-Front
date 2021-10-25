import axios from "axios";

const URL = "http://localhost:4000"

function createNewUser(body, history, setIsButtonEnabled) {
    axios.post(URL + "/sign-up", body)
        .then(() => {
            setIsButtonEnabled(true);
            history.push("/");
        })
        .catch(err => {
            console.log(err.response);
            if(err.response.status === 409) alert("Email já cadastrado!");
            else if(err.response.status === 400) alert("Senha fraca!");
            else alert("Erro no sistema\nTente novamente...");
            setIsButtonEnabled(true);
        })
}

function authenticateUser(body, setUser, setIsButtonEnabled, history, saveToLocalStorage) {
    axios.post(URL + "/sign-in", body)
        .then((resp) => {
            saveToLocalStorage(resp.data);
            setUser(resp.data);
            setIsButtonEnabled(true);
            history.push("/main");
        })
        .catch(err => {
            if(err.response.status === 401) alert("Email e/ou senha inválido(s)!");
            else alert("Erro no sistema\nTente novamente...");
            setIsButtonEnabled(true);
        })
}

export {
    createNewUser,
    authenticateUser
}