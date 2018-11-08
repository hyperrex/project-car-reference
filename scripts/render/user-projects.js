// 'https://project-car-reference-api.herokuapp.com'
const getUserProjects = () => {
  const id = localStorage.getItem('user');
  axios
    .get(`http://localhost:8000/users/projects/${id}`)
    .then(result => {
      renderUserProjects(result.data);
    })
    .catch(err => {
      return 'ERROR';
    });
};

const renderUserProjects = data => {
  const list = document.querySelector('#my-projects-list');
  localStorage.removeItem('project');
  list.innerHTML = '';
  data.forEach(project => {
    const button = document.createElement('button');
    button.setAttribute('id', `${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.title}`;
    button.addEventListener('click', viewProject);
    button.addEventListener('click', renderUserProject);
    list.appendChild(button);
  });
};

const renderUserProject = event => {
  const project = event.target.id;
  localStorage.setItem('project', project);
  axios.get(`http://localhost:8000/projects/${project}`).then(result => {
    const renderedProject = document.querySelector('#project-photos-container');
    const photos = result.data.photos;
    const projTitle = result.data.title;
    const projDesc = result.data.description;
    renderedProject.innerHTML = '';

    let projectTitle = document.createElement('h4');
    projectTitle.innerHTML = `${projTitle}`;
    renderedProject.appendChild(projectTitle);

    let projectDescription = document.createElement('p');
    projectDescription.innerHTML = `${projDesc}`;
    renderedProject.appendChild(projectDescription);

    let editButton = document.createElement('button');
    editButton.setAttribute('id', `${project}`);
    editButton.setAttribute('class', 'btn btn-info btn-block mb-3');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', editProject);
    renderedProject.appendChild(editButton);

    let deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `${project}`);
    deleteButton.setAttribute('class', 'btn btn-danger btn-block mb-3');
    deleteButton.innerHTML = 'Delete Project';
    deleteButton.addEventListener('click', deleteUserProject);
    renderedProject.appendChild(deleteButton);

    photos.forEach(photo => {
      let imageContainer = document.createElement('div');
      imageContainer.setAttribute(
        'class',
        'container border border-primary rounded mb-3 p-5'
      );

      let image = document.createElement('img');
      image.setAttribute('src', `${photo.url}`);
      image.setAttribute('class', 'img-fluid mb-3');
      imageContainer.appendChild(image);

      let title = document.createElement('h4');
      title.innerHTML = `${photo.title}`;
      imageContainer.appendChild(title);

      let description = document.createElement('p');
      description.innerHTML = `${photo.description}`;
      imageContainer.appendChild(description);

      renderedProject.appendChild(imageContainer);
    });
  });
};

const deleteUserProject = event => {
  const project = event.target.id;
  axios.delete(`http://localhost:8000/projects/${project}`).then(result => {
    console.log(result.data);
    viewMyProjects()
  });
};

const editUserProject = event => {
  event.preventDefault();
  const id = localStorage.getItem('project');
  console.log('Does this exist?', id)
  let title = document.querySelector('#edit-project-title').value;
  let description = document.querySelector('#edit-project-description').value;
  axios
    // .post('https://project-car-reference-api.herokuapp.com/projects/', { title, description })
    .put(`http://localhost:8000/projects/${id}`, { title, description })
    .then(response => {
      console.log(response);
      viewMyProjects();
    });
};

document
  .querySelector('#submit-edit-project-button')
  .addEventListener('click', editUserProject);