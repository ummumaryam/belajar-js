// Dom Manipulation Method
// - Manipulasi Element

// - Manipulasi Node
// buat elemen baru
const pBaru = document.createElement('p');
const teksPbaru = document.createTextNode('Dalis Hadi Saputra');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPbaru);
// simpan pBaru di akhir Section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);

// ------------------------------------------

const liBaru = document.createElement('li');
const teksLibaru = document.createTextNode('Item Baru');

liBaru.appendChild(teksLibaru);

const ul = document.querySelector('section#b ul');
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(liBaru, li2);

// ---------------------------------------------
// remove element

const link = document.getElementsByTagName('a')[0];

sectionA.removeChild(link);

// -----------------------------------------------
// Mereplace element paragraf 4 di section b

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru !');

h2Baru.appendChild(teksH2Baru);

sectionB.replaceChild(h2Baru, p4);

// beri warna pada latihan yang telah kita kerjakan
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';




