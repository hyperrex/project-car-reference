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
  list.innerHTML = '';
  data.forEach(project => {
    const button = document.createElement('button');
    button.setAttribute('id', `${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.name}`;
    button.addEventListener('click', viewProject);
    button.addEventListener('click', renderUserProject);
    list.appendChild(button);
  });
  const editButtonList = document.querySelector(
    '#my-projects-list-edit-button'
  );
  editButtonList.innerHTML = '';
  data.forEach(project => {
    const editButton = document.createElement('button');
    editButton.setAttribute('id', `${project.id}`);
    editButton.setAttribute('class', 'btn btn-outline-info btn-block mb-3');
    editButton.innerHTML = 'Edit';
    editButton.addEventListener('click', renderUserProject);
    editButtonList.appendChild(editButton);
  });
  const deleteButtonList = document.querySelector(
    '#my-projects-list-delete-button'
  );
  deleteButtonList.innerHTML = '';
  data.forEach(project => {
    const deleteButton = document.createElement('button');
    deleteButton.setAttribute('id', `${project.id}`);
    deleteButton.setAttribute('class', 'btn btn-outline-danger btn-block mb-3');
    deleteButton.innerHTML = 'Delete';
    deleteButton.addEventListener('click', deleteUserProject);
    deleteButtonList.appendChild(deleteButton);
  });
};

const renderUserProject = event => {
  const project = event.target.id;
  axios.get(`http://localhost:8000/projects/${project}`).then(result => {
    console.log(result.data);
    const renderedProject = document.querySelector('#project-photos-container');
    const photos = result.data.photos;
    renderedProject.innerHTML = '';
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
    getUserProjects()
  });
};
