import axios from 'axios';
import Swal from 'sweetalert2';

export function createNewUser(body, history, setIsButtonEnabled) {
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/sign-up`, body)
    .then(() => history.push('/'))
    .catch((err) => {
      if (err.response.status === 409) Swal.fire('Email já cadastrado!', '', 'error');
      else Swal.fire('Erro no servidor!', 'Tente novamente', 'error');
      setIsButtonEnabled(true);
    });
}

export function authenticateUser(body, setUser, setIsButtonEnabled, history) {
  axios
    .post(`${process.env.REACT_APP_API_BASE_URL}/sign-in`, body)
    .then((resp) => {
      localStorage.setItem('user', JSON.stringify(resp.data));
      setUser(resp.data);
      history.push('/main');
    })
    .catch((err) => {
      if (err.response.status === 401) Swal.fire('Erro de autenticação!', 'Email ou senha inválido(s)', 'error');
      else Swal.fire('Erro no servidor!', 'Tente novamente', 'error');
      setIsButtonEnabled(true);
    });
}
