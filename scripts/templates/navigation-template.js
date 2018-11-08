// Render Functions ////////////////////////////////////////////////////////////

const loginForm = () => {
  localStorage.clear();
  document.querySelector('#view-my-projects-button').style.display = 'none';
  document.querySelector('#create-project-button').style.display = 'none';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'none';
  document.querySelector('#login-form-container').style.display = 'block';
  document.querySelector('#sign-up-container').style.display = 'block';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-photos-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
};

const createProject = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'none';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-photos-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'block';

};

const viewMyProjects = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'block';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'block';
  document.querySelector('#project-photos-container').style.display = 'none';
  document.querySelector('#create-project-container').style.display = 'none';
  getUserProjects()
};

const viewProject = () => {
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#create-project-button').style.display = 'block';
  document.querySelector('#link-photo-button').style.display = 'block';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#my-projects-container').style.display = 'none';
  document.querySelector('#project-photos-container').style.display = 'block';
  document.querySelector('#create-project-container').style.display = 'none';
};

// Event Listeners ////////////////////////////////////////////////////////////

document.querySelector('#view-my-projects-button').addEventListener('click', viewMyProjects);
document.querySelector('#logout-button').addEventListener('click', loginForm);
document.querySelector('#create-project-button').addEventListener('click', createProject);



