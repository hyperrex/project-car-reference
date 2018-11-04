document.addEventListener('DOMContentLoaded', event => {
  const form = document.querySelector('#login-form');

  const tryLogin = event => {
    event.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    console.log(email, password);

    axios
      .post('http://localhost:8000/users/login/', { email, password })
      .then(response => {
        console.log(response);
      });
    
  };
  form.addEventListener('submit', tryLogin(event));
});
