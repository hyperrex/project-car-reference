document.addEventListener('DOMContentLoaded', () => {
  const tryLogin = event => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios
      // .post('https://project-car-reference-api.herokuapp.com/users/', { email, password })
      .post('http://localhost:8000/users/login/', { email, password })
      .then(response => {
        localStorage.setItem('token', response.headers.authorization);
        console.log(localStorage.getItem('token'));
      });
  };
  document.querySelector('#login-form').addEventListener('submit', tryLogin);
});
