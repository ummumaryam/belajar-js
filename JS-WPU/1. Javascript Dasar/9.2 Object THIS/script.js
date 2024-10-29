// membuat Object

// This -> sebuah Keyword Special yang secara otomatis didefinisikan di dalam function

// console.log(this);

// cara 1 - function declaration
// function halo() {
//     console.log(this);
//     console.log('halo');
// }

// this.halo();
// this mengembalikan Object Global



// cara 2 - object literal
// var obj = {a : 10, nama : 'Dalis Hadi Saputra'};
// obj.halo = function() {
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this mengembalikan object yang bersangkutan

// ! ini adalah sebuah komentar
// todo ini adalah sebuah
// * yang dinamakan
// ? yang dinamakan dengan ini adalah sebuah 
// cara 3 - Constractor
function Halo() {
    console.log(this);
    console.log('halo');
}

var obj1 = new Halo();
var obj2 = new Halo();
// this mengembalikan object yang baru dibuat