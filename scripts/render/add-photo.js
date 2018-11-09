const addUserPhoto = event => {
  event.preventDefault();
  let url = document.querySelector('#photo-url').value;
  let title = document.querySelector('#photo-title').value;
  let description = document.querySelector('#photo-description').value;
  let projects_id = localStorage.getItem('project');
  console.log('url>>>', url, 'title>>>', title, 'description>>>', description, 'projects_id>>>', projects_id);
  axios
    .post('https://project-car-reference-api.herokuapp.com/photos/', { url, title, description, projects_id })
    // .post('http://localhost:8000/photos/', { url, title, description, projects_id })
    .then(response => {
      console.log(response);
      viewMyProjects();
    });
};

document
  .querySelector('#submit-photo-button')
  .addEventListener('click', addUserPhoto);
