// Render Functions ////////////////////////////////////////////////////////////

const loginForm = () => {
  localStorage.clear();
  document.querySelector('#email').value = '';
  document.querySelector('#password').value = '';
  document.querySelector('#first-name').value = '';
  document.querySelector('#last-name').value = '';
  document.querySelector('#create-email').value = '';
  document.querySelector('#sign-up-password').value = '';
  document.querySelector('#verify-password').value = '';
  document.querySelector('#view-my-projects-button').style.display = 'none';
  document.querySelector('#create-project-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'none';
  document.querySelector('#login-form-container').style.display = 'block';
  document.querySelector('#sign-up-container').style.display = 'block';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
  document.querySelector('#edit-project-container').style.display = 'none';
  document.querySelector('#photos-form-container').style.display = 'none';
};

const createProject = () => {
  document.querySelector('#project-title').value = '';
  document.querySelector('#project-description').value = '';
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'block';
  document.querySelector('#edit-project-container').style.display = 'none';
  document.querySelector('#photos-form-container').style.display = 'none';
};

const editProject = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
  document.querySelector('#edit-project-container').style.display = 'block';
  document.querySelector('#photos-form-container').style.display = 'none';
};

const viewMyProjects = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'block';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'block';
  document.querySelector('#project-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
  document.querySelector('#edit-project-container').style.display = 'none';
  document.querySelector('#photos-form-container').style.display = 'none';
  getUserProjects()
};

const viewProject = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'block';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-container').style.display = 'block';
  document.querySelector('#create-project-container').style.display = 'none';
  document.querySelector('#edit-project-container').style.display = 'none';
  document.querySelector('#photos-form-container').style.display = 'none';
};

const addPhoto = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'block';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
  document.querySelector('#edit-project-container').style.display = 'none';
  document.querySelector('#photos-form-container').style.display = 'block';
};
// Event Listeners ////////////////////////////////////////////////////////////

document.querySelector('#view-my-projects-button').addEventListener('click', viewMyProjects);
document.querySelector('#logout-button').addEventListener('click', loginForm);
document.querySelector('#create-project-button').addEventListener('click', createProject);
