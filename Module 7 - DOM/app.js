const ul = document.body.firstElementChild.nextElementSibling;
console.log(ul);
const firstLi = ul.firstElementChild;
console.log(firstLi);

const sect = document.querySelector('section');
const button = document.querySelector('button');
//sect.style.backgroundColor = 'blue';
sect.className = '';
button.addEventListener('click', () => {
  // if(sect.className === 'red-bg visible'){
  //   sect.className = 'red-bg invisible';
  // } else {
  //   sect.className = 'red-bg visible';
  // }
  sect.classList.toggle('invisible');
  sect.classList.toggle('visible');
})
// const h1 = document.getElementById('main-text');

// h1.textContent = 'new title';
// h1.style.color = 'white';
// h1.style.backgroundColor = 'black';

// const li = document.querySelector('li:last-of-type');
// li.textContent = li.textContent + ' modified!';

// //special property to select body or head
// const body = document.body;

// // const listItemElements = document.querySelectorAll('li');
// const listItemElements = document.getElementsByTagName('li');

// for(const listItem of listItemElements){
//   console.dir(listItem);
// }
