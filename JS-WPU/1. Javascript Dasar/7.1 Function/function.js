// function jumlahVolumeDuaKubus(a, b) {
//     var volumeA;
//     var volumeB;
//     var total;

//     volumeA = a * a * a;
//     volumeB = b * b * b;

//     total = volumeA + volumeB;

//     return total;
// }

// alert(jumlahVolumeDuaKubus(8, 3));
// alert(jumlahVolumeDuaKubus(10, 16));



// parameter dan argumen

function tambah(a,b) {
    return a + b;
}

function kali(a,b) {
    return a * b;
}

//parseInt adalah untuk mengubah string menjadi integer 

// var a = parseInt(prompt('masukkan nilai 1 :'));
// var b = parseInt(prompt('masukkan nilai 2 :'));
// var hasil = tambah(a*3,b*3);
var hasil = kali(tambah(1,2), tambah(3,4));
console.log(hasil);