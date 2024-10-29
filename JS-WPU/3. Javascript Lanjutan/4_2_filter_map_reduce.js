
// map dan forEach mirip
// forEach tidak menghasilkan Array Baru
// Map menghasilkan Array Baru
// Reduce sama menghasilkan Array 


const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]
// const angka = [1, 2, 3, 4, 4, -5, 9, 12, 2, 4]

// mencari angka >= 3
// for
const newAngka = []
for (let i = 0; i < angka.length; i++) {
    if (angka[i] >= 3) {
        newAngka.push(angka[i])
    }
}
console.log(newAngka)

// filter
// const newAngka1 = angka.filter(function (a) {
//     return a >= 3;
// })
// console.log(newAngka1)

// Arrow Function 
const newAngka1 = angka.filter(a => a >= 3)

console.log(newAngka1)

// Map
// kalikan semua angka dengan 3
const newAngka2 = angka.map(a => a * 3)
// console.log(angka);
console.log(newAngka2)

// Reduce
// jumlahkan seluruh elemen pada array
// -1 + 8 + 9 + 1 + 4 + -5 + -4 + 3 + 2 + 9
const newAngka3 = angka.reduce((accumulator, currentValue) => accumulator + currentValue, 5)
console.log(newAngka3)

// Method Chaining -> menggabungkan semua fungsi2
// cari angka > 5
// kalikan 3
// jumlahkan
const hasil = angka.filter(a => a > 5) // 8, 9, 9
    .map(a => a * 3) // 24, 27, 27
    // .map(a => a / 2)
    .reduce((acc, cur) => acc + cur); // 78
console.log(hasil);
