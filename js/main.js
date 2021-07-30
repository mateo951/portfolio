// Mobile Menu functionality
const div = document.createElement('div');
const grayBgDiv = document.createElement('div');
const hamBttn = document.querySelector('.menu');

hamBttn.addEventListener('click', () => {
  div.id = 'overlay';
  div.classList.add('overlay');
  grayBgDiv.id = 'overlay-menu-bg';
  grayBgDiv.classList.add('overlay');
  div.innerHTML = '<img src="./images/buttons/Icon.png" class="cancelBttn"></img>'
    + '<ul class="mobile-menu-ul">'
    + '<li class="mobile-menu-li"><a href="#section-1">Porfolio</a></li>'
    + '<li class="mobile-menu-li"><a href="#section-2">About</a></li>'
    + '<li class="mobile-menu-li"><a href="#section-3">Contact</a></li>'
    + '</ul>';
  grayBgDiv.innerHTML = '<img class="overlay-bg-separator" src="./images/buttons/separator-mobile.png"></img>';
  document.body.appendChild(div);
  document.body.appendChild(grayBgDiv);
  div.style.display = 'block';
  grayBgDiv.style.display = 'block';

  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    grayBgDiv.remove();
  });

  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', () => {
      div.remove();
      grayBgDiv.remove();
    });
  }
});

// Projects Data
const projects = [
  {
    name: 'The One',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Codekit', 'Terminal', 'Codepen'],
    description: 'The One and only',
  },
  {
    name: 'The Second',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Github', 'Bootstrap', 'Git'],
    description: 'The Second and only',
  },
  {
    name: 'The Third',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Codepen', 'Codekit', 'Bootstrap'],
    description: 'The Third and only',
  },
  {
    name: 'The Forth',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Codekit', 'Sass', 'Terminal'],
    description: 'The Forth and only',
  },
  {
    name: 'The Fifth',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Sass', 'Bootstrap', 'JQuery'],
    description: 'The Fifth and only',
  },
  {
    name: 'The Sixth',
    imgUrl: './images/projects/project-detail-img.png',
    techs: ['Terminal', 'Codepen', 'Github'],
    description: 'The Sixth and only',
  },
];

// Projects Creation
function createProjectsSeciton() {
  if (projects.length > 0) {
    const worksSection = document.querySelector('.worksSection');
    let idIteration = 0;
    for (let i = 0; i < projects.length; i += 1) {
      let techsHTML = '';
      for (let j = 0; j < projects[i].techs.length; j += 1) {
        techsHTML += `<p class="techs-items-basic techs-items-1">${projects[i].techs[j]}</p>`;
      }
      worksSection.innerHTML += '<div class="grid-container flex-item-projects">'
        + `<div class="grid-item-1 project-image-container"><img class="project-image" src="${projects[i].imgUrl}"></div>`
        + '<div class="grid-item-2">'
        + '<div class="flex-container flex-column-center-axis works-title font-family">'
        + '<div class="flex-item-1 flex-container flex-column-center-axis">'
        + `<h3 class="card-font card-Title font-family">${projects[i].name}</h3>`
        + '</div>'
        + '<div class="flex-item-2 flex-container techs-items-font font-family">'
        + `${techsHTML}`
        + '</div>'
        + '<div class="flex-item-1 flex-container flex-column-center-axis">'
        + `<a href="#" class="bttn font-family popup" id="${idIteration}">See Project</a>`
        + '</div>'
        + '</div>'
        + '</div>';
      idIteration++;
    }
  }
}
createProjectsSeciton();

// Project popups functionality
const projectDiv = document.createElement('div');
const projectBttns = document.querySelectorAll('.popup');

function addEventListenerList() {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', (event) => {
      const projectID = event.target.id;
      console.log(projectID);
      grayBgDiv.id = 'overlay-popup-projects';
      grayBgDiv.classList.add('overlay');
      projectDiv.id = 'overlay-popup';
      projectDiv.classList.add('overlay');

      // Techs Creation
      let techsHTMLDetail = '';
      for (let j = 0; j < projects[i].techs.length; j += 1) {
        techsHTMLDetail += `<li class="popup-li popup-items-basic">${projects[i].techs[j]}</li>`;
      }

      projectDiv.innerHTML = `<div class="image-container-popup"><img  class="popup-project-image" src="${projects[projectID].imgUrl}">`
        + '<img id="cancel-detail" src="./images/buttons/cancel-detail-2.png"></div>'
        + '<div class="popup-content">'
        + `<h2 class="popup-title font-family font-color">${projects[projectID].name}</h2>`
        + `<ul class="popup-text font-family">${techsHTMLDetail
        }</ul>`
        + `<p class="font-family popup-text">${projects[projectID].description} Lorem Ipsum is simply dummy text of the printing`
        + 'and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown'
        + 'printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and'
        + 'typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer'
        + 'took a galley of type and scrambled it 1960s with the relea</p>'
        + '<div class="bttn-popup-container"><a href="#" class="bttn-popup font-family">See Source</a>'
        + '<a href="#" class="bttn-popup font-family">See Live</a></div>'
        + '</div>';
      grayBgDiv.appendChild(projectDiv);
      document.body.appendChild(grayBgDiv);

      const cancelDetail = document.querySelector('#cancel-detail');
      cancelDetail.addEventListener('click', () => {
        projectDiv.remove();
        grayBgDiv.remove();
      });
    });
  }
}
addEventListenerList();

// Form Validations
const form = document.getElementById('clientInfo');
const emailFormat = 'Please enter a valid email adress';

function hasValue(input) {
  if (input === '') {
    return false;
  }
  return true;
}

function showMessage(input, message) {
  const msg = input.parentNode.querySelector('small');
  msg.innerText = message;
}

function validateEmail(input, emailFormat) {
  const email = input.value.trim();
  if (!hasValue(input.value)) {
    return false;
  }

  const lowerCaseValidation = /[A-Z]/g;
  if (email.match(lowerCaseValidation)) {
    input.value = email.toLowerCase();
    return showMessage(input, emailFormat);
  }
  return true;
}

function hideErrorMessages() {
  const msgs = document.querySelectorAll('.validationText');
  if (msgs.length > 0) {
    for (let i = 0; i < msgs.length; i += 1) {
      msgs[i].innerText = '';
    }
  }
}

form.addEventListener('submit', (event) => {
  const email = form.elements.client_email;
  const emailValid = validateEmail(email, emailFormat);

  if (emailValid) {
    hideErrorMessages();
  } else {
    event.preventDefault();
  }
});

// Storage
function localStorageAv() {
  const test = 'test';
  try {
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

const storageAvailability = localStorageAv();
let inputArr = [];

function SetInputsArray() {
  const inputName = form.elements.client_name.value;
  const inputEmail = form.elements.client_email.value;
  const inputMessage = form.elements.client_message.value;
  inputArr = [inputName, inputEmail, inputMessage];
}

function HandleInputData() {
  SetInputsArray();
  const jsonData = JSON.stringify(inputArr);
  localStorage.setItem('formInput', jsonData);
}

const CheckInput = () => { // eslint-disable-line no-unused-vars
  if (storageAvailability) {
    HandleInputData();
  }
};

function CheckLocalInput() {
  const inputs = document.querySelectorAll('#clientInfo .input-layout');
  const savedData = JSON.parse(localStorage.getItem('formInput'));
  if (savedData !== null) {
    for (let i = 0; i < inputs.length; i += 1) {
      if (hasValue(savedData[i])) {
        inputs[i].value = savedData[i];
      }
    }
  }
}
CheckLocalInput();
