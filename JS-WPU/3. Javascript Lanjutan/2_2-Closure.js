// Kenapa kita menggunakan Closure
// - untuk membuat function factories
// - untuk membuat seolah-olah private method

{
    function init() {
        let nama = "Dalis Hadi saputra"; // local variable
        function tampilNama() {
            // inner function (closure*)
            console.log(nama); // akses ke parent variable
        }
        tampilNama();
    }

    init();
}

// function init() {
//    return function (nama) { // anonimous function - func tanpa nama
//       console.log(nama);
//    }
// }

// let panggilNama = init();
// panggilNama('Maryam');
// panggilNama('Qurrta');
// panggilNama('Ridwan');

// -------------------------------------------------------

function ucapkanSalam(waktu) {
    return function (nama) {
        console.log(`Halo ${nama}, Selamat ${waktu}`);
    };
}

let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

selamatPagi("Dalis Hadi");
selamatMalam("Krismantari");
// console.log(selamatPagi);

// ---------------------------------------------------------

// contoh lain
let add = (function () {
    let conter = 0;
    return function () {
        return ++conter;
    };
})();

// conter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());

function counter() {
    let count = 0;

    function inner() {
        count++;
        console.log(`Fungsi counter telah dipanggil sebanyak ${count} kali.`);
    }
    return inner;
}

const hitung = counter();
hitung();
hitung();
hitung();
hitung();
hitung();
hitung();
hitung();
hitung();
