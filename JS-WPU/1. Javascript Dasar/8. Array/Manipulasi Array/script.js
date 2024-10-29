// Manipulasi Array

// 1. Menambah Isi Array

// var arr = [];
// arr[0] = "Dalis";
// arr[1] = "Hadi";
// arr[2] = "Saputra";
// console.log(arr);

// 2. Menghapus Isi Array

// var arr = ["Dalis", "Hadi", "Saputra"];
// arr[1] = undefined;
// console.log(arr);

// 3. Menampilkan Isi Array

// var arr = ["Dalis", "Hadi", "Saputra"];

// for( var i = 0; i < arr.length; i++ ) {
//    console.log('Mahasiswa ke-' + (i+1) + ' :' + arr[i]);
// }

// Method pada Array
// var arr = ['Dalis' , 'Hadi' , 'Saputra'];
// 1.Join
// 

// 2. Push & Pop
// arr.push('Doddy','Ridwan');
// arr.pop();
// arr.pop();


// 3. Unshift dan Shift
// arr.unshift('Doddo');
// arr.shift();
// arr.shift();
// console.log(arr.join('-'));

// 4.splice
// var arr = ['Dalis' , 'Hadi' , 'Saputra'];
// arr.splice(2, 0, 'Herman');
// console.log(arr.join('-'));

// 5. slice
// var arr = ['Dalis' , 'Hadi' , 'Saputra', 'Herman' , 'Ridwan'];
// var arr2 = arr.slice(1,4);
// console.log(arr2.join('-'));

// 6. forEach
// var angka = [1,2,3,4,5,6,7,8];
// for ( var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }

// angka.forEach(function(e) {
//     console.log(e);
// });

// 7. Map
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 3;
// });
// console.log(angka2.join(' - '));

// 8. Sort - Mengurutkan array

// var angka = [1,2,10,5,20,3,6,8,4];
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - '));


// 9. Filter - & Find Mencari nilai lebih dari satu
var angka = [1,2,10,5,20,3,6,8,4];
var angka2 = angka.find(function(x) {
    return x > 4;
});
console.log(angka2);





    




