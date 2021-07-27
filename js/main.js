const div = document.createElement('div');
const div2 = document.createElement('div');
const projectDiv = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const mainpage = document.querySelector('.headline-bg');
const header = document.querySelector('header');
const worksSection = document.querySelector('.works-section');
const projectBttns = document.querySelectorAll('.popup');
const blurElements = [mainpage, header, worksSection];

// Popup menu

function addEventListenerList() {
  for (let i = 0; i < projectBttns.length; i += 1) {
    projectBttns[i].addEventListener('click', () => {
      div2.id = 'overlay-bg';
      projectDiv.id = 'overlay-popup';
      document.body.appendChild(div2);
      projectDiv.innerHTML =
        '<div class="info">' +
        '<div></div>' +
        '<h2>Keeping track of hundreds of components</h2>' +
        '<ul class="technologies>' +
        '<li>Ruby on Rails</li>' +
        '<li>css</li>' +
        '<li>Javascript</li>' +
        '/ul>' +
        '<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy' +
        'text +ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply' +
        'dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the' +
        '1500s,when an unknown printer took a galley of type and scrambled it 1960s with the relea</p>' +
        ' <a href="#" class="live-bttn">See live</a>' +
        ' <a href="#" class="source-bttn">See sourse</a>' +
        '</div>';
    });
    document.body.appendChild(projectDiv);
  }
}
addEventListenerList();

function unBlurSections() {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
}
hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div2.id = 'overlay-bg';
  div.innerHTML =
    '<img src="./images/buttons/Icon.png" class="cancelBttn"></img>' +
    '<ul class="mobile-menu-ul">' +
    '<li class="mobile-menu-li"><a href="#section-1">Porfolio</a></li>' +
    '<li class="mobile-menu-li"><a href="#section-2">About</a></li>' +
    '<li class="mobile-menu-li"><a href="#section-3">Contact</a></li>' +
    '</ul>';
  div2.innerHTML =
    '<img class="overlay-bg-separator" src="./images/buttons/separator-mobile.png"></img>';
  document.body.appendChild(div);
  document.body.appendChild(div2);
  div.style.display = 'block';
  div2.style.display = 'block';
  // Add css class to behind sections
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.add('blur-content');
  }
  // Add listener for closing menu
  const mobileMenu = document.querySelector('.cancelBttn');
  mobileMenu.addEventListener('click', () => {
    div.remove();
    div2.remove();
    unBlurSections();
  });
  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', () => {
      div.remove();
      div2.remove();
      unBlurSections();
    });
  }
});
