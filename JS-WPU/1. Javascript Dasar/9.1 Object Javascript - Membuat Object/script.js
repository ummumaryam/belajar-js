// Membuat Object
// Object Literal
// var mhs = {
//     nama : "Dalis Hadi Saputra",
//     umur : 30,
//     ips : [3.00, 2.67, 3.25],
//     alamat : {
//         jalan : "Jl. Perwira",
//         Kota : "Dumai",
//         Provinsi : "Riau"
//     }
// };

// function Declaration

function buatObjectMahasiswa(nama, nrp, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nrp = nrp;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMahasiswa('Dalis Hadi Saputra','1610090811345','hadhieringgo@yahoo.com','Teknik Industri')

var mhs4 = buatObjectMahasiswa('Muhammad Ridwan','1610090811245','Ridwan34@gmail.com','Teknik Informatika')

// Constructor
function Mahasiswa(nama, nrp, email, jurusan) {
    this.nama = nama;
    this.nrp = nrp;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs5 = new Mahasiswa('Erik Abidal','191009081112','Erick@icloud.com','Teknik Kimia');

