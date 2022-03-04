
const elements = [
  '.title h1 span',
  '.title h2',
  '.title h3',
  '.navbar ul li a',
  '.navbar'
];

document.querySelector('.title h1 span').addEventListener('mouseover', () => {
  document.querySelector('.wrapper').id = 'drip';
  document.querySelector('canvas').id = 'canvasdrip';
  elements.forEach(element => {
    const moreElements = document.querySelectorAll(element);
    moreElements.forEach(anotherElement => {
      anotherElement.id = 'transparent';
    });
  });
});

document.querySelector('.title h1 span').addEventListener('mouseout', () => {
  document.querySelector('.wrapper').id = '';
  document.querySelector('canvas').id = '';
  elements.forEach(element => {
    const moreElements = document.querySelectorAll(element);
    moreElements.forEach(anotherElement => {
      anotherElement.id = '';
    });
  });
});