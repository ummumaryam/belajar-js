// var angka = prompt('masukkan angka:')
// if (angka % 2 == 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if ( angka % 2 == 1) {
//     alert(angka + ' adalah bilangan GANJIL');
// }else {
//     alert('yang anda masukkan bukan angka !!');
// }

var jmlangkot = 10;
var angkotberoperasi = 6;

for ( var noangkot = 1; noangkot <= jmlangkot; noangkot++) {

    if (noangkot <= 6) {
        console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik.');
    }else if(noangkot ===8 || noangkot ===10) {
        console.log('Angkot No. ' + noangkot + ' Sedang Lembur.');
    }else {
        console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi.');
    }

}