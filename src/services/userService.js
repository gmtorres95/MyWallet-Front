import axios from "axios";

export function createNewUser(body, history, setIsButtonEnabled) {
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body)
    .then(() => history.push("/"))
    .catch((err) => {
      console.log(err.response);
      if (err.response.status === 409) alert("Email já cadastrado!");
      else alert("Erro no sistema\nTente novamente...");
      setIsButtonEnabled(true);
    });
}

export function authenticateUser(body, setUser, setIsButtonEnabled, history) {
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body)
    .then((resp) => {
      localStorage.setItem("user", JSON.stringify(resp.data));
      setUser(resp.data);
      history.push("/main");
    })
    .catch((err) => {
      if (err.response.status === 401) alert("Email ou senha inválido(s)!");
      else alert("Erro no sistema\nTente novamente...");
      setIsButtonEnabled(true);
    });
}
