// Render Functions ////////////////////////////////////////////////////////////

const loginForm = () => {
  localStorage.clear();
  document.querySelector('#login-form-container').style.display = 'block';
  document.querySelector('#sign-up-container').style.display = 'block';
  document.querySelector('#projects-list').style.display = 'none';
  document.querySelector('#view-projects').style.display = 'none';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'none';
};

const viewProjects = () => {
  document.querySelector('#login-form-container').style.display = 'none';
  document.querySelector('#sign-up-container').style.display = 'none';
  document.querySelector('#projects-list').style.display = 'block';
  document.querySelector('#view-projects').style.display = 'none';
  document.querySelector('#link-photo-button').style.display = 'none';
  document.querySelector('#logout-button').style.display = 'block';
};

// Event Listeners ////////////////////////////////////////////////////////////

document.querySelector('#view-projects-button').addEventListener('click', viewProjects);

document.querySelector('#logout-button').addEventListener('click', loginForm);
