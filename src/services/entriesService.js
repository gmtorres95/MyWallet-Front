import axios from "axios";

import createConfig from "./createConfig";

export function createNewEntry(body, token, history, setIsButtonEnabled) {
  axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}/entries`,
      body,
      createConfig(token)
    )
    .then(() => history.push("/main"))
    .catch((err) => {
      if (err.response.status === 401) {
        alert("Erro de autenticação!\nFaça login novamente");
        localStorage.clear();
        window.open("/", "_self");
      } else alert("Erro no sistema!\nTente novamente");
      setIsButtonEnabled(true);
    });
}

export function getEntries(token, setEntries) {
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/entries`, createConfig(token))
    .then((resp) => setEntries(resp.data))
    .catch((err) => console.log(err));
}

export function getEntriesSum(token, setSum) {
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/entries/total`, createConfig(token))
    .then((resp) => setSum(resp.data.total))
    .catch((err) => console.log(err));
}
