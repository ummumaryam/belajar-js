var noangkot = 1;
var jmlangkot = 10;
var angkotberoperasi = 6;

while (noangkot <= angkotberoperasi) {
    console.log('Angkot No. ' + noangkot + ' beroperasi dengan baik');
    noangkot++;
}
for ( var noangkot = angkotberoperasi + 1; noangkot <= jmlangkot; noangkot++ ) {
    console.log('Angkot No. ' + noangkot + ' sedang tidak beroperasi');
}
    