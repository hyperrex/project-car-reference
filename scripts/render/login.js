// 'https://project-car-reference-api.herokuapp.com';

document.addEventListener('DOMContentLoaded', () => {
  console.log('Log In Page Loading')
  const tryLogin = event => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios
      .post('http://localhost:8000/users/login/', { email, password })
      .then(response => {
        console.log(response.data[0].id);
        localStorage.setItem('token', response.headers.authorization);
        localStorage.setItem('user', response.data[0].id);
        console.log(localStorage.getItem('user'));
        viewMyProjects();
      });
  };
  document.querySelector('#login-form').addEventListener('submit', tryLogin);
});
