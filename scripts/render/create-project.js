// 'https://project-car-reference-api.herokuapp.com'

const createNewProject = () => {
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