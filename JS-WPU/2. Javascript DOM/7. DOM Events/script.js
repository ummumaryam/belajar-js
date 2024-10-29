// const p3 = document.querySelector('.p3');

// function ubahwarna() {
//     p2.style.backgroundColor = 'lightblue';
// }

// const p2 = document.querySelector('.p2');
// p2.onclick = ubahwarna;


const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function () {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLibaru = document.createTextNode('Item Baru');

    liBaru.appendChild(teksLibaru);
    ul.appendChild(liBaru);
});


const p3 = document.querySelector('.p3');

// ini event handler
// p3.onclick = function() {
//     p3.style.backgroundColor = 'lightblue';
// }
// p3.onclick = function() {
//     p3.style.color = 'red';
// }

// ini event listener
p3.addEventListener('mouseenter', function () {
    p3.style.backgroundColor = 'lightblue';
});

p3.addEventListener('mouseleave', function () {
    p3.style.backgroundColor = 'white';
});