// 'https://project-car-reference-api.herokuapp.com'

const getUserProjects = () => {
  const id = localStorage.getItem('user');
  axios
    .get(`http://localhost:8000/users/projects/${id}`)
    .then(result => {
      console.log(result);
      // let proj = result.data[0].projects_id;
      renderUserProjects(result.data);
    })
    .catch(err => {
      return 'ERROR';
    });
};

const renderUserProjects = data => {
  console.log(data)
  const list = document.querySelector('#my-projects-list');
  list.innerHTML='';
  data.forEach(project => {
    const button = document.createElement('button');
    button.setAttribute('id', `${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.name}`;
    button.addEventListener('click', renderUserProject);
    list.appendChild(button);
  });
};

const renderUserProject = event => {
  const project = event.target.id;
  axios
  .get(`http://localhost:8000/projects/${project}`)
  .then(result => {
    console.log(result.data);
  });
};
