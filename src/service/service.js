import { saveToLocalStorage, clearLocalStorage } from "../utils/localStorageUtils";

import axios from "axios";

const URL = "http://localhost:4000"

function createConfig(token) {
    const config = {
        headers: {
            "Authorization": "Bearer " + token
        }
    };
    return config;
}

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

function authenticateUser(body, setUser, setIsButtonEnabled, history) {
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

function endSession(token, history, setUser) {
    axios.delete(URL + "/sign-out", createConfig(token))
        .then(() => {
            clearLocalStorage();
            window.open("/","_self");
        })
        .catch(err => {
            alert("Erro!\nTente novamente");
        })
}

function createNewEntry(body, token, history, setIsButtonEnabled) {
    axios.post(URL + "/main", body, createConfig(token))
        .then(() => {
            setIsButtonEnabled(true);
            history.push("/main");
        })
        .catch(err => {
            if(err.response.status === 401) {
                alert("Erro de autenticação!\nFaça login novamente");
                clearLocalStorage();
                history.push("/");
            }
            else alert("Erro no sistema!\nTente novamente");
            setIsButtonEnabled(true);
        })
}

function getEntries(token, setEntries) {
    axios.get(URL + "/main", createConfig(token))
        .then(resp => {
            setEntries(resp.data);
        })
        .catch(err => {
            console.log(err);
        })
}

export {
    createNewUser,
    authenticateUser,
    endSession,
    createNewEntry,
    getEntries
}