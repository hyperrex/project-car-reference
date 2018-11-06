// Render Functions ////////////////////////////////////////////////////////////

const loginForm = () => {
  localStorage.clear();
  document.querySelector('#view-projects-button').style.display = 'none'; //change to none
  document.querySelector('#view-my-projects-button').style.display = 'none';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'none';
  document.querySelector('#login-form-container').style.display = 'block';
  document.querySelector('#sign-up-container').style.display = 'block';
  document.querySelector('#projects-container').style.display = 'none';
};

const viewProjects = () => {
  document.querySelector('#view-projects-button').style.display = 'block';
  document.querySelector('#view-my-projects-button').style.display = 'block';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#projects-container').style.display = 'block';
  getAllProjects();
};

// Event Listeners ////////////////////////////////////////////////////////////

document.querySelector('#view-projects-button').addEventListener('click', viewProjects);

document.querySelector('#logout-button').addEventListener('click', loginForm);
