const baseURL = 'http://localhost:8000';
// const baseURL = 'https://project-car-reference-api.herokuapp.com';

document.addEventListener('DOMContentLoaded', () => {
  const tryLogin = event => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios
      .post(`${baseURL}/users/login/`, { email, password })
      .then(response => {
        localStorage.setItem('token', response.headers.authorization);
        console.log(localStorage.getItem('token'));
        viewProjects();
      });
  };
  document.querySelector('#login-form').addEventListener('submit', tryLogin);
});
