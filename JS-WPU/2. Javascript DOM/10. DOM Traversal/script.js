// Event Handling
// const close = document.querySelectorAll('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function() {
//     card.style.display = 'none';
// });

// DOM Traversal
// const close = document.querySelectorAll('.close');

// for ( let i = 0; i < close.length; i++) {
//     close[i].addEventListener('click', function(t) { 
//         // close[i].parentElement.style.display = 'none';
//         t.target.parentElement.style.display = 'none';
//     });
// }

// close.forEach(function(el) {
//     el.addEventListener('click', function(t) {
//         t.target.parentElement.style.display = 'none';
//         t.preventDefault();
//         t.stopPropagation();
//     });
    
// });

// const nama = document.querySelector('.nama');
// console.log(nama.nextElementSibling);

// const cards = document.querySelectorAll('.card');
// cards.forEach(function(card) {
//     card.addEventListener('click', function (e) {
//         alert('ok');
//     }); 
// });




// Event Bubbling
const container = document.querySelector('.container');

container.addEventListener('click', function(e) {
    if( e.target.className == 'close') {
        e.target.parentElement.style.display = 'none';
    }
});

