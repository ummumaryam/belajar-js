
// menurut eloquentjavascript = function yang beroperasi pada function yang lain. Baik digunakan dalam argument maupun sebagai return value
// inti dari javascript adalah FUNCTION
// JAVASCRIPT MEMPERLAKUKAN FUNCTION SEBAGAI OBJECT - SITEPOINT.

// Kenapa menggunakan Higher Order Function
// 1. karena bisa menyederhanakan coding yang disebut dengan ABSTRAKSI
// 2. semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya

// C.A.R. Hoare, 1980 ACM Turing Award Lecture = Ada dua cara untuk merancang sebuah software: Cara Pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas tidak ada kekurangannya, dan cara lainnya adalah membuat programnya se kompleks mungkin sehingga tidak ada kekurangan yang jelas

// contoh 1
function kerjakanTugas(matakuliah, selesai) {
    console.log(`Mulai mengerjakan tugas ${matakuliah}...`);
    selesai();
}

function selesai() {
    console.log('Selesai mengerjakan tugas!');
}

// cara memanggilnya
kerjakanTugas('Pemograman Web', selesai);

// contoh 2
setTimeout(() => {
    console.log('hello world');
}, 1000);

// contoh 3 DOM
// const tombol = document.querySelector('.submit');
// tombol.addEventListener('click', function () {
//     console.log('tombol ditekan!');
// });

// contoh 4
function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
    }
}

let selamatMalam = ucapkanSalam('Malam');
selamatMalam('Dalis Hadi Saputra');



let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);

for (let i = 0; i < 10; i++) {
    console.log(i)
}

// ---------------------------------
function repeatLog(n) {
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
}
repeatLog(10)


function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i)
    }
}
repeat(10, console.log)
repeat(3, alert)

// mendekati functional programming

// contoh higher order function
// array.prototype.map()
// array.prototype.filter()
// array.prototype.reduce()