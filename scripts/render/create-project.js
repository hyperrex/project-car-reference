const createNewProject = event => {
  event.preventDefault();
  let title = document.querySelector('#project-title').value;
  let description = document.querySelector('#project-description').value;
  axios
    // .post('https://project-car-reference-api.herokuapp.com/projects/', { title, description })
    .post('http://localhost:8000/projects/', { title, description })
    .then(response => {
      console.log(response);
      viewMyProjects();
    });
};

document
  .querySelector('#submit-project-button')
  .addEventListener('click', createNewProject);
