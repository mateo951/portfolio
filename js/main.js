const div = document.createElement('div');
const div2 = document.createElement('div');
const hamBttn = document.querySelector('.menu');
const mainpage = document.querySelector('.headline-bg');
const header = document.querySelector('header');
const worksSection = document.querySelector('.works-section');
const blurElements = [mainpage, header, worksSection];

console.log(hamBttn);

function UnBlurSections() {
  for (let i = 0; i < blurElements.length; i += 1) {
    blurElements[i].classList.remove('blur-content');
  }
}
hamBttn.addEventListener('click', () => {
  // Create div for mobile menu
  div.id = 'overlay';
  div2.id = 'overlay-bg';
  div.innerHTML = '<img src="./images/buttons/Icon.png" class="cancelBttn"></img>'
    + '<ul class="mobile-menu-ul">'
    + '<li class="mobile-menu-li"><a href="#section-1">Porfolio</a></li>'
    + '<li class="mobile-menu-li"><a href="#section-2">About</a></li>'
    + '<li class="mobile-menu-li"><a href="#section-3">Contact</a></li>'
    + '</ul>';
  div2.innerHTML = '<img class="overlay-bg-separator" src="./images/buttons/separator-mobile.png"></img>';
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
    UnBlurSections();
  });
  // Adding listeners to li tags
  const sections = document.querySelectorAll('.mobile-menu-li');
  for (let i = 0; i < sections.length; i += 1) {
    sections[i].addEventListener('click', () => {
      div.remove();
      div2.remove();
      UnBlurSections();
    });
  }
});
