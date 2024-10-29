// Cara Membuat Object pada Javascript
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
// function Mahasiswa(nama, energi) {
//    let mahasiswa = {};
//    mahasiswa.nama = nama;
//    mahasiswa.energi = energi;

//    mahasiswa.makan = function (porsi) {
//       this.energi += porsi;
//       console.log(`Halo ${this.nama}, selamat Makan!`);
//    }

//    mahasiswa.main = function (jam) {
//       this.energi -= jam;
//       console.log(`Halo ${this.nama}, selamat bermain!`);
//    }
//    return mahasiswa;
// }

// let dalishadi = Mahasiswa('Dalis Hadi Saputra', 13);
// let krismantari = Mahasiswa('Krismantari', 11);

// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energi) {

   this.nama = nama;
   this.energi = energi;

   this.makan = function (porsi) {
      this.energi += porsi;
      console.log(`Halo ${this.nama}, selamat Makan!`);
   }

   this.main = function (jam) {
      this.energi -= jam;
      console.log(`Halo ${this.nama}, selamat bermain!`);
   }

}

let dalishadi = new Mahasiswa('Dalis Hadi S.', 13);
let krismantari = new Mahasiswa('Krismantari', 11);


// 4. Object.create