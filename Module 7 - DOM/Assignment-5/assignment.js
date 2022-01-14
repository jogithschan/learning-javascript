const t1 = document.getElementById('task-1');
const t2 = document.querySelector('li');
t1.style.color='white';
t2.style.backgroundColor='black';

const title1 = document.querySelector('title');
title1.text = 'Assignment - Solved!';

const title2 = document.head.querySelector('title');
title2.text = 'Assignment - Solved! AGAIN!';

const heading = document.body.getElementsByTagName('h1');
heading[0].textContent = 'Assignment - Solved!';