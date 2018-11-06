// 'https://project-car-reference-api.herokuapp.com'

const getAllProjects = () => {
  axios
    .get('http://localhost:8000/projects')
    .then(result => {
      console.log(result.data);
      renderProjects(result.data);
    })
    .catch(err => {
      return 'ERROR';
    });
};

const renderProjects = data => {
  const list = document.querySelector('#projects-list');
  data.forEach(project => {
    var button = document.createElement("button");
    button.setAttribute('id', `button-${project.id}`);
    button.setAttribute('class', 'btn btn-primary btn-block mb-3');
    button.innerHTML = `${project.name}`;
    list.appendChild(button);
  });
};