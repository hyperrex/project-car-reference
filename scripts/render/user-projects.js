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
  const list = document.querySelector('#my-projects-list');
  list.innerHTML='';
  data.forEach(project => {
    const button = document.createElement('button');
    button.setAttribute('id', `${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.name}`;
    button.addEventListener('click', renderProject);
    list.appendChild(button);
  });
  const editButtonList = document.querySelector('#my-projects-list-edit-button');
  editButtonList.innerHTML='';
  data.forEach(project => {
    const editButton = document.createElement('button');
    editButton.setAttribute('id', `${project.id}`);
    editButton.setAttribute('class', 'btn btn-outline-info btn-block mb-3');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', renderProject);
    editButtonList.appendChild(editButton);
  });
  const deleteButtonList = document.querySelector('#my-projects-list-delete-button');
  deleteButtonList.innerHTML='';
  data.forEach(project => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `${project.id}`);
    deleteButton.setAttribute('class', 'btn btn-outline-danger btn-block mb-3');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', renderProject);
    deleteButtonList.appendChild(deleteButton);
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
