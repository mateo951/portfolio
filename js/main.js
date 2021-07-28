// Mobile Menu functionality
const div = document.createElement('div');
const grayBgDiv = document.createElement('div');
const hamBttn = document.querySelector('.menu');

hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div.classList.add('overlay');
  grayBgDiv.id = 'overlay-menu-bg';
  grayBgDiv.classList.add('overlay');
  div.innerHTML =
    '<img src="./images/buttons/Icon.png" class="cancelBttn"></img>' +
    '<ul class="mobile-menu-ul">' +
    '<li class="mobile-menu-li"><a href="#section-1">Porfolio</a></li>' +
    '<li class="mobile-menu-li"><a href="#section-2">About</a></li>' +
    '<li class="mobile-menu-li"><a href="#section-3">Contact</a></li>' +
    '</ul>';
  grayBgDiv.innerHTML =
    '<img class="overlay-bg-separator" src="./images/buttons/separator-mobile.png"></img>';
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

// Project popups functionality
const projectDiv = document.createElement('div');
const projectBttns = document.querySelectorAll('.popup');

function addEventListenerList() {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', () => {
      grayBgDiv.id = 'overlay-popup-projects';
      grayBgDiv.classList.add('overlay');
      projectDiv.id = 'overlay-popup';
      projectDiv.classList.add('overlay');
      projectDiv.innerHTML =
        '<div class="image-container-popup"><img  class="popup-project-image" src="./images/projects/project-detail-img.png">' +
        '<img id="cancel-detail" src="./images/buttons/cancel-detail-2.png"></div>' +
        '<div class="popup-content">'+
        '<h2 class="popup-title font-family font-color">Keeping track of hundreds of components</h2>' +
        '<ul class="popup-text font-family">' +
        '<li class="popup-li popup-items-basic">Ruby on Rails</li>' +
        '<li class="popup-li popup-items-basic">css</li>' +
        '<li class="popup-li popup-items-basic">Javascript</li>' +
        '</ul>' +
        '<p class="font-family popup-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy' +
        'text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply' +
        'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' +
        '1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>' +
        '<div class="bttn-popup-container"><a href="#" class="bttn-popup font-family">See Source</a>' +
        '<a href="#" class="bttn-popup font-family">See Live</a></div>' +
        '</div>';
      grayBgDiv.appendChild(projectDiv);
      document.body.appendChild(grayBgDiv);

      let cancelDetail = document.querySelector('#cancel-detail');
      cancelDetail.addEventListener('click', () => {
        projectDiv.remove();
        grayBgDiv.remove();
      });
    
    });
  }
}
addEventListenerList();



