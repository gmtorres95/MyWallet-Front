import axios from "axios";

function createNewUser(body, history, setIsButtonEnabled) {
    axios.post("http://localhost:4000/sign-up", body)
        .then(() => {
            setIsButtonEnabled(true);
            history.push("/");
        })
        .catch(err => {
            console.log(err.response);
            if(err.response.status === 409) alert("Email já cadastrado!");
            if(err.response.status === 400) alert("Senha fraca!");
            setIsButtonEnabled(true);
        })
}

export {
    createNewUser
}