'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const nav = document.querySelector('.nav');

const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

// Button scrolling
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords); // DOMRectange
  console.log(e.target.getBoundingClientRect());
  console.log(`Current scroll (X/Y)`, window.pageXOffset, pageYOffset);
  console.log(
    `height/width of viewport`,
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );
  section1.scrollIntoView({ behavior: 'smooth' });
});

// using event delegation for navigation (with bubbling)

// inefficient way
// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault(); // so it doesn't scroll to anchor
//     const id = this.getAttribute('href'); // to get relative URL!
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// more efficient way! Using currentTarget and bubbling
// putting listener on common parent (nav)
// "EVENT DELEGATION"
// 1. add event listener to common parent
// 2. determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  // console.log(e.target);

  // Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    // console.log(e.target);
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

// Tabbed component

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  // Guard clause -> returns and finishes the function early if nothing is clicked
  if (!clicked) return;

  // Active tab
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

  // Activate content area

  console.log(clicked.dataset.tab);
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

// Menu fade animation

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// nav.addEventListener('mouseover', e => handleHover(e, 0.5));

// Passing "argument" into handle function
nav.addEventListener('mouseover', handleHover.bind(0.5)); // opacity will be "this" in handler function

nav.addEventListener('mouseout', handleHover.bind(0.5));

// Sticky navigation
const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);

// use scroll event, NOT EFFICIENT!
// window.addEventListener('scroll', function (e) {
//   if (window.scrollY >= initialCoords.top) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

// alternative: INTERSECTION OBSERVER API

// const obsCallback = function (entries, observer) {
//   // whenever section1 intersects viewport (root) at 10% (threshold) the function will be called
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2],
// };

// // intersecting: true: selection is visible in viewport with at least the percentage defined in threshold

// const observer = new IntersectionObserver(obsCallback, obsOptions);

// observer.observe(section1);

const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const stickyNav = function (entries) {
  const [entry] = entries; // same as entry = entries[0]
  // console.log(entry);
  if (entry.isIntersecting === false) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0, // header scrolled completely out of viewport
  rootMargin: `-${navHeight}px`, // box of 90 px applied outside of target
});
headerObserver.observe(header);

// Reveal sections

const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target); // improve performance
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

const allSections = document.querySelectorAll('.section');

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) return;
  // Replace src attribute with data-src
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', () => {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px', // make pictures load before they enter the viewport
});

imgTargets.forEach(img => {
  imgObserver.observe(img);
});

// Slider component

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');

let curSlide = 0;
const maxSlide = slides.length;

const slider = document.querySelector('.slider');

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

goToSlide(0);

// go to next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

////////////////////////////
// SELECT, CREATE AND DELETE
/*
  // selecting
  console.log(document.documentElement);
  console.log(document.head);
  console.log(document.body);

  const header = document.querySelector('.header');
  const allSections = document.querySelectorAll('.section');
  console.log(allSections);

  document.getElementById('section--1');
  const allButtons = document.getElementsByTagName('button');
  console.log(allButtons);

  // getElementsByTagName returns "collection", not a Node List
  // collections are updated immediately when changes to the DOM are made

  document.getElementsByClassName('btn'); // also returns collection

  // creating and inserting
  // .insertAdjacentHTML

  const message = document.createElement('div'); // returns DOM element
  message.classList.add('cookie-message');
  // message.textContent = "We use coookies for improved functionality and analytis."
  message.innerHTML = `We use coookies for improved functionality and analytis. <button class="btn btn--close-cookie">Got it!</button>`;

  // header.prepend(message);
  header.append(message); // live element that can only be at one place at a time! Only appears at append position.
  // header.append(message.cloneNode(true)); // appends a copy!

  header.before(message);
  // header.after(message);

  // delete elements

  document.querySelector('.btn--close-cookie').addEventListener('click', () => {
    message.remove();
  });

  // Styles (applied as inline styles)

  message.style.backgroundColor = '#37383d';
  message.style.width = '120%';

  console.log(message.style.height); // won't work
  console.log(message.style.backGroundColor); // will work because inline style

  console.log(getComputedStyle(message).color);
  console.log(getComputedStyle(message).height);
  console.log(Number.parseFloat(getComputedStyle(message).height));

  message.style.height =
    Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

  document.documentElement.style.setProperty('--color-primary', 'orangered');

  // Attributes (src, alt, class, id...)

  const logo = document.querySelector('.nav__logo');
  // standard properties
  console.log(logo.alt);
  console.log(logo.src);
  console.log(logo.className);

  logo.alt = 'Beautiful minimalist logo';

  // non-standard
  console.log(logo.designer); // undefined
  console.log(logo.getAttribute('designer')); // works!
  logo.setAttribute('company', 'Bankist');
  console.log(logo.getAttribute('src')); // returns relative URL

  const link = document.querySelector('.nav__link--btn');
  console.log(link.href);
  console.log(link.getAttribute('href'));

  // data attributes
  console.log(logo.dataset.versionNumber);

  // classes
  logo.classList.add('c');
  logo.classList.remove('c', 'j', 'u');
  logo.classList.toggle('c');
  logo.classList.contains('nav__logo'); // returns Boolean. attention: not includes (as in arrays);

  // don't use, overwrites all classes!!!
  logo.className = 'Jonas';

  // Smooth scroll
  // we need coordinates to tell JS where to scroll to

  // Scrolling (old school way)
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // window.scrollTo({
  //   left: s1coords.left + window.pageXOffset,
  //   top: s1coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Scrolling the modern way



// EVENTS

// events always happen, if we listen or don't

const h1 = document.querySelector('h1');

const alertH1 = e => {
  alert(`addEventListener: Great! You are reading the heading!`);
  // remove Event after it has been triggered
  // h1.removeEventListener('mouseenter', alertH1);
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

// remove event listeners

// old school
// h1.onmouseenter = function (e) {
//   alert(`addEventListener: Great! You are reading the heading!`);
// };

// CAPTURING AND BUBBLING
// events bubble up from the target to the root

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
console.log(randomColor());

// by default events only listen to the bubbling phase

document.querySelector('.nav__link').addEventListener('click', function (e) {
  console.log('LINK', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();

  // stop event propagation
  // e.stopPropagation(); // usually not recommended
});
document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log('LINKS-CONTAINER', e.target, e.currentTarget);
  this.style.backgroundColor = randomColor();
});
document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    console.log('NAV', e.target, e.currentTarget);
    this.style.backgroundColor = randomColor();
  },
  false
); // if "true" will listen to capturing events

// event target is always the same, even if even bubbles up
// event currenTarget is where the event happens, not the one that is clicked. (=== this)


// DOM Traversing (selecting elements from another element)

const h1 = document.querySelector('h1');

// going downwards: child

console.log(h1.querySelectorAll('.highlight')); // no matter how deep it has to go to find the children

console.log(h1.childNodes); // not that used
console.log(h1.children); // updated live collection! Only direct children
console.log(h1.firstElementChild);
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

// find parent no matter how far

h1.closest('.header').style.background = 'var(--gradient-secondary)';

h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways: siblings

console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// All siblings: move up and then get all children
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5';
});
*/

// TAB component
