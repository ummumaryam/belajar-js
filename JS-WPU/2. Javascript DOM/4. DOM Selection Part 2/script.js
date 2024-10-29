// @ts-nocheck
// document.querySelector() - Menghasilkan Element

// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// document.querySelectorAll() - menghasilkan nodelist

const p = document.querySelectorAll('ul li');

for (let i = 0; i < p.length; i++) {
   p[i].style.backgroundColor = 'blue';

}

// const p4 = document.getElementsByTagName('p');
// p4[0].style.backgroundColor = 'lightblue';

// // -------------------------------------------------

// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// atau

// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';

// hasilnya sama
