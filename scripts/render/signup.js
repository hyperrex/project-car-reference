document.addEventListener('DOMContentLoaded', () => {
  const signup = event => {
    event.preventDefault();
    const first_name = document.querySelector('#first-name').value;
    const last_name = document.querySelector('#last-name').value;
    const email = document.querySelector('#create-email').value;
    const password = document.querySelector('#sign-up-password').value;
    const verified = document.querySelector('#verify-password').value;

    if (password !== verified) {
      return alert('Passwords must match!');
    }

    axios
      .post('https://project-car-reference-api.herokuapp.com/users/', { first_name, last_name, email, password })
      // .post('http://localhost:8000/users/', { first_name, last_name, email, password })
      .then(response => {
        console.log(response);
        viewMyProjects();
      });
  };
  document.querySelector('#sign-up-form').addEventListener('submit', signup);
});
