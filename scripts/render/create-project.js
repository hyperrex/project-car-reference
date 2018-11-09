const createNewProject = event => {
  event.preventDefault();
  let title = document.querySelector('#project-title').value;
  let description = document.querySelector('#project-description').value;
  let users_id = localStorage.getItem('user');
  axios
    // .post('https://project-car-reference-api.herokuapp.com/projects/', { title, description })
    .post('http://localhost:8000/projects/', { title, description })
    .then(response => {
      console.log(response);
      let projects_id = response.data[0].id;
      axios
        // .post('https://project-car-reference-api.herokuapp.com/userProjects/', { title, description })
        .post('http://localhost:8000/userProject/', { users_id, projects_id })
        .then(response => {
          console.log(response);
          viewMyProjects();
        });
    });
};

document
  .querySelector('#submit-project-button')
  .addEventListener('click', createNewProject);
