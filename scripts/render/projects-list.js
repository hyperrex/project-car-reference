const baseURL = 'http://localhost:8000';
// const baseURL = 'https://project-car-reference-api.herokuapp.com';

const getAllProjects = () => {
  axios
    .get(`${baseURL}/projects`)
    .then(result => {
      document.querySelector('#projects-list').innerHTML = renderProjects(
        result.data
      );
    })
    .catch(err => {
      return 'ERROR';
    });
};

const renderProjects = data => {
  const projectsList = document.querySelector('#projects-list');
  data.forEach(element => {
    let project = element.id;
    let div = document.createElement('div');
    div.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img class="card-img-top" src=".../100px180/" alt="Card image cap">
        <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>`;
    projectsList.appendChild(project);
  });
};
