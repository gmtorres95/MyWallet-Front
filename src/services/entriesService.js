import axios from 'axios';
import Swal from 'sweetalert2';

import createConfig from './createConfig';

export function createNewEntry(body, token, history, setIsButtonEnabled) {
  axios
    .post(
      `${process.env.REACT_APP_API_BASE_URL}/entries`,
      body,
      createConfig(token),
    )
    .then(() => history.push('/main'))
    .catch((err) => {
      if (err.response.status === 401) {
        Swal.fire('Erro de autenticação!', 'Faça login novamente', 'error');
        localStorage.clear();
        window.open('/', '_self');
      } else Swal.fire('Erro no servidor!', 'Tente novamente', 'error');
      setIsButtonEnabled(true);
    });
}

export function getEntries(token, setEntries) {
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/entries`, createConfig(token))
    .then((resp) => setEntries(resp.data))
    .catch(() => Swal.fire('Erro no servidor!', 'Tente novamente', 'error'));
}

export function getEntriesSum(token, setSum) {
  axios
    .get(`${process.env.REACT_APP_API_BASE_URL}/entries/total`, createConfig(token))
    .then((resp) => setSum(resp.data.total))
    .catch(() => Swal.fire('Erro no servidor!', 'Tente novamente', 'error'));
}
