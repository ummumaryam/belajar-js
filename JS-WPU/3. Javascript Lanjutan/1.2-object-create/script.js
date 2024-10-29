// @ts-nocheck
// Cara Membuat Object pada Javascript
// PROBLEM -> tidak efektif untuk object yang banyak
// 1. Object Literal

// let mahasiswa = {
//    nama: 'Dalis Hadi',
//    energy: 10,
//    makan: function (porsi) {
//       this.energy = this.energy + porsi;
//       console.log(`Halo ${this.nama}, selamat Makan!`);
//    }
// };

// let mahasiswa2 = {
//    nama: 'Krismantari',
//    energy: 12,
//    makan: function (porsi) {
//       this.energy = this.energy + porsi;
//       console.log(`Halo ${this.nama}, selamat Makan!`);
//    }
// };


// 2. Function Declaration

// const methodMahasiswa = {
//    makan: function (porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat Makan!`);
//    },
//    main: function (jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain!`);
//    },
//    tidur: function (jam) {
//       this.energi += jam;
//       console.log(`Halo ${this.nama}, selamat tidur!`);
//    }
// }

// function Mahasiswa(nama, energi) {
//    let mahasiswa = {};
//    mahasiswa.nama = nama;
//    mahasiswa.energi = energi;

//    mahasiswa.makan = methodMahasiswa.makan;
//    mahasiswa.main = methodMahasiswa.main;
//    mahasiswa.tidur = methodMahasiswa.tidur;


//    return mahasiswa;
// }

// let dalishadi = Mahasiswa('Dalis Hadi Saputra', 13);
// let krismantari = Mahasiswa('Krismantari', 11);

// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energi) {

//    this.nama = nama;
//    this.energi = energi;

//    this.makan = function (porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat Makan!`);
//    }

//    this.main = function (jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain!`);
//    }

// }

// let dalishadi = new Mahasiswa('Dalis Hadi S.', 13);
// let krismantari = new Mahasiswa('Krismantari', 11);


// 4. Object.create

const methodMahasiswa = {
   makan: function (porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat Makan!`);
   },
   main: function (jam) {
      this.energi -= jam;
      console.log(`Halo ${this.nama}, selamat bermain!`);
   },
   tidur: function (jam) {
      this.energi += jam;
      console.log(`Halo ${this.nama}, selamat tidur!`);
   }
}

function Mahasiswa(nama, energi) {
   let mahasiswa = Object.create(methodMahasiswa);
   mahasiswa.nama = nama;
   mahasiswa.energi = energi;

   return mahasiswa;
}

let dalishadi = Mahasiswa('Dalis Hadi Saputra', 13);
let krismantari = Mahasiswa('Krismantari', 11);