
// function greet() {
//     let name = "Dalis";
//     console.log(name);
// }

// greet();
// console.log(name);

// block scope
let nomor = 11;
function angka() {
    if (nomor % 2 == 0) {
        let pesan = "Genap";
        console.log(pesan);
    } else {
        console.log(pesan);

    }
}
angka();

// Lexical Scope
// function parent() {
//     let name = "Tari";
//     child();

//     function child() {
//         console.log(name);
//     }
// }

// parent();

// Name Conflict
let number = 10;
let pesan = "";
if (number % 2 == 0) {
    let pesan = "Genap";
    console.log(pesan);
}
console.log(pesan);
