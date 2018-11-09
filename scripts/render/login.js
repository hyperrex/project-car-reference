document.addEventListener('DOMContentLoaded', () => {
  const tryLogin = event => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    axios
      .post('https://project-car-reference-api.herokuapp.com/users/login/', { email, password })
      // .post('http://localhost:8000/users/login/', { email, password })
      .then(response => {
        console.log(response);
        localStorage.setItem('token', response.headers.authorization);
        localStorage.setItem('user', response.data[0].id);
        viewMyProjects();
      });
  };
  document.querySelector('#login-form').addEventListener('submit', tryLogin);
});
